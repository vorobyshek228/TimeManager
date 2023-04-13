import {Link} from "react-router-dom"
import "./index.scss"

const Contacts = () => {
    return(
        <div className="wrap">
            <h1 className="contacts__title">This app was made as a graduate work from me and is a preface to a <Link to={'masterpiece'}>masterpiece</Link></h1>
        </div>
    )
}
export default Contacts