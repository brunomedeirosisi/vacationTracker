const express = require('express');
const router = express.Router();
const dedicationService = require('../../../services/dedicationService');

/**
 * @swagger
 * tags:
 *   name: Dedications
 *   description: Gerenciamento de Dedicações
 */

/**
 * @swagger
 * path:
 *  /api/dedications:
 *    post:
 *      summary: Cria uma nova dedicação
 *      tags: [Dedications]
 *      requestBody:
 *        description: Dados da dedicação a ser criada
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                employee_name:
 *                  type: string
 *                project:
 *                  type: string
 *                initial_date_real:
 *                  type: string
 *                  format: date
 *                final_date_real:
 *                  type: string
 *                  format: date
 *                percentage:
 *                  type: number
 *                  format: float
 *      responses:
 *        201:
 *          description: Dedicação criada com sucesso
 *        500:
 *          description: Erro ao criar dedicação
 */
router.post('/', async (req, res) => {
  try {
    const dedication = await dedicationService.createDedication(req.body);
    res.status(201).json(dedication);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * path:
 *  /api/dedications:
 *    get:
 *      summary: Lista todas as dedicações
 *      tags: [Dedications]
 *      responses:
 *        200:
 *          description: Lista de dedicações
 *        500:
 *          description: Erro ao listar dedicações
 */
router.get('/', async (req, res) => {
  try {
    const dedications = await dedicationService.listDedications();
    res.status(200).json(dedications);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * path:
 *  /api/dedications/{id}:
 *    get:
 *      summary: Busca uma dedicação específica por ID
 *      tags: [Dedications]
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: ID da dedicação a ser buscada
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: Dedicação encontrada
 *        404:
 *          description: Dedicação não encontrada
 *        500:
 *          description: Erro ao buscar dedicação
 */
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

/**
 * @swagger
 * path:
 *  /api/dedications/{id}:
 *    put:
 *      summary: Atualiza uma dedicação
 *      tags: [Dedications]
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: ID da dedicação a ser atualizada
 *          schema:
 *            type: string
 *      requestBody:
 *        description: Dados para atualização da dedicação
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                employee_name:
 *                  type: string
 *                project:
 *                  type: string
 *                initial_date_real:
 *                  type: string
 *                  format: date
 *                final_date_real:
 *                  type: string
 *                  format: date
 *                percentage:
 *                  type: number
 *                  format: float
 *      responses:
 *        200:
 *          description: Dedicação atualizada com sucesso
 *        404:
 *          description: Dedicação não encontrada
 *        500:
 *          description: Erro ao atualizar dedicação
 */
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

/**
 * @swagger
 * path:
 *  /api/dedications/{id}:
 *    delete:
 *      summary: Deleta uma dedicação
 *      tags: [Dedications]
 *      parameters:
 *        - name: id
 *          in: path
 *          required: true
 *          description: ID da dedicação a ser deletada
 *          schema:
 *            type: string
 *      responses:
 *        204:
 *          description: Dedicação deletada com sucesso
 *        404:
 *          description: Dedicação não encontrada
 *        500:
 *          description: Erro ao deletar dedicação
 */
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
