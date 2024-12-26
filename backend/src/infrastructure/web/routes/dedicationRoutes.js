const express = require('express');
const router = express.Router();
const dedicationService = require('../../../services/dedicationService');

// Criar uma nova dedicação
router.post('/', async (req, res) => {
  try {
    const dedication = await dedicationService.createDedication(req.body);
    res.status(201).json(dedication);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Listar todas as dedicações
router.get('/', async (req, res) => {
  try {
    const dedications = await dedicationService.listDedications();
    res.status(200).json(dedications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Buscar uma dedicação específica por ID
router.get('/:id', async (req, res) => {
  try {
    const dedication = await dedicationService.getDedicationById(req.params.id);
    if (dedication) {
      res.status(200).json(dedication);
    } else {
      res.status(404).json({ error: 'Dedicação não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Atualizar uma dedicação
router.put('/:id', async (req, res) => {
  try {
    const updatedDedication = await dedicationService.updateDedication(req.params.id, req.body);
    if (updatedDedication) {
      res.status(200).json(updatedDedication);
    } else {
      res.status(404).json({ error: 'Dedicação não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Deletar uma dedicação
router.delete('/:id', async (req, res) => {
  try {
    const deletedDedication = await dedicationService.deleteDedication(req.params.id);
    if (deletedDedication) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Dedicação não encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
