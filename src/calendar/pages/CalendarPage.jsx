import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Navbar } from '../';
import { addHours } from 'date-fns';
import { localizer, getMessage } from '../../helpers';

const events = [{
    title: 'Cumpleaños de Marisol',
    notes: 'Hay que comprar el pastel',
    start: new Date(),
    end: addHours( new Date(), 2 ),
    bgColor: '#fafafa',
    user: {
        _id: '123',
        name: 'Fernando'
    }
}];

export const CalendarPage = () => {
    const eventStyleGetter = ( event, start, end, isSelected ) => {
        console.log({ event, start, end, isSelected });

        const style = {
            backgroundColor: '#347CF7',
            borderRadius: '15px',
            color: 'white',
            opacity: 1
        }

        return {
            style
        }
    }

    return (
        <>
            <Navbar />

            <Calendar culture='es'
                      endAccessor="end"
                      eventPropGetter={ eventStyleGetter }
                      events={ events }
                      localizer={ localizer }
                      messages={ getMessage() }
                      startAccessor="start"
                      style={{ height: 'calc( 100vh - 80px )' }}
            />
        </>
    )
}
