const Employee = require('../entities/employee');

const createEmployee = async (employeeData) => {
  const employee = new Employee(employeeData);
  return employee.save();
};

const findEmployeeById = async (id) => {
  return Employee.findById(id).populate('projects.project vacations');
};

const listEmployees = async () => {
  return Employee.find().populate('projects.project vacations');
};

const updateEmployee = async (id, updateData) => {
  return Employee.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteEmployee = async (id) => {
  return Employee.findByIdAndDelete(id);
};

const findEmployeesByProjectId = async (projectId) => {
  // Find employees assigned to the specific project
  return Employee.find({ 'projects.project': projectId }).populate('vacations');
};

module.exports = {
  createEmployee,
  findEmployeeById,
  listEmployees,
  updateEmployee,
  deleteEmployee,
  findEmployeesByProjectId,
};
