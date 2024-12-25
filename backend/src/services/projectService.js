const projectRepository = require('../domain/repositories/projectRepository');

/**
 * Cria um novo projeto.
 * @param {Object} projectData - Dados do projeto.
 * @returns {Promise<Object>} - O projeto criado.
 */
async function createProject(projectData) {
  return await projectRepository.create(projectData);
}

/**
 * Lista todos os projetos.
 * @returns {Promise<Array>} - Lista de projetos.
 */
async function listProjects() {
  return await projectRepository.findAll();
}

/**
 * Busca um projeto por ID.
 * @param {string} id - ID do projeto.
 * @returns {Promise<Object|null>} - O projeto encontrado ou null.
 */
async function getProjectById(id) {
  return await projectRepository.findById(id);
}

/**
 * Atualiza um projeto.
 * @param {string} id - ID do projeto.
 * @param {Object} updateData - Dados para atualização.
 * @returns {Promise<Object|null>} - O projeto atualizado ou null.
 */
async function updateProject(id, updateData) {
  return await projectRepository.update(id, updateData);
}

/**
 * Deleta um projeto.
 * @param {string} id - ID do projeto.
 * @returns {Promise<boolean>} - true se foi deletado, false caso contrário.
 */
async function deleteProject(id) {
  return await projectRepository.delete(id);
}

module.exports = {
  createProject,
  listProjects,
  getProjectById,
  updateProject,
  deleteProject,
};
