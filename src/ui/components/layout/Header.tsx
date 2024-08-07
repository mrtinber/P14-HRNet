import { Link } from "react-router-dom";
import { SunIcon } from "../icons/SunIcon";
import { MoonIcon } from "../icons/MoonIcon";
import { useStore } from "../../../coreLogic/store/useStore";

export const Header = () => {
    const { isThemeDark, toggleDarkTheme } = useStore();

    return (
        <div className="header">
            <Link to="/">
                <h1 className="header__title">HRnet</h1>
            </Link>

            <div className="header__toggle">
                <label htmlFor="theme">
                    {isThemeDark ? <SunIcon /> : <MoonIcon />}
                </label>
                <input
                    type='checkbox'
                    className="theme-checkbox"
                    id='theme'
                    name='theme'
                    checked={isThemeDark}
                    onChange={() => toggleDarkTheme(!isThemeDark)}
                />
            </div>
        </div>
    )
}