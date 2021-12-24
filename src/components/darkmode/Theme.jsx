import './theme.css';
import { useState, useEffect } from 'react'
import { WiMoonAltWaningCrescent2 } from "react-icons/wi";

const ChangeTheme = () => {

    var storedTheme = localStorage.getItem('theme');

     if(storedTheme == null || storedTheme == '') {storedTheme = 'light'}

    const [theme, setTheme] = useState(storedTheme);

    useEffect(() => localStorage.setItem('theme', theme), [theme])

    if(theme == 'light'){
        document.body.classList.add('lightTheme')
        document.body.classList.remove('darkTheme')
    }else{
        document.body.classList.remove('lightTheme')
        document.body.classList.add('darkTheme')
    }

    return (
        <button  onClick={() => setTheme(theme == 'light' ? 'dark' : 'light')}><WiMoonAltWaningCrescent2 /></button>
    )
}

export default ChangeTheme