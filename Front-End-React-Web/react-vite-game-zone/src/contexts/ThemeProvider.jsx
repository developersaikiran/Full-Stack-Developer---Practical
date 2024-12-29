import { createContext, useState } from "react";

export const ThemeContext = createContext();
const ThemeProvider = ({ children }) => {
    const initialTheme = localStorage.getItem('theme');
    const [theme, setTheme] = useState(() => { return initialTheme ? initialTheme : 'dark' });

    const defaultDarkTheme = 'theme-dark-pelican';
    const defaultLightTheme = 'theme-light-hen';

    const initialThemePlate = localStorage.getItem('themePlate');
    const [themePlate, setThemePlate] = useState(() => { return initialThemePlate ? initialThemePlate : (theme == 'dark' ? defaultDarkTheme : defaultLightTheme) });

    return (
        <ThemeContext.Provider
            value={
                {
                    theme,
                    setTheme,
                    themePlate,
                    setThemePlate,
                }
            }
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;