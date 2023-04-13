import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Calendar from '../components/Layouts/Calendar'
import Contacts from '../components/Layouts/Contacts'
import MainPage from '../components/Layouts/MainPage'
// import Settings from '../components/Layouts/Settings'
import Tutorial from '../components/Layouts/Tutorial'
import Masterpiece from '../components/masterpiece'

export const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element= {<MainPage />}>
        <Route index element = {<Calendar />}/> 
        {/* <Route path = 'settings' element = {<Settings/>}/> */}
        <Route path = 'htu' element = {<Tutorial/>}/>
        <Route path = 'about' element ={<Contacts/>}/>
        <Route path='about/masterpiece' element = {<Masterpiece/>}/>
    </Route>
    </>
))
