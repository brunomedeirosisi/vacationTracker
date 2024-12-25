const express = require('express');
const router = express.Router();
const employeeService = require('../../../services/employeeService');

// Rota para criar um novo funcionário
router.post('/', async (req, res) => {
  try {
    const employee = await employeeService.createEmployee(req.body);
    res.status(201).json(employee);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para listar todos os funcionários
router.get('/', async (req, res) => {
  try {
    const employees = await employeeService.listEmployees();
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para buscar um funcionário por ID
router.get('/:id', async (req, res) => {
  try {
    const employee = await employeeService.getEmployeeById(req.params.id);
    if (employee) {
      res.status(200).json(employee);
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para atualizar um funcionário
router.put('/:id', async (req, res) => {
  try {
    const updatedEmployee = await employeeService.updateEmployee(req.params.id, req.body);
    if (updatedEmployee) {
      res.status(200).json(updatedEmployee);
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para deletar um funcionário
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await employeeService.deleteEmployee(req.params.id);
    if (deleted) {
      res.status(200).json({ message: 'Employee deleted successfully' });
    } else {
      res.status(404).json({ error: 'Employee not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
