import { useEffect } from "react";

const ColorItem =({color}) =>{
    useEffect(() =>{
        document.getElementById(color).style.background=color;
    },[])
    return (
        <div id={color} className="color-item" onClick={() => document.getElementById("container").style.background = color}>
            {color}
        </div>
    );
}

export default ColorItem;