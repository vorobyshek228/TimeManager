import dayGridPlugin from '@fullcalendar/daygrid' 
import FullCalendar from "@fullcalendar/react"
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin, { DateClickArg } from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list'
import { useRef, useState} from 'react'
import Btn from '../../styled/Btn'
import './index.scss'
import { useSelector } from 'react-redux';
import AddEventModal from '../../modal_addEvent';
import ModalWrapper from '../../styled/modalWrapper';
import { useEffect } from 'preact/hooks';


const Calendar = () => {
    const events12 = useSelector((state:any) => state.event.events)
    const [flag, setFlag] = useState(false);
    const [dateInfo, setDateInfo] = useState<DateClickArg | null>(null)
    let calendarRef = useRef<FullCalendar | null>(null);
    let changeView = (view:string) =>{
        if(calendarRef.current){
            let calendarApi = calendarRef.current.getApi();
            switch (view){
                case 'month':
                    calendarApi.changeView('dayGridMonth');
                    console.log(events12)
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
    return (
        <>
            <div className='calendar__wrapper'>
                <div className="btn__block">
                    <Btn onClick={() => changeView('month')} size='large'>Month</Btn>
                    <Btn onClick={() => changeView('week')} size='large'>Week</Btn>
                    <Btn onClick={() => changeView('day')} size='large'>Day</Btn>
                </div>
                <div className="list">
                    <FullCalendar initialView='listWeek' plugins={[ listPlugin ]} headerToolbar={false} events={events12} />
                </div>
                <div className="calendar">
                    <FullCalendar 
                        ref={calendarRef}
                        events={events12} 
                        plugins={[ timeGridPlugin, dayGridPlugin, interactionPlugin ]} 
                        weekNumberCalculation='ISO' 
                        initialView="dayGridMonth" 
                        height='95vh'
                        dateClick={function(info){
                            setDateInfo(info);
                            setFlag(true)
                        }}
                    />
                </div>
                <AddEventModal flag={flag} setFlagHandler={()=>setFlag(false)} dateInfo={dateInfo}/>
            </div>
            <ModalWrapper flag={flag} onClick={() => {setFlag(false); setDateInfo(null)}}/>
        </>
    )
}
export default Calendar