import { createSlice } from "@reduxjs/toolkit"
import {EventAction, State} from "../../types/state"

const initialState: State = {
    events: [ ]
}

const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers:{
        addEvent(state, action:EventAction){
            state.events = state.events.concat(action.payload)
        },
        editEvent(state, action:EventAction){
            let editable = state.events.find((elem)=>{
                return (elem.id === action.payload.id)
            })
            state.events = [...state.events, editable = {
                ...action.payload
            }]
        }
    }
})
export default eventSlice