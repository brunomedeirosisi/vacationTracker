const dedicationRepository = require('../domain/repositories/dedicationRepository');
const employeeRepository = require('../domain/repositories/employeeRepository');
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

async function getDedicationsWithDetails() {
  // Fetch all dedications
  const dedications = await dedicationRepository.findAll();

  // Fetch all employees
  const employees = await employeeRepository.listEmployees();

  // Map employees into "groups" format
  const groups = employees.map((employee, index) => {
    // Get the unique number of projects they are part of
    const uniqueProjects = new Set(
      dedications
        .filter((dedication) => dedication.employee_name === employee.name)
        .map((dedication) => dedication.project)
    );

    return {
      id: index + 1, // Unique ID for this request
      content: employee.name,
      value: uniqueProjects.size, // Count of unique projects
    };
  });

  // Map dedications into "items" format
  const items = dedications.map((dedication, index) => {
    // Find the worker's group ID based on the name
    const group = groups.find((group) => group.content === dedication.employee_name)?.id;

    return {
      id: index + 1, // Unique ID for this request
      content: `${dedication.project} - ${dedication.percentage}%`,
      start: dedication.initial_date_real,
      end: dedication.final_date_real,
      group, // Link to the worker's group ID
    };
  });

  return [{ project_name: "Team Allocation",groups, items }];
}

module.exports = {
  createDedication,
  listDedications,
  getDedicationById,
  updateDedication,
  deleteDedication,
  getDedicationsWithDetails,
};
