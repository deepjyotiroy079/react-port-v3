import React from 'react'
import { Moon, Sun } from 'react-feather';

// const Sun1 = styled.svg`
//     position: absolute;
//     top: 2rem;
//     right: 4rem;
// `;
function Toggle({theme, toggleTheme}) {
    console.log(theme);
    return (
        <div onClick={toggleTheme}>
            {(theme === 'dark')? <Sun className="toggle-btn"/>: <Moon className="toggle-btn"/>}
        </div>
        
    )
}

export default Toggle
