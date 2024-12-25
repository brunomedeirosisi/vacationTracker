const vacationRepository = require('../domain/repositories/vacationRepository');

/**
 * Cria um novo período de férias.
 * @param {Object} vacationData - Dados do período de férias.
 * @returns {Promise<Object>} - O período de férias criado.
 */
async function createVacation(vacationData) {
  return await vacationRepository.create(vacationData);
}

/**
 * Lista todos os períodos de férias.
 * @returns {Promise<Array>} - Lista de períodos de férias.
 */
async function listVacations() {
  return await vacationRepository.findAll();
}

/**
 * Busca um período de férias por ID.
 * @param {string} id - ID do período de férias.
 * @returns {Promise<Object|null>} - O período de férias encontrado ou null.
 */
async function getVacationById(id) {
  return await vacationRepository.findById(id);
}

/**
 * Atualiza um período de férias.
 * @param {string} id - ID do período de férias.
 * @param {Object} updateData - Dados para atualização.
 * @returns {Promise<Object|null>} - O período de férias atualizado ou null.
 */
async function updateVacation(id, updateData) {
  return await vacationRepository.update(id, updateData);
}

/**
 * Deleta um período de férias.
 * @param {string} id - ID do período de férias.
 * @returns {Promise<boolean>} - true se foi deletado, false caso contrário.
 */
async function deleteVacation(id) {
  return await vacationRepository.delete(id);
}

module.exports = {
  createVacation,
  listVacations,
  getVacationById,
  updateVacation,
  deleteVacation,
};
