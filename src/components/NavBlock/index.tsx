import {NavLink} from "react-router-dom"

const NavBlock = () =>{
    return(
        <div className="main__header">
            <NavLink to='/'>Calendar</NavLink>
            <NavLink to='/htu'>How to use</NavLink>
            <NavLink to='/settings'>Settings</NavLink>
            <NavLink to='/contacts'>Contact us</NavLink>                
        </div>
    )
}
export default NavBlock