import React from 'react';

const ThemeContext = React.createContext({
  theme: 'light', 
  toggleTheme: () => {},
});

export default function ThemeContextProvider({children}) {
  const [theme, setTheme] = React.useState('light');
  
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  const contextValue = {
    theme,
    toggleTheme,
  };
  
   return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export {ThemeContext};
