"use client";

import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
      title={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
      className="btn btn-circle btn-ghost border border-base-300 text-base-content transition-all duration-200 hover:bg-base-200"
    >
      {resolvedTheme === "dark" ? (
        <MdLightMode className="h-6 w-6" />
      ) : (
        <MdDarkMode className="h-6 w-6" />
      )}
    </button>
  );
};

export default ThemeToggle;
