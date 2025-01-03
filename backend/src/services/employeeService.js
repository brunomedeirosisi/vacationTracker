const employeeRepository = require('../domain/repositories/employeeRepository');

/**
 * Cria um novo funcionário.
 * @param {Object} employeeData - Dados do funcionário.
 * @returns {Promise<Object>} - O funcionário criado.
 */
async function createEmployee(employeeData) {
  return await employeeRepository.createEmployee(employeeData);
}

/**
 * Lista todos os funcionários.
 * @returns {Promise<Array>} - Lista de funcionários.
 */
async function listEmployees() {
  return await employeeRepository.listEmployees();
}

/**
 * Busca um funcionário por ID.
 * @param {string} id - ID do funcionário.
 * @returns {Promise<Object|null>} - O funcionário encontrado ou null.
 */
async function getEmployeeById(id) {
  return await employeeRepository.findEmployeeById(id);
}

/**
 * Atualiza um funcionário.
 * @param {string} id - ID do funcionário.
 * @param {Object} updateData - Dados para atualização.
 * @returns {Promise<Object|null>} - O funcionário atualizado ou null.
 */
async function updateEmployee(id, updateData) {
  return await employeeRepository.updateEmployee(id, updateData);
}

/**
 * Deleta um funcionário.
 * @param {string} id - ID do funcionário.
 * @returns {Promise<boolean>} - true se foi deletado, false caso contrário.
 */
async function deleteEmployee(id) {
  return await employeeRepository.deleteEmployee(id);
}

module.exports = {
  createEmployee,
  listEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};
