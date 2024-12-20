import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
  // Arquivo principal da aplicação
  entry: './src/app.js',

  // Configuração de saída dos arquivos empacotados
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js',
    clean: true, // Limpa o diretório de saída antes de cada build
  },

  // Módulos e regras de processamento
  module: {
    rules: [
      // Regras para processar arquivos JavaScript e JSX
      {
        test: /\.jsx?$/, // Aceita .js e .jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env', // Suporte para ES6+
              '@babel/preset-react', // Suporte para JSX e React
            ],
          },
        },
      },

      // Regras para processar arquivos CSS
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Adiciona suporte a CSS
      },
    ],
  },

  // Plugins
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html', // Base para o HTML
      filename: 'index.html', // Nome do arquivo gerado
    }),
  ],

  // Configuração do servidor de desenvolvimento
  devServer: {
    static: './dist',
    port: 3000, // Porta para acessar a aplicação
    open: true, // Abre o navegador automaticamente
  },

  // Resolução de extensões de arquivos para simplificar imports
  resolve: {
    extensions: ['.js', '.jsx'], // Permite importar arquivos sem especificar .js ou .jsx
  },
};