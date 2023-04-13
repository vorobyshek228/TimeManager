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
        }
    }
})
export default eventSlice