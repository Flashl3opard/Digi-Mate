import React from "react";
import { ReactComponent as Sun } from "./Sun.svg";
import { ReactComponent as Moon } from "../images/Moon.svg";
import "./DarkMode.css";

const DarkMode = () => {
    const setDark = () => {
        document.querySelector("body").setAttribute('data-theme','dark')
    }
    const setLight = () => {
        document.querySelector("body").setAttribute('data-theme','light')
    }
    setLight()
    return (
        <div className='dark_mode'>
            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
            />
            <label className='dark_mode_label' for='darkmode-toggle'>
                <Sun />
                <Moon />
            </label>
        </div>
    );
};

export default DarkMode;
