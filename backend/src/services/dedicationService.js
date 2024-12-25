const dedicationRepository = require('../domain/repositories/dedicationRepository');

/**
 * Cria uma nova dedicação.
 * @param {Object} dedicationData - Dados da dedicação.
 * @returns {Promise<Object>} - A dedicação criada.
 */
async function createDedication(dedicationData) {
  return await dedicationRepository.create(dedicationData);
}

/**
 * Lista todas as dedicações.
 * @returns {Promise<Array>} - Lista de dedicações.
 */
async function listDedications() {
  return await dedicationRepository.findAll();
}

/**
 * Busca uma dedicação por ID.
 * @param {string} id - ID da dedicação.
 * @returns {Promise<Object|null>} - A dedicação encontrada ou null.
 */
async function getDedicationById(id) {
  return await dedicationRepository.findById(id);
}

/**
 * Atualiza uma dedicação.
 * @param {string} id - ID da dedicação.
 * @param {Object} updateData - Dados para atualização.
 * @returns {Promise<Object|null>} - A dedicação atualizada ou null.
 */
async function updateDedication(id, updateData) {
  return await dedicationRepository.update(id, updateData);
}

/**
 * Deleta uma dedicação.
 * @param {string} id - ID da dedicação.
 * @returns {Promise<boolean>} - true se foi deletado, false caso contrário.
 */
async function deleteDedication(id) {
  return await dedicationRepository.delete(id);
}

module.exports = {
  createDedication,
  listDedications,
  getDedicationById,
  updateDedication,
  deleteDedication,
};
