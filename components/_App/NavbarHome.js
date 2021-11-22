import React, { useState } from "react";
import Link from '@/utils/ActiveLink';
import * as Icon from 'react-feather';

const NavbarStyleTwo = () => {
    const [menu, setMenu] = React.useState(true)
 
    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("header");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0); 
    })
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <header id="header" className="headroom navbar-style-two">
            <div className="startp-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link href="/it-startup">
                            <a onClick={toggleNavbar} className="navbar-brand">
                                <img src="/images/logo.png" alt="logo" />
                            </a>
                        </Link>

                        <button 
                            onClick={toggleNavbar}
                            className={classTwo}
                            type="button" 
                            data-toggle="collapse" 
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                            aria-expanded="false" 
                            aria-label="Toggle navigation"
                        >
                            <span className="icon-bar top-bar"></span>
                            <span className="icon-bar middle-bar"></span>
                            <span className="icon-bar bottom-bar"></span>
                        </button>

                        <div className={classOne} id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <Link href="/#" activeClassName="active">
                                        <a onClick={toggleNavbar} className="nav-link">
                                            Home
                                        </a>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="/#">
                                        <a onClick={toggleNavbar} className="nav-link">
                                            Accomodation <Icon.ChevronDown />
                                        </a>
                                    </Link> 

                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <Link href="/Accomodation/Superior" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Superior Room</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/about-2" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Deluxe Room</a>
                                            </Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link href="/about-3" activeClassName="active">
                                                <a onClick={toggleNavbar} className="nav-link">Executive Room</a>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                <li className="nav-item">
                                    <Link href="/fasilitas">
                                        <a onClick={toggleNavbar} className="nav-link">
                                            Facilities
                                        </a>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="/gallery" activeClassName="active">
                                        <a onClick={toggleNavbar} className="nav-link">
                                            Gallery
                                        </a>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="/#">
                                        <a onClick={toggleNavbar} className="nav-link">
                                            Blog
                                        </a>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link href="/contactus" activeClassName="active">
                                        <a onClick={toggleNavbar} className="nav-link">About Us</a>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="others-option">
                            <Link href="/login">
							    <a className="btn btn-primary">Need Help ?</a>
                            </Link>
						</div>
                    </nav>
                </div>
            </div>
        </header>
    );
}

export default NavbarStyleTwo;