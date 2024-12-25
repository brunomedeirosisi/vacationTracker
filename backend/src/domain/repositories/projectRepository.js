const Project = require('../entities/project');

const createProject = async (projectData) => {
  const project = new Project(projectData);
  return project.save();
};

const findProjectById = async (id) => {
  return Project.findById(id);
};

const listProjects = async () => {
  return Project.find();
};

const updateProject = async (id, updateData) => {
  return Project.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteProject = async (id) => {
  return Project.findByIdAndDelete(id);
};

module.exports = {
  createProject,
  findProjectById,
  listProjects,
  updateProject,
  deleteProject,
};
