import { Router } from 'express';
const appointmentsRouter = Router();


// quando chamado http://localhost:3333/apointments
// este é um MIDLEWARE
appointmentsRouter.post('/', (request, response) => {
    return response.json({ message: 'Hello World do appointments.route.ts'});
});

export default appointmentsRouter;     