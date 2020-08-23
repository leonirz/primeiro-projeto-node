import { Router } from 'express';

import appointmentsRouter from './appointments.routes';


const routes = Router();

//o método "use" serve para qualquer tipo de rota (GET/POST...)
routes.use('/appointments', appointmentsRouter);

console.log('Hey!! Testando ');

    
export default routes;