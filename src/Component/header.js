import React from 'react';
import logoPic from '../Images/logoPic.png'

function Header() {
    return (
        <nav>
            <ul>

                <li className="leftLI"><a href="#"><img src={logoPic} alt="Jose Amarnate" title="Jose Amarante" /></a>Amarante </li>
                <li className="rightLI down"><a href="FILES\Resume.pdf" download>Resume</a></li>
                <li className="down"><a href="#">Contact</a></li>
            </ul>
        </nav>
    )
};

export default Header;