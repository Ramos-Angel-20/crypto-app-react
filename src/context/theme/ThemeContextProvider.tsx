import React, { useState, useEffect } from 'react';

import ThemeContext, { IThemeContext } from './themeContext';

type themeContextProviderPropTypes = {
    children: React.ReactNode;
};


const ThemeContextProvider = ({ children }: themeContextProviderPropTypes) => {

    const [darkMode, setDarkMode] = useState<boolean>(false);


    // Esto se ejecuta al iniciar la aplicación.
    useEffect(() => {
        
        const settedMode = localStorage.getItem('CryptoMarket-darkmode');
        
        if(settedMode === '1') {

            document.body.classList.add('dark');
            setDarkMode(true);
        }

    }, []);

    const themeToggleHandler = () => {
        
        if (darkMode === false) { // Si no hay darkmode lo seteamos a 1 para invertirlo (hacer toggle, si es false lo cambiamos a true).
            
            localStorage.setItem('CryptoMarket-darkmode', JSON.stringify(1));
            setDarkMode(true);
            document.body.classList.add('dark');


        } else { // Si hay darkmode lo seteamos a 0 para invertirlo (hacer toggle, si es true lo cambiamos a false).

            localStorage.setItem('CryptoMarket-darkmode', JSON.stringify(0));
            setDarkMode(false);
            document.body.classList.remove('dark');
        }
    }

    const context: IThemeContext = {
        themeToggleHandler,
        darkMode
    };

    return (
        <ThemeContext.Provider value={context}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;
