import React from "react";

type ThemeContextType = {
  theme: string;
  toggleTheme: () => void;
};


const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
);

export default ThemeContext;
