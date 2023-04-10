import ModalEvent from "../styled/modalEvent"
import { DateClickArg } from '@fullcalendar/interaction';
import { useState } from "react";


const AddEventModal = ({flag, dateInfo}:{flag:boolean, dateInfo?: DateClickArg | null}) =>{
    const [title, setTitle] = useState('');
    const handleChangeTitle = (e: React.FormEvent<HTMLInputElement>) =>{
        setTitle(e.currentTarget.value)
    }
    if(flag){
        return(
            <ModalEvent>
                <h2 className="title">Add Event</h2>
                <input type="text" placeholder="Print your title of Event" onChange={handleChangeTitle}/>
                <div className="radio__container">
                    <label>Do you want this event for all day?</label>
                    <input type="checkbox" name="allDay" id="allDay"></input>
                </div>
            </ModalEvent>
        )
    } else return(
        <>
        </>
    )
}

export default AddEventModal