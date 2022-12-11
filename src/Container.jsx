import React, { useRef } from "react"
import "./App.scss"

const Container = ({title,id,clas,onCheck}) => {
    function checkFalse(e){
       /*  console.log(e.target) */
    }

    return (
        <div className="toggle-container">
            <input  onClick={()=>onCheck(id)} onChange={checkFalse}  type="checkbox" id={clas} className="toggle" />
            <label htmlFor={clas} className="label">
                <div className="ball"></div>
            </label>
            <span>{title}</span>
        </div>
    )
}

export default Container
