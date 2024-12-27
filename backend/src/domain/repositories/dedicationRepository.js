const Dedication = require('../entities/dedication');

/**
 * Cria uma nova dedicação no banco de dados.
 * @param {Object} dedicationData - Dados da dedicação.
 * @returns {Promise<Object>} - A dedicação criada.
 */
async function create(dedicationData) {
  const dedication = new Dedication(dedicationData);
  return await dedication.save();
}

/**
 * Retorna todas as dedicações do banco de dados.
 * @returns {Promise<Array>} - Lista de dedicações.
 */
async function findAll() {
  return await Dedication.find({});
}

/**
 * Retorna uma dedicação específica pelo ID.
 * @param {string} id - ID da dedicação.
 * @returns {Promise<Object|null>} - A dedicação encontrada ou null se não existir.
 */
async function findById(id) {
  return await Dedication.findById(id);
}

/**
 * Atualiza uma dedicação existente no banco de dados.
 * @param {string} id - ID da dedicação.
 * @param {Object} updateData - Dados para atualização.
 * @returns {Promise<Object|null>} - A dedicação atualizada ou null se não existir.
 */
async function update(id, updateData) {
  return await Dedication.findByIdAndUpdate(id, updateData, { new: true });
}

/**
 * Remove uma dedicação do banco de dados.
 * @param {string} id - ID da dedicação.
 * @returns {Promise<boolean>} - true se foi removido, false caso contrário.
 */
async function deleteById(id) {
  const result = await Dedication.findByIdAndDelete(id);
  return result !== null;
}

/**
 * Busca dedicações por nome de projeto.
 * @param {string} projectName - Nome do projeto.
 * @returns {Promise<Array>} - Lista de dedicações para o projeto.
 */
async function findByProjectName(projectName) {
  return await Dedication.find({ project: projectName });
}

module.exports = {
  create,
  findAll,
  findById,
  update,
  delete: deleteById,
  findByProjectName,
};
