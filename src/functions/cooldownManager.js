class CooldownManager {
  constructor() {
    this.cooldowns = new Map();
  }

  /**
   * Inicia um cooldown para um usuário e uma ação específica.
   * @param {string} userId - ID do usuário.
   * @param {string} action - Nome da ação (ex: "mensagem", "uso_item").
   * @param {number} time - Tempo de cooldown em milissegundos.
   */
  startCooldown(userId, action, time) {
    if (!userId || typeof userId !== "string") {
      return new Error("[ZyraPlus] - The parameter <userId> must be a valid string!");
    }
    if (!action || typeof action !== "string") {
      return new Error("[ZyraPlus] - The parameter <action> must be a valid string!");
    }
    if (!time || typeof time !== "number" || time <= 0) {
      return new Error("[ZyraPlus] - The parameter <time> must be a positive number!");
    }

    if (!this.cooldowns.has(userId)) {
      this.cooldowns.set(userId, new Map());
    }
    this.cooldowns.get(userId).set(action, Date.now() + time);
  }

  /**
   * Verifica se um usuário está em cooldown para uma ação específica.
   * @param {string} userId - ID do usuário.
   * @param {string} action - Nome da ação.
   * @returns {boolean} - Retorna `true` se o usuário ainda estiver em cooldown.
   */
  isOnCooldown(userId, action) {
    if (!userId || typeof userId !== "string") {
      return new Error("[ZyraPlus] - The parameter <userId> must be a valid string!");
    }
    if (!action || typeof action !== "string") {
      return new Error("[ZyraPlus] - The parameter <action> must be a valid string!");
    }

    if (!this.cooldowns.has(userId)) return false;
    const userCooldowns = this.cooldowns.get(userId);
    if (!userCooldowns.has(action)) return false;
    return Date.now() < userCooldowns.get(action);
  }

  /**
   * Obtém o tempo restante de cooldown para um usuário e uma ação.
   * @param {string} userId - ID do usuário.
   * @param {string} action - Nome da ação.
   * @returns {number} - Tempo restante em milissegundos. Retorna 0 se não estiver em cooldown.
   */
  getRemainingCooldown(userId, action) {
    if (!userId || typeof userId !== "string") {
      return new Error("[ZyraPlus] - The parameter <userId> must be a valid string!");
    }
    if (!action || typeof action !== "string") {
      return new Error("[ZyraPlus] - The parameter <action> must be a valid string!");
    }

    if (!this.isOnCooldown(userId, action)) return 0;
    return this.cooldowns.get(userId).get(action) - Date.now();
  }

  /**
   * Remove o cooldown de um usuário para uma ação específica.
   * @param {string} userId - ID do usuário.
   * @param {string} action - Nome da ação.
   */
  clearCooldown(userId, action) {
    if (!userId || typeof userId !== "string") {
      return new Error("[ZyraPlus] - The parameter <userId> must be a valid string!");
    }
    if (!action || typeof action !== "string") {
      return new Error("[ZyraPlus] - The parameter <action> must be a valid string!");
    }

    if (this.cooldowns.has(userId)) {
      this.cooldowns.get(userId).delete(action);
    }
  }

  /**
   * Remove todos os cooldowns ativos.
   */
  clearAllCooldowns() {
    this.cooldowns.clear();
  }
}

export default new CooldownManager();
