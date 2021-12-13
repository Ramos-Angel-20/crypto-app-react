import { createContext } from 'react';

export interface IThemeContext {
    themeToggleHandler: () => void;
    darkMode: boolean;
}

const ThemeContext = createContext({} as IThemeContext);
export default ThemeContext;