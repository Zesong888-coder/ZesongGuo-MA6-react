import React, {useContext} from "react";
import {GridContext} from "./GridContext"
import './App.css';

export function Cell({index}) {
    const {cellSates, toggleCell} = useContext(GridContext);

    // Get the current state of this cell
    const isOn = cellSates[index];

    // Handle click
    const handleClick = () => {
        toggleCell(index);
    };

    return (
        <div 
            className={`cell ${isOn ? 'on' : ''}`} 
            onClick={handleClick}
        ></div>
    );
}