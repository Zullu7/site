const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 2014;

// Servir arquivos estáticos (CSS, imagens, vídeos, etc.)
app.use(express.static(path.join(__dirname, "frontend")));

// Rota principal para servir o arquivo HTML
app.get("/", (req, res) => {
   res.sendFile(path.join(__dirname, "index.html"));
});

// Iniciar o servidor
app.listen(PORT, () => {
   console.log(`Servidor rodando na porta ${PORT}`);
});
