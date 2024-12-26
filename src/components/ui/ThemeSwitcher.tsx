import useTheme from "../../utils/theme-switch";
import Button from "./Button"
import { MdOutlineDarkMode } from "react-icons/md";

export default function ThemeSwitcher() {
  const {theme, switchTheme} = useTheme();

  const handleThemeSwitch = () => {
    switchTheme(theme === 'dark' ? 'light' : 'dark');
  }

  return (
    <Button onClick={handleThemeSwitch} variant="outline" size="icon" hover="opacity"><MdOutlineDarkMode className="size-5"/></Button>
  )
}
