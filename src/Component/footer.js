import React from 'react';
import logoPic from '../Images/logoPic.png'


function Footer() {
    return (
        <footer class="footer">
            <div class="footer__addr">
                <h1 class="footer__logo"><img src={logoPic} alt="Avatar" id="footPic" /></h1>

                <h2>Contact</h2>

                <address>
                    New York, New York<br />

                    <a class="footer__btn" href="mailto:jose.m.amarante12@gmail.com">Email Me</a>
                </address>
            </div>

            <ul class="footer__nav">
                <li class="nav__item">
                    <h2 class="nav__title">Media</h2>

                    <ul class="nav__ul">
                        <li>
                            <a href="https://github.com/JoseAmarante17" target="_blank">GitHub</a>
                        </li>

                        <li>
                            <a href="https://www.linkedin.com/in/jose-amarante-1bab21196/" target="_blank">Linkedin</a>
                        </li>

                    </ul>
                </li>

                <li class="nav__item nav__item--extra">
                    <h2 class="nav__title">Technology Used</h2>

                    <ul class="nav__ul nav__ul--extra">
                        <li>
                            <a href="#">React JS</a>
                        </li>

                        <li>
                            <a href="#">Css</a>
                        </li>

                        <li>
                            <a href="#">.</a>
                        </li>

                    </ul>
                </li>

            </ul>

            <div class="legal">
                <p>&copy; Jose Amarante. All rights reserved.</p>

            </div>
        </footer>);
}

export default Footer;