"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const emptySubscribe = () => () => {};

const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();

  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={
        mounted
          ? `Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`
          : "Toggle theme"
      }
      title={
        mounted
          ? `Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`
          : "Toggle theme"
      }
      className="btn btn-circle btn-ghost border border-base-300 text-base-content transition-all duration-200 hover:bg-base-200"
    >
      {!mounted ? (
        <MdDarkMode className="h-6 w-6" />
      ) : resolvedTheme === "dark" ? (
        <MdLightMode className="h-6 w-6" />
      ) : (
        <MdDarkMode className="h-6 w-6" />
      )}
    </button>
  );
};

export default ThemeToggle;
