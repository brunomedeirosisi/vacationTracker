const projectRepository = require('../domain/repositories/projectRepository');

/**
 * Cria um novo projeto.
 * @param {Object} projectData - Dados do projeto.
 * @returns {Promise<Object>} - O projeto criado.
 */
async function createProject(projectData) {
  return await projectRepository.createProject(projectData);
}

/**
 * Lista todos os projetos.
 * @returns {Promise<Array>} - Lista de projetos.
 */
async function listProjects() {
  return await projectRepository.listProjects();
}

/**
 * Busca um projeto por ID.
 * @param {string} id - ID do projeto.
 * @returns {Promise<Object|null>} - O projeto encontrado ou null.
 */
async function getProjectById(id) {
  return await projectRepository.findProjectById(id);
}

/**
 * Atualiza um projeto.
 * @param {string} id - ID do projeto.
 * @param {Object} updateData - Dados para atualização.
 * @returns {Promise<Object|null>} - O projeto atualizado ou null.
 */
async function updateProject(id, updateData) {
  return await projectRepository.updateProject(id, updateData);
}

/**
 * Deleta um projeto.
 * @param {string} id - ID do projeto.
 * @returns {Promise<boolean>} - true se foi deletado, false caso contrário.
 */
async function deleteProject(id) {
  return await projectRepository.deleteProject(id);
}

async function getProjectsWithDetails() {
  // Fetch all projects
  const projects = await projectRepository.listProjects();

  // Create JSON structure for each project
  const projectsWithDetails = await Promise.all(
    projects.map(async (project) => {
      // Get all employees dedicated to this project
      const employees = await employeeRepository.findEmployeesByProjectId(project._id);

      // Map employees to "groups" format
      const groups = employees.map((employee, index) => ({
        id: index + 1, // Unique ID for this request
        content: employee.name,
      }));

      // Map vacations to "items" format
      const items = employees.flatMap((employee, groupIndex) =>
        employee.vacations.map((vacation, vacationIndex) => ({
          id: `vacation-${groupIndex}-${vacationIndex}`, // Unique ID for this request
          content: `${Math.ceil(
            (new Date(vacation.end_date) - new Date(vacation.start_date)) / (1000 * 60 * 60 * 24)
          )} days`,
          start: vacation.start_date,
          end: vacation.end_date,
          group: groupIndex + 1, // Link to the group ID
          className: 'designer task', // Example className
        }))
      );

      return {
        project_name: project.project_name,
        groups,
        items,
      };
    })
  );

  return projectsWithDetails;
}

module.exports = {
  createProject,
  listProjects,
  getProjectById,
  updateProject,
  deleteProject,
  getProjectsWithDetails,
};
