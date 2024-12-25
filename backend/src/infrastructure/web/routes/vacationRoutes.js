const express = require('express');
const router = express.Router();
const vacationService = require('../../../services/vacationService');

// Criar um novo período de férias
router.post('/', async (req, res) => {
  try {
    const vacation = await vacationService.createVacation(req.body);
    res.status(201).json(vacation);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Listar todos os períodos de férias
router.get('/', async (req, res) => {
  try {
    const vacations = await vacationService.listVacations();
    res.status(200).json(vacations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Buscar um período de férias específico por ID
router.get('/:id', async (req, res) => {
  try {
    const vacation = await vacationService.getVacationById(req.params.id);
    if (vacation) {
      res.status(200).json(vacation);
    } else {
      res.status(404).json({ error: 'Período de férias não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Atualizar um período de férias
router.put('/:id', async (req, res) => {
  try {
    const updatedVacation = await vacationService.updateVacation(req.params.id, req.body);
    if (updatedVacation) {
      res.status(200).json(updatedVacation);
    } else {
      res.status(404).json({ error: 'Período de férias não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Deletar um período de férias
router.delete('/:id', async (req, res) => {
  try {
    const deletedVacation = await vacationService.deleteVacation(req.params.id);
    if (deletedVacation) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Período de férias não encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
