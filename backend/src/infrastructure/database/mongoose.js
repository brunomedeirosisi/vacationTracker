const mongoose = require("mongoose");

/**
 * Configura a conexão com o MongoDB.
 * @param {Object} app - A instância do aplicativo Express.
 */
exports.connect = (app) => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true, // Melhora o gerenciamento de conexões
    autoIndex: false,         // Não cria índices automaticamente
    maxPoolSize: 10,          // Mantém até 10 conexões abertas
    serverSelectionTimeoutMS: 5000, // Tempo limite para seleção de servidor (5 segundos)
    socketTimeoutMS: 45000,   // Tempo limite de inatividade do socket (45 segundos)
  };

  const connectWithRetry = async () => {
    try {
      mongoose.Promise = global.Promise; // Define a Promise global
      console.log("Tentando conectar ao MongoDB...");
      await mongoose.connect(process.env.MONGODB_URI, options);
      console.log("Conexão com o MongoDB estabelecida com sucesso.");
      app.emit("ready"); // Notifica o app de que a conexão está pronta
    } catch (err) {
      console.error(
        `Falha na conexão com o MongoDB. Tentando novamente em 2 segundos... \nErro: ${err.message}`
      );
      setTimeout(connectWithRetry, 2000); // Tenta conectar novamente após 2 segundos
    }
  };

  connectWithRetry();
};
