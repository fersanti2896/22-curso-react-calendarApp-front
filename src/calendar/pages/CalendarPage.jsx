import { useState } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { CalendarEvent, CalendarModal, Navbar } from '../';
import { localizer, getMessage } from '../../helpers';
import { useUIStore, useCalendarStore } from '../../hooks';

export const CalendarPage = () => {
    const [ lastView, setLastView ] = useState(localStorage.getItem('lastView') || 'week');
    const { openDateModal } = useUIStore();
    const { events, setActiveEvent } = useCalendarStore();

    const eventStyleGetter = ( event, start, end, isSelected ) => {
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

    const onDoubleClick = ( event ) => {
        openDateModal();
    }

    const onSelect = ( event ) => {
        setActiveEvent( event );
    }

    const onViewChanged = ( event ) => {
        localStorage.setItem( 'lastView', event );
        setLastView( event );
    }

    return (
        <>
            <Navbar />

            <Calendar culture='es'
                      defaultView={ lastView }
                      endAccessor="end"
                      eventPropGetter={ eventStyleGetter }
                      events={ events }
                      localizer={ localizer }
                      messages={ getMessage() }
                      startAccessor="start"
                      style={{ height: 'calc( 100vh - 80px )' }}
                      components={{
                        event: CalendarEvent
                      }}
                      onDoubleClickEvent={ onDoubleClick }
                      onSelectEvent={ onSelect }
                      onView={ onViewChanged }
            />
            <CalendarModal />
        </>
    )
}
