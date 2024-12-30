import { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const initialTheme = localStorage.getItem('theme');
    const [theme, setTheme] = useState(() => { return initialTheme ? initialTheme : 'dark' });

    const defaultDarkTheme = 'theme-dark-pelican';
    const defaultLightTheme = 'theme-light-hen';

    const initialThemePlate = localStorage.getItem('themePlate');
    const [themePlate, setThemePlate] = useState(() => { return initialThemePlate ? initialThemePlate : (theme == 'dark' ? defaultDarkTheme : defaultLightTheme) });
    
    const [sideBarToggleBtn, setSideBarToggleBtn] = useState(false);
    const [sidebarToggle, setSidebarToggle] = useState(false);
    const [headerPaddingLeft, setHeaderPaddingLeft] = useState(0);
    
    return (
        <ThemeContext.Provider
            value={
                {
                    theme,
                    setTheme,
                    themePlate,
                    setThemePlate,
                    sideBarToggleBtn,
                    setSideBarToggleBtn,
                    sidebarToggle, 
                    setSidebarToggle,
                    setHeaderPaddingLeft,
                }
            }
        >
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;