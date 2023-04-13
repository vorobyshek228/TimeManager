import { useState } from "react"
import "./index.scss"
const Masterpiece = () => {
    const [value1, setValue1] = useState<string>('');
    const [value2, setValue2] = useState<string>('')
    const value1Handler = (e: React.FormEvent<HTMLInputElement>) =>{
        setValue1(e.currentTarget.value)
    }
    const value2Handler = (e: React.FormEvent<HTMLInputElement>) =>{
        setValue2(e.currentTarget.value)
    }
    return(
        <div className="master">
            <label>Input Number 1</label>
            <input type="text" value={value1} onChange={value1Handler}/>
            <label>Input Number 2</label>
            <input type="text" value={value2} onChange={value2Handler}/>
            <div>Output number</div>
            <div className="">{value1 + value2}</div>
        </div>
    )
}
export default Masterpiece