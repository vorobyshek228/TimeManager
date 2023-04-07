import dayGridPlugin from '@fullcalendar/daygrid' 
import FullCalendar from "@fullcalendar/react"
import timeGridPlugin from '@fullcalendar/timegrid'
import { useRef, useState } from 'react'
import Btn from '../../styled/Btn'
import './index.scss'

const Calendar = () => {
    // const [currentView, setCurrentView] = useState('');
    // const [pluginView, setPluginView] = useState()
    // let viewHandler = (view:string) => {
    //     switch (view){
    //         case 'month':
    //             setCurrentView('dayGridMonth');
    //             console.log(currentView);
    //             break;
    //         case 'week':
    //             setCurrentView('timeGridWeek');
    //             console.log(currentView);
    //             break;
    //         case 'day':
    //             setCurrentView('timeGridDay');
    //             console.log(currentView);
    //             break;
    //         default:
    //             setCurrentView('dayGridMonth');
    //     }
    // }
    let calendar = useRef();
    calendar.current.getApi()
    return (
        <div className='calendar__wrapper'>
            <div className="calendar">
                <div className="btn__block">
                    <Btn onClick={()=>viewHandler('month')}>Month</Btn>
                    <Btn onClick={()=>viewHandler('week')}>Week</Btn>
                    <Btn onClick={()=>viewHandler('day')}>Day</Btn>
                </div>
                <FullCalendar plugins={[ timeGridPlugin ]}  />
            </div>

        </div>
    )
}
export default Calendar