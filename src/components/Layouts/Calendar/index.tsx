import dayGridPlugin from '@fullcalendar/daygrid' 
import FullCalendar from "@fullcalendar/react"
import timeGridPlugin from '@fullcalendar/timegrid'
import { useRef} from 'react'
import Btn from '../../styled/Btn'
import './index.scss'


const Calendar = () => {
    let calendarRef = useRef<FullCalendar | null>(null);
    let changeView = (view:string) =>{
        if(calendarRef.current){
            let calendarApi = calendarRef.current.getApi();
            calendarApi.changeView('timeGridDay');
        }
    }
    return (
        <div className='calendar__wrapper'>
            <div className="calendar">
                <div className="btn__block">
                    <Btn onClick={() => changeView('month')}>Month</Btn>
                    <Btn onClick={() => changeView('month')}>Week</Btn>
                    <Btn onClick={() => changeView('month')}>Day</Btn>
                </div>
                <FullCalendar ref={calendarRef} plugins={[ timeGridPlugin, dayGridPlugin ]} initialView="dayGridMonth" />
            </div>

        </div>
    )
}
export default Calendar