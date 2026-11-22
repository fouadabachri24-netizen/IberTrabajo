// IberTrabajo - Security Module
// Fonctions de sécurité centralisées: sanitisation, validation, hachage
// À inclure AVANT app.js dans index.html

'use strict';

// ================================================================
// SANITISATION XSS (Cross-Site Scripting)
// ================================================================
// Toute donnée non fiable DOIT passer par sanitizeHTML avant injection dans le DOM
const Security = {

  /**
   * Échappe les caractères HTML dangereux pour prévenir le XSS
   * Usage: element.innerHTML = Security.sanitizeHTML(userInput)
   * @param {string} str - Chaîne à assainir
   * @returns {string} - Chaîne assainie
   */
  sanitizeHTML(str) {
    if (typeof str !== 'string') return String(str ?? '');
    const map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '/': '&#x2F;',
      '`': '&#x60;',
      '=': '&#x3D;'
    };
    return str.replace(/[&<>"'`=/]/g, (s) => map[s]);
  },

  /**
   * Nettoie un texte multi-lignes (conserve les sauts de ligne)
   * @param {string} str
   * @returns {string}
   */
  sanitizeMultiline(str) {
    if (typeof str !== 'string') return '';
    return str
      .split('\n')
      .map(line => this.sanitizeHTML(line))
      .join('\n');
  },

  /**
   * Valide et nettoie une URL (WhatsApp, Unsplash uniquement)
   * @param {string} url
   * @param {string[]} allowedHosts - Liste de domaines autorisés
   * @returns {string|null} URL valide ou null
   */
  sanitizeURL(url, allowedHosts = []) {
    if (!url || typeof url !== 'string') return null;
    try {
      const parsed = new URL(url);
      if (!['https:', 'http:', 'data:'].includes(parsed.protocol)) return null;
      if (parsed.protocol === 'data:') {
        // Autoriser uniquement les data: images
        if (!url.startsWith('data:image/')) return null;
        return url;
      }
      if (allowedHosts.length > 0) {
        const isAllowed = allowedHosts.some(host => parsed.hostname.endsWith(host));
        if (!isAllowed) return null;
      }
      return parsed.href;
    } catch {
      return null;
    }
  },

  /**
   * Hachage simple côté client (pour affichage, PAS pour sécurité serveur)
   * Les mots de passe RÉELS sont hashés par Supabase Auth (bcrypt)
   * Ceci est uniquement pour masquer les mots de passe en localStorage (mode démo)
   * @param {string} str
   * @returns {string} Hash non cryptographique
   */
  async hashPassword(str) {
    if (typeof window !== 'undefined' && window.crypto && window.crypto.subtle) {
      const encoder = new TextEncoder();
      const data = encoder.encode(str + 'ibertrabajo_salt_2025');
      const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    }
    // Fallback: obfuscation basique si SubtleCrypto non disponible
    return btoa(str + 'ibertrabajo');
  },

  /**
   * Valide un email
   * @param {string} email
   * @returns {boolean}
   */
  isValidEmail(email) {
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  },

  /**
   * Valide un numéro de téléphone espagnol (format international)
   * @param {string} phone
   * @returns {boolean}
   */
  isValidPhone(phone) {
    const cleaned = phone.replace(/[\s\-().+]/g, '');
    return /^(34)?[6-9]\d{8}$/.test(cleaned);
  },

  /**
   * Valide un CIF/NIF espagnol (format de base)
   * @param {string} cif
   * @returns {boolean}
   */
  isValidCIF(cif) {
    return /^[A-HJNPQRSUVW]\d{7}[0-9A-J]$/i.test(cif.replace(/[-\s]/g, ''));
  },

  /**
   * Valide la force d'un mot de passe (minimum 8 caractères)
   * @param {string} password
   * @returns {{ valid: boolean, message: string }}
   */
  validatePassword(password) {
    if (!password || password.length < 8) {
      return { valid: false, message: 'La contraseña debe tener al menos 8 caracteres' };
    }
    if (!/[A-Z]/.test(password) && !/[0-9]/.test(password)) {
      return { 
        valid: false, 
        message: 'La contraseña debe incluir al menos un número o una letra mayúscula' 
      };
    }
    return { valid: true, message: '' };
  },

  /**
   * Limite la longueur d'une chaîne (prévention données excessives)
   * @param {string} str
   * @param {number} maxLength
   * @returns {string}
   */
  truncate(str, maxLength = 2000) {
    if (!str) return '';
    return String(str).substring(0, maxLength);
  },

  /**
   * Nettoie un objet utilisateur pour le stocker (retire le mot de passe)
   * @param {Object} user
   * @returns {Object}
   */
  sanitizeUserForStorage(user) {
    if (!user) return null;
    const { password, ...safeUser } = user;
    return safeUser;
  },

  /**
   * Génère un ID unique sécurisé
   * @returns {string}
   */
  generateId(prefix = 'id') {
    const array = new Uint32Array(4);
    window.crypto.getRandomValues(array);
    return `${prefix}-${Array.from(array).map(v => v.toString(16)).join('')}`;
  },

  /**
   * Rate limiter simple côté client (prévention spam)
   * @param {string} action - Clé d'action
   * @param {number} maxAttempts - Tentatives max
   * @param {number} windowMs - Fenêtre en millisecondes
   * @returns {boolean} - true si autorisé, false si bloqué
   */
  rateLimiter: {},
  checkRateLimit(action, maxAttempts = 5, windowMs = 60000) {
    const now = Date.now();
    if (!this.rateLimiter[action]) {
      this.rateLimiter[action] = { count: 0, resetAt: now + windowMs };
    }
    const limiter = this.rateLimiter[action];
    if (now > limiter.resetAt) {
      limiter.count = 0;
      limiter.resetAt = now + windowMs;
    }
    limiter.count++;
    return limiter.count <= maxAttempts;
  }
};

// Export global
window.Security = Security;
