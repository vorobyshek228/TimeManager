import {NavLink} from "react-router-dom"

const NavBlock = () =>{
    return(
        <div className="main__header">
            <NavLink to='/'>Calendar</NavLink>
            <NavLink to='https://fullcalendar.io/docs'>How to use</NavLink>
            {/* <NavLink to='/settings'>Settings</NavLink> */}
            <NavLink to='/about'>About us</NavLink>                
        </div>
    )
}
export default NavBlock