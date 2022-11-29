import React from "react";



function Header({darkMode, isDark}) {

    return (
        <header>
            <h2>Shopster</h2>
        <button onClick={darkMode}>
          {isDark ? "Dark" : "Light"} Mode
        </button>

        </header>
    )
}

export default Header;