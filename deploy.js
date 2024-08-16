const FtpDeploy = require("ftp-deploy");
const path = require("path");
require("dotenv").config();

const ftpDeploy = new FtpDeploy();

const config = {
  user: process.env.FTP_USERNAME,
  password: process.env.FTP_PASSWORD,
  host: process.env.FTP_HOST,
  port: process.env.FTP_PORT || 21,
  localRoot: path.join(__dirname, "build"),
  remoteRoot: "/public_html/", // Substitua pelo diretório correto no HostGator
  include: ["*", "**/*"],      // Inclua todos os arquivos e pastas
  deleteRemote: true,         // Defina como 'true' se quiser deletar arquivos antigos
  forcePasv: true,             // Defina como 'false' se o seu servidor não suportar PASV
};

ftpDeploy
  .deploy(config)
  .then(() => console.log("Deploy finalizado com sucesso!"))
  .catch((err) => console.error("Erro durante o deploy:", err));
