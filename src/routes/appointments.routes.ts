import { Router } from 'express';
import { uuid } from 'uuidv4';
import {startOfHour, parseISO, isEqual } from 'date-fns';
 
const appointmentsRouter = Router();


// tipar - interface
interface Appointment {
    id: string;
    provider : "string";
    date : Date;
}


const appointments: Appointment[] = [];

// quando chamado http://localhost:3333/apointments
// este é um MIDLEWARE
appointmentsRouter.post('/', (request, response) => {

    const { provider, date } = request.body;

    const parsedDate = startOfHour(parseISO(date));

    //garantir que 2 agendamentos não são feitos no mesmo horário
    const findAppointmentInSameDate = appointments.find(appointment =>
        isEqual(parsedDate, appointment.date),
        );

    if(findAppointmentInSameDate){
        return response
        .status(400)
        .json({message: 'This appointment is already booked!'});
    }


    //estrutura appointment
    const appointment = {
        id : uuid(),
        provider,
        date: parsedDate,
    };

    appointments.push(appointment);

    return response.json(appointment);
});

export default appointmentsRouter;     