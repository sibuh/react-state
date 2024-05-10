import React from "react"
import './style.css';
export default function WindowTracker(){
    const[show,setShow]=React.useState(true)
    function toggle(){
        setShow(prevshow=>{
            return !prevshow
        })
    }
    const[windowWidth,setWindowWidth]=React.useState(window.innerWidth)
    React.useEffect(()=>{
        window.addEventListener("resize",function(){
            setWindowWidth(window.innerWidth)
        })
    },[])

    return(
        <div className="window-size-tracker">
            <button className="window-size-btn" onClick={toggle}>Show Window Size</button>
            {show && <p className="win-size">Window Size: {windowWidth}</p>}
        </div>
    )
}