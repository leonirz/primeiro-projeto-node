import express, { request, response } from 'express';

const app = express();



// //  enviar requisição GET ao servidor
// app.get('/', (request, response) => {
//     return response.json({message: 'Hello Worlld do server.ts'});
// })



// app.post('/', (request, response) => {
//     return response.json({message: 'Hello Worlld do POST server.ts'});
// })


//obter respostas do servidor
app.listen(3333, ()=>{
    console.log(' Server started on port 3333!');
});
