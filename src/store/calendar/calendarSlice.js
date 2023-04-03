import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
    _id: new Date().getTime(),
    title: 'Cumpleaños de Marisol',
    notes: 'Hay que comprar el pastel',
    start: new Date(),
    end: addHours( new Date(), 2 ),
    bgColor: '#fafafa',
    user: {
        _id: '123',
        name: 'Fernando'
    }
}

export const caldendarSlice = createSlice({
    name: 'caldendar',
    initialState: {
        events: [ tempEvent ],
        activeEvent: null
    },
    reducers: {
        onSetActiveEvent: ( state, { payload } ) => {
            state.activeEvent = payload;
        }
    }
});


// Action creators are generated for each case reducer function
export const { onSetActiveEvent } = caldendarSlice.actions;