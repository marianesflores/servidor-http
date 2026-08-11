const http = require('node:http')

const porta = 3000

const server = http.createServer();

server.on('request', (req,res) => {
console.log(`Requisição recebida! ${req.method} ${req.url}`);

res.statusCode = 200
res.setHeader('Content-Type', 'text/plan; charset=utf-8');
res.end("Servidor funcionando!");

});

server.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
});