import {createContext,useState} from 'react';
import darkBgDesktop from '../images/bg-desktop-dark.jpg';
import lightBgDesktop from '../images/bg-desktop-light.jpg';
import darkBgMobile from '../images/bg-mobile-dark.jpg';
import lightBgMobile from '../images/bg-mobile-light.jpg';
import iconLight from '../images/icon-moon.svg';
import iconDark from '../images/icon-sun.svg';

const themes={
    light:{
        text:"#484b6a",
        link:"#9394a5",
        completed:"#d2d3db",
        background:"#e4e5f1",
        foreground:"#fafafa",
        all:"#3a7bfd",
        degrade:"linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
        desktopBgUrl:lightBgDesktop,
        mobileBgUrl:lightBgMobile,
        icon:iconLight,
        type:"light",
        mobile:false
    },
    dark:{
        text:"#e4e5f1",
        link:"#cacde8",
        completed:"#777a92",
        background:"#393a4c",
        foreground:"#4d5066",
        all:"#3a7bfd",
        degrade:"linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%)",
        desktopBgUrl:darkBgDesktop,
        mobileBgUrl:darkBgMobile,
        icon:iconDark,
        type:"dark",
        mobile:false
     
    }
}

export const ThemeContext=createContext();

const ThemeContextProvider=({children})=>{
    const [theme,setTheme]=useState(themes.dark);
    const [activeTheme,setActiveTheme]=useState("light");

    const toggleTheme=()=>{
        const nextTheme=activeTheme==="light"?"dark":"light";
        setTheme(themes[nextTheme]);
        setActiveTheme(nextTheme);
        console.log("toggleTheme",theme,activeTheme);
    }
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}



export default ThemeContextProvider;