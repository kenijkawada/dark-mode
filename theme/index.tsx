import { createContext, useContext, useEffect, useState } from "react";

type ColorModeType = "light" | "dark";

type ThemeContextType = {
  colorMode: ColorModeType;
  toggleColorMode: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  colorMode: "light",
  toggleColorMode: () => {},
});

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

type Props = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  const [colorMode, rawSetColorMode] = useState<ColorModeType>("light");

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.getAttribute("data-theme");
    window.localStorage.setItem("color-mode", initialColorValue as string);
    rawSetColorMode(initialColorValue as ColorModeType);
  }, []);

  const toggleColorMode = () => {
    console.log("toggleColorMode");
    const newColorMode = colorMode === "light" ? "dark" : "light";
    // Update to localStorage
    window.localStorage.setItem("color-mode", newColorMode);
    const root = window.document.documentElement;
    // Update to html attribute
    root.setAttribute("data-theme", newColorMode);
    // Update to React state
    rawSetColorMode(newColorMode);
  };

  return (
    <>
      <ThemeContext.Provider value={{ colorMode, toggleColorMode }}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};
