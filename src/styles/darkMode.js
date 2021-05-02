import { useEffect, useState } from 'react'

export const useDarkMode = () => {
    const [theme, setTheme] = useState('light');
    
    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        (localTheme) ? setTheme(localTheme): setMode('light');
    }, []);

    const setMode = (mode) => {
        window.localStorage.setItem('theme', mode);
        setTheme(mode);
    }
    
    const toggleTheme = () => {
        if(theme === 'dark') {
            setMode('light');
        } else {
            setMode('dark');
        }
    }
    return [theme, toggleTheme];
}
