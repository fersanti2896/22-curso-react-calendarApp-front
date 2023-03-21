import { useSelector } from 'react-redux';

export const useCalendarStore = () => {
    const { activeEvent, events } = useSelector( state => state.calendar );

    return {
        //* Propiedades
        activeEvent,
        events,

        //* Métodos
    }    
}
