import { useEffect, useState } from "react";
import IconSun from "./IconSun";
import IconMoon from "./IconMoon";

function ThemeToggler() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "theme-light"
  );

  useEffect(() => {
    const $root = document.getElementById("root");
    $root?.classList.add(theme);
  }, [theme]);

  const setThemeHandler = () => {
    setTheme((prevTheme) => {
      const prevValue = prevTheme;
      const newValue =
        prevTheme === "theme-light" ? "theme-dark" : "theme-light";

      localStorage.setItem("theme", newValue);
      const $root = document.getElementById("root");

      $root?.classList.remove(prevValue);
      $root?.classList.add(newValue);

      return newValue;
    });
  };

  return (
    <button
      className="theme-toggler text-preset-4-bold"
      onClick={setThemeHandler}
    >
      {theme === "theme-light" ? (
        <>
          dark <IconMoon />
        </>
      ) : (
        <>
          light <IconSun />
        </>
      )}
    </button>
  );
}

export default ThemeToggler;
