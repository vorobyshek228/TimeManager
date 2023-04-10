import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Calendar from '../Layouts/Calendar'
import Contacts from '../Layouts/Contacts'
import MainPage from '../Layouts/MainPage'
import Settings from '../Layouts/Settings'
import Tutorial from '../Layouts/Tutorial'

export const router = createBrowserRouter(createRoutesFromElements(
    <>
    <Route path="/" element= {<MainPage />}>
        <Route index element = {<Calendar />}/> 
        <Route path = 'settings' element = {<Settings/>}/>
        <Route path = 'htu' element = {<Tutorial/>}/>
        <Route path = 'about' element ={<Contacts/>} />
    </Route>
    </>
))
