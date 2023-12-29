import React, {useSate, useState} from 'react';

function ColourPicker(){

    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(event){
        setColor(event.target.value);
    }

    return(<div className="color-picker-container">
                <h1>Jd's Color Picker</h1>
                <h2>Pick your color!</h2>
                <div className= "color-display" style= {{backgroundColor: color}}>
                    <p>Selected Color: {color}</p>
                </div>
                <label>Select a Color:</label>
                <input type="color" value={color} onChange={handleColorChange}></input>
            </div>)
}

export default ColourPicker