import { useState, useEffect } from "react";

function AppSwitcher() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if(window.matchMedia('(prefers-color-scheme: light)').matches){
      setTheme('light');
    } else {
      setTheme('dark');
    }
  }, [])
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
      <div className="h-screen bg-white dark:bg-black flex justify-center items-center">
        <button className="bg-green-200 p-4 rounded-3xl" onClick={handleThemeSwitch}>
          Dark Mode
        </button>
      </div>
  );
}

export default AppSwitcher;
