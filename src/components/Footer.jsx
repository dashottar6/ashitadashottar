import React from "react";
import './Footer.css';

function Footer() {
    return(

        <footer className="text-center footer fixed-bottom">
                <a href="https://www.facebook.com/ashita.dashottar"><i id="social-fb"
                                                                className="fab fa-facebook-square fa-3x social"></i></a>
                <a href="https://www.linkedin.com/in/ashita-dashottar/"><i id="social-li"
                                                           className="fab fa-linkedin-square fa-3x social"></i></a>
                <a href="https://github.com/dashottar6"><i id="social-gh"
                                                                     className="fab fa-github-square fa-3x social"></i></a>
                <a href="mailto:ashitadashottar6@gmail.com"><i id="social-em"
                                                        className="fa fa-envelope-square fa-3x social"></i></a>


        </footer>
    );
}
// text-center center-block

export default Footer;