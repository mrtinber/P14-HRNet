import { useStore } from "../../store/useStore"

export const Header = () => {
    const { isThemeDark, toggleDarkTheme } = useStore();

    return (
        <div className="header">
            <h1 className="header__title">HRnet</h1>
            <div className="header__toggle">
                <label htmlFor="theme">
                    {isThemeDark ?
                        <i className="fa-solid fa-sun"></i> :
                        <i className="fa-solid fa-moon"></i>
                    }
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