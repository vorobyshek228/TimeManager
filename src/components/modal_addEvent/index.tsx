import ModalEvent from "../styled/modalEvent"
import { DateClickArg } from '@fullcalendar/interaction';
import { useState } from "react";
import DatePicker, { ReactDatePicker } from "react-datepicker";


import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import Btn from "../styled/Btn";
import store from "../store";
import eventSlice from "../store/eventSlice";



const AddEventModal = ({flag, dateInfo, setFlagHandler}:{flag:boolean, dateInfo?: DateClickArg | null, setFlagHandler:() => void}) =>{
    const [title, setTitle] = useState('');
    const [allDay, setAllDay] = useState(false)
    const [valueTimeStart, onChangeTimeStart] = useState<Date | null>();
    const [valueTimeEnd, onChangeTimeEnd] = useState<Date | null>();
    const [startDate, setStartDate] = useState<Date>(new Date());
    const [endDate, setEndDate] = useState<Date>(new Date());
    const handleChangeTitle = (e: React.FormEvent<HTMLInputElement>) =>{
        setTitle(e.currentTarget.value)
    }
    const allDayHandler = (e: React.FormEvent<HTMLInputElement>) => {
        if(e.currentTarget.checked) {
            setAllDay(true)
        } else setAllDay(false)
    }
    const closeHandler = () =>{
        store.dispatch(eventSlice.actions.addEvent({
            startDate: startDate.toISOString(),
            title,
            id: Math.random() + '',
            allDay
        }));
        setFlagHandler();
    }
    if(flag){
        return(
            <ModalEvent>
                <h2 className="title">Add Event</h2>
                <input type="text" placeholder="Print your title of Event" onChange={handleChangeTitle}/>
                <div className="radio__container">
                    <label>Do you want this event for all day?</label>
                    <input type="checkbox" name="allDay" id="allDay" onChange={allDayHandler}></input>
                </div>
                <div className="date__container">
                    <div className="date__wrapper">
                        <span>Set start date</span>
                        <DatePicker
                            locale={'gb'}
                            selected={startDate}
                            onChange={(date: Date) => setStartDate(date)}
                            selectsStart
                            isClearable
                            startDate={startDate}
                            endDate={endDate}
                        />
                        <span>Set end date</span>
                        <DatePicker
                            selected={endDate}
                            onChange={(date: Date) => setEndDate(date)}
                            selectsEnd
                            isClearable
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                        />
                    </div>
                    <div className="time__wrapper">
                        <span>Set start date</span>
                        <DatePicker
                            selected={valueTimeStart}
                            onChange={(date) => onChangeTimeStart(date)}
                            showTimeSelect
                            selectsStart
                            isClearable
                            showTimeSelectOnly
                            timeIntervals={15}
                            timeCaption="Time"
                            timeFormat="HH:mm"
                            dateFormat="hh:mm "
                        />
                        <span>Set end date</span>
                        <DatePicker
                            selected={valueTimeEnd}
                            onChange={(date) => onChangeTimeEnd(date)}
                            showTimeSelect
                            selectsEnd
                            isClearable
                            showTimeSelectOnly
                            timeIntervals={15}
                            timeCaption="Time"
                            timeFormat="HH:mm"
                            dateFormat="hh:mm "
                            minDate={valueTimeStart}
                        />
                    </div>
                </div>
                <Btn onClick={closeHandler}>Add</Btn>
            </ModalEvent>
        )
    } else return(
        <>
        </>
    )
}

export default AddEventModal