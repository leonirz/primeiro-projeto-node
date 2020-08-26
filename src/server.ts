import express, { request, response } from 'express';


import routes from './routes'


const app = express();
app.use(express.json());
app.use(routes);

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
