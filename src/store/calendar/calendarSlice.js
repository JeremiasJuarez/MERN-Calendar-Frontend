import { createSlice } from '@reduxjs/toolkit';

// import { addHours } from 'date-fns';
// const tempEvent = {
//     _id: new Date().getTime(),
//     title:'Cumpleaños del jefe',
//     notes: 'Hay que comprar un pastel',
//     start: new Date(),
//     end: addHours( new Date(), 2 ),
//     bgColor: '#fafafa',
//     user: {
//       _id: '123',
//       name: 'Jeremias'
//     }
//   }


export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        isLoadingEvents: true,
        events: [
            //tempEvent
        ],
        activeEvent: null,
    },
    reducers: {
        //*el payload es el evento activo que va a recibir como arg al ser llamada
        onSetActiveEvent: ( state, { payload }) => {
            state.activeEvent = payload
        },
        //* el payload seria la nueva nota que recibe como arg al ser llamada
        onAddNewEvent: (state,{ payload }) => {
            state.events.push( payload );
            state.activeEvent = null;
        },
        //* el payload es la nota que estamos editando y toda su info 
        
        onUpdateEvent: ( state, { payload }) => {
            state.events = state.events.map( event => {
                if( event.id === payload.id ){
                    return payload
                }
                return event;
            })
        },
        //* el payload es el evento del calendario seleccionado para eliminar
        onDeleteEvent: ( state ) => {
            if( state.activeEvent ) {
                state.events = state.events.filter( event => event.id !== state.activeEvent.id )
                state.activeEvent = null
            }
        },
        //* el payload es un array de eventos que son objetos [ {}, {}, {} ]
        onLoadEvents: ( state , { payload = [] }) => {
            state.isLoadingEvents = false
            // state.events = payload
            payload.forEach( event => {
                const exists = state.events.some( dbEvent => dbEvent.id === event.id )
                if( !exists ){
                    state.events.push( event )
                }
            })
        },
        onLogoutCalendar: ( state ) => {
            state.isLoadingEvents = true
            state.events = []
            state.activeEvent = null
        }
    }
});


export const { 
    onSetActiveEvent, 
    onAddNewEvent, 
    onUpdateEvent, 
    onDeleteEvent, 
    onLoadEvents,
    onLogoutCalendar 
} = calendarSlice.actions;