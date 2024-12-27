const express = require('express');
const router = express.Router();

const projectService = require('../../../services/projectService');

// Nova rota para listar projetos com detalhes (grupos e período de férias)
router.get('/projects-with-details', async (req, res) => {
  try {
    const projectsWithDetails = await projectService.getProjectsWithDetails();
    res.status(200).json(projectsWithDetails);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para criar um novo projeto
router.post('/', async (req, res) => {
  try {
    const project = await projectService.createProject(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para listar todos os projetos
router.get('/', async (req, res) => {
  try {
    const projects = await projectService.listProjects();
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para buscar um projeto por ID
router.get('/:id', async (req, res) => {
  try {
    const project = await projectService.getProjectById(req.params.id);
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ error: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para atualizar um projeto
router.put('/:id', async (req, res) => {
  try {
    const updatedProject = await projectService.updateProject(req.params.id, req.body);
    if (updatedProject) {
      res.status(200).json(updatedProject);
    } else {
      res.status(404).json({ error: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para deletar um projeto
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await projectService.deleteProject(req.params.id);
    if (deleted) {
      res.status(200).json({ message: 'Project deleted successfully' });
    } else {
      res.status(404).json({ error: 'Project not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});



module.exports = router;
