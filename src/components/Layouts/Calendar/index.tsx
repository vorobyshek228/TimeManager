import dayGridPlugin from '@fullcalendar/daygrid' 
import FullCalendar from "@fullcalendar/react"
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list'
import { useRef, useState} from 'react'
import Btn from '../../../styled/Btn'
import './index.scss'
import { useSelector } from 'react-redux';
import AddEventModal from '../../modal_addEvent';
import ModalWrapper from '../../../styled/modalWrapper';
import { useEffect } from 'react';
import eventSlice from '../../../store/eventSlice';
import store from '../../../store';
import { EventClickArg } from '@fullcalendar/core';


const Calendar = () => {
    const events = useSelector((state:any) => state.event.events)
    const [flag, setFlag] = useState(false);
    const [event, setEvent] = useState(events)
    const [dateInfo, setDateInfo] = useState<DateClickArg | null>(null)
    const [eventInfo, setEventInfo] = useState<EventClickArg | null>(null)
    let calendarRef = useRef<FullCalendar | null>(null);
    let changeView = (view:string) =>{
        if(calendarRef.current){
            let calendarApi = calendarRef.current.getApi();

            switch (view){
                case 'month':
                    calendarApi.changeView('dayGridMonth');
                    break
                case 'week':
                    calendarApi.changeView('timeGridWeek');
                    break
                case 'day':
                    calendarApi.changeView('timeGridDay');
                    break
                default:
                    calendarApi.changeView('dayGridMonth');
            }
        }
    }
    const handler = (eventInfo:EventClickArg) =>{
        setEventInfo(eventInfo)
        console.log(eventInfo)
        console.log('ins handler')
        setFlag(true)

    }
    useEffect(()=>{
        setEvent(events)
    },[events])
    useEffect(()=>{
        fetch('https://63b93fc26f4d5660c6e8866a.mockapi.io/api/courseProject/events', {
            method: 'GET',
            headers: {'content-type':'application/json'},
            }).then(res => {
            if (res.ok) {
                return res.json();
            }
            }).then(events => {
                store.dispatch(eventSlice.actions.addEvent(events));
                setEvent(events)
            })
    },[])
    return (
        <>
            <div className='calendar__wrapper'>
                <div className="btn__block">
                    <Btn onClick={() => changeView('month')} size='large'>Month</Btn>
                    <Btn onClick={() => changeView('week')} size='large'>Week</Btn>
                    <Btn onClick={() => changeView('day')} size='large'>Day</Btn>
                </div>
                <div className="list">
                    <FullCalendar initialView='listWeek' plugins={[ listPlugin, timeGridPlugin ]} headerToolbar={false} events={event} />
                </div>
                <div className="calendar">
                    <FullCalendar 
                        ref={calendarRef}
                        events={event} 
                        plugins={[ timeGridPlugin, dayGridPlugin, interactionPlugin ]} 
                        weekNumberCalculation='ISO' 
                        initialView="dayGridMonth" 
                        height='95vh'
                        eventClick={function(eventInfo){
                            console.log(eventInfo)
                            handler(eventInfo)
                        }}
                        droppable={true}
                        editable={true}
                        dateClick={function(info){
                            setDateInfo(info);
                            setFlag(true)
                        }}
                    />
                </div>
                <AddEventModal flag={flag} eventInfo={eventInfo} setFlagHandler={()=>{setFlag(false); setDateInfo(null); setEventInfo(null)}} dateInfo={dateInfo}/>
            </div>
            <ModalWrapper flag={flag} onClick={() => {setFlag(false); setDateInfo(null)}}/>
        </>
    )
}
export default Calendar