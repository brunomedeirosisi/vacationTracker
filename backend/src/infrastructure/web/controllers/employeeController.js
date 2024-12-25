const EmployeeService = require('../../../application/services/employeeService');

class EmployeeController {
  async create(req, res) {
    try {
      const employee = await EmployeeService.createEmployee(req.body);
      res.status(201).json(employee);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async list(req, res) {
    const employees = await EmployeeService.listEmployees();
    res.status(200).json(employees);
  }

  async get(req, res) {
    const employee = await EmployeeService.getEmployeeById(req.params.id);
    if (!employee) return res.status(404).json({ error: 'Employee not found' });
    res.json(employee);
  }

  async update(req, res) {
    try {
      const employee = await EmployeeService.updateEmployee(req.params.id, req.body);
      res.json(employee);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async delete(req, res) {
    await EmployeeService.deleteEmployee(req.params.id);
    res.status(204).send();
  }
}

module.exports = new EmployeeController();
