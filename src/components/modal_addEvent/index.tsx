import ModalEvent from "../../styled/modalEvent"
import { DateClickArg } from '@fullcalendar/interaction';
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { EventClickArg } from '@fullcalendar/core';
import "react-datepicker/dist/react-datepicker.css";
import 'react-time-picker/dist/TimePicker.css';
import 'react-clock/dist/Clock.css';
import Btn from "../../styled/Btn";
import store from "../../store";
import eventSlice from "../../store/eventSlice";



const AddEventModal = ({flag, dateInfo, setFlagHandler, eventInfo}:{flag:boolean,eventInfo?: EventClickArg | null , dateInfo?: DateClickArg | null, setFlagHandler:() => void}) =>{
    const [title, setTitle] = useState('');
    const [allDay, setAllDay] = useState(false)
    const [startDate, setStartDate] = useState<Date| null>(new Date());
    const [endDate, setEndDate] = useState<Date| null>();
    useEffect(()=>{
        if(dateInfo){
            setStartDate(dateInfo.date)
        }
        if(eventInfo){
            setStartDate(eventInfo.event.start);
            setTitle(eventInfo.event.title);
            setEndDate(eventInfo.event.end);
            setAllDay(eventInfo.event.allDay);
        }
    },[dateInfo, eventInfo])
    const handleChangeTitle = (e: React.FormEvent<HTMLInputElement>) =>{
        setTitle(e.currentTarget.value);
    }
    
    let minTime = new Date();
    minTime.setHours(0)
    let maxTime = new Date();
    maxTime.setHours(12, 0, 0, 0);
    const allDayHandler = (e: React.FormEvent<HTMLInputElement>) => {
        if(e.currentTarget.checked) {
            setAllDay(true)
        } else setAllDay(false)
    }
    const closeHandler = () =>{
        if(eventInfo){
            store.dispatch(eventSlice.actions.editEvent({
                start: startDate?.toISOString(),
                title,
                id: eventInfo.event.id,
                allDay,
                end: endDate?.toISOString(),
            }));
        } else {
            store.dispatch(eventSlice.actions.addEvent({
                start: startDate?.toISOString(),
                title,
                id: Math.random() + '',
                allDay,
                end: endDate?.toISOString(),
            }));
        }
        
        setTitle('');
        setAllDay(false);
        setStartDate(new Date());
        setEndDate(null);
        setFlagHandler();
        const newEvent = {
            start: startDate?.toISOString(),
            title,
            id: Math.random() + '',
            allDay,
            end: endDate?.toISOString(),
        }
        fetch('https://63b93fc26f4d5660c6e8866a.mockapi.io/api/courseProject/events', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(newEvent)
            }).then(res => {
            if (res.ok) {
                return res.json();
            }})
    }
    if(flag){
        return(
            <ModalEvent>
                <h2 className="title">Add Event</h2>
                <input type="text" placeholder="Print your title of Event" onChange={handleChangeTitle} value={title} className="input__title"/>
                <div className="radio__container">
                    <label>Do you want this event for all day?</label>
                    <input type="checkbox" name="allDay" id="allDay" onChange={allDayHandler} checked={allDay} className="radio__allDay"></input>
                </div>
                <div className="date__container">
                    <div className="date__wrapper">
                        <span>Set start date</span>
                        <DatePicker
                            selected={startDate}
                            calendarStartDay={1}
                            onChange={(date: Date) => setStartDate(date)}
                            selectsStart
                            isClearable
                            startDate={startDate}
                            endDate={endDate}
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            timeCaption="time"
                            dateFormat="MMMM d, yyyy HH:mm "
                            showTimeSelect
                        />
                        <span>Set end date</span>
                        <DatePicker
                            selected={endDate}
                            onChange={(date: Date) => setEndDate(date)}
                            selectsEnd
                            calendarStartDay={1}
                            isClearable
                            startDate={startDate}
                            endDate={endDate}
                            minDate={startDate}
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            timeCaption="time"
                            dateFormat="MMMM d, yyyy HH:mm "
                            showTimeSelect
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