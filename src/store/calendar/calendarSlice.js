import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
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
        increment: ( state, /* action */ ) => {
            state.counter += 1;
        },
    }
});


// Action creators are generated for each case reducer function
export const { increment } = caldendarSlice.actions;