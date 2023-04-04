import { useDispatch, useSelector } from 'react-redux';
import { onAddNewEvent, onSetActiveEvent, onUpdateEvent } from '../store/calendar';

export const useCalendarStore = () => {
    const dispatch = useDispatch();
    const { activeEvent, events } = useSelector( state => state.calendar );

    const setActiveEvent = ( calendarEvent ) => {
        dispatch( onSetActiveEvent(calendarEvent) )
    }

    const startSavingEvent = async( calendarEvent ) => {
        //TODO: LLegar al backend

        if( calendarEvent._id ) {
            dispatch( onUpdateEvent({ ...calendarEvent }) );
        } else {
            dispatch( onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }) )
        }
    }

    return {
        //* Propiedades
        activeEvent,
        events,

        //* Métodos
        setActiveEvent,
        startSavingEvent,
    }    
}
