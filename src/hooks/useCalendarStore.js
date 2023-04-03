import { useDispatch, useSelector } from 'react-redux';
import { onSetActiveEvent } from '../store/calendar';

export const useCalendarStore = () => {
    const dispatch = useDispatch();
    const { activeEvent, events } = useSelector( state => state.calendar );

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent(calendarEvent) )
    }

    return {
        //* Propiedades
        activeEvent,
        events,

        //* Métodos
        setActiveEvent,
    }    
}
