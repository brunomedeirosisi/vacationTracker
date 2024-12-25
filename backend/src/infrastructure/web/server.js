const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');
const cors = require('cors');
const dotenv = require('dotenv');
const db = require('../database/mongoose');
require("../../config/config");

const employeeRoutes = require('./routes/employeeRoutes');
const projectRoutes = require('./routes/projectRoutes');
const dedicationRoutes = require('./routes/dedicationRoutes');
const vacationRoutes = require('./routes/vacationRoutes');

// Configurações
//dotenv.config();

const app = express();
//connection from db here
db.connect(app);
app.use(cors());
app.use(express.json());

// Definindo as opções para o Swagger JSDoc
const options = {
    definition: {
      openapi: '3.0.0', // Especifica a versão do Swagger
      info: {
        title: 'API Managing Allocation',
        version: '1.0.0',
        description: 'API para gerenciamento de projetos e equipes',
      },
    },
    // Caminho para os arquivos com as anotações de documentação
    apis: ['./routes/dedicationRoutes.js'], // Caminho para os arquivos com rotas e modelos
  };
//, '../../domain/entities/*.js'
// Inicializando o Swagger JSDoc
const swaggerSpec = swaggerJSDoc(options);

// Configurando o Swagger UI para servir a documentação
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Rotas
app.use('/api/employee', employeeRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/dedications', dedicationRoutes);
app.use('/api/vacations', vacationRoutes);

// Porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));