import { Outlet } from "react-router-dom"
import NavBlock from "../../NavBlock";
import './index.scss';
const MainPage = () => {
    return (
        <div className="mainPage">
            <NavBlock></NavBlock>
            <Outlet></Outlet>
        </div>
    )
}


export default MainPage
