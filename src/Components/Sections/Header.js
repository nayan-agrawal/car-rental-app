import { useEffect, useState } from 'react'

const Header = () => {

    /**
    * Navbar links active state on scroll
    */
    const navbarlinksActive = () => {
        let position = window.scrollY + 200;
        let navbarlinks = document.querySelectorAll('#navbar .scrollto');

        navbarlinks.forEach(navbarLink => {
            if (!navbarLink.hash) return;
            let section = document.querySelector(navbarLink.hash)
            if (!section) return;
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                navbarLink.classList.add('active')
            } else {
                navbarLink.classList.remove('active')
            }
        });
    }

    /**
    * Toggle .header-scrolled class to #header when page is scrolled
    */
    const headerScrolled = () => {
        let selectHeader = document.querySelector('#header');
        if (selectHeader) {
            if (window.scrollY > 100) {
                selectHeader.classList.add('header-scrolled')
            } else {
                selectHeader.classList.remove('header-scrolled')
            }
        }
    }

    /**
    * Mobile nav toggle
    */
    const activateMobileNav = () => {
        let mobileNavToggle = document.querySelector('.mobile-nav-toggle');
        let mobileNavToggleDropdown = document.querySelector('.navbar .dropdown > a');

        document.querySelector('#navbar').classList.toggle('navbar-mobile');
        mobileNavToggle.classList.toggle('bi-list')
        mobileNavToggle.classList.toggle('bi-x')

        /**
        * Mobile nav dropdowns activate
        */
        mobileNavToggleDropdown.addEventListener('click', function (e) {
            if (document.querySelector('#navbar').classList.contains('navbar-mobile')) {
                e.preventDefault()
                this.nextElementSibling.classList.toggle('dropdown-active')
            }
        }, true)
    }

    useEffect(() => {
        window.addEventListener('load', () => {
            navbarlinksActive();
            headerScrolled();
        });
        document.addEventListener('scroll', () => {
            navbarlinksActive();
            headerScrolled();
        });
    }, []);

    return (
        <header id="header" className="header fixed-top d-flex align-items-center">
            <div className="container d-flex align-items-center justify-content-between">

                <div id="logo">
                    <h1><a href="index.html"><span>e</span>Startup</a></h1>
                    {/* <a href="index.html"><img src="assets/img/logo.png" alt="" title="" /></a> */}
                </div>

                <nav id="navbar" className="navbar">
                    <ul>
                        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                        <li><a className="nav-link scrollto" href="#about-us">About</a></li>
                        <li><a className="nav-link scrollto" href="#features">Features</a></li>
                        <li><a className="nav-link scrollto" href="#screenshots">Screenshots</a></li>
                        <li><a className="nav-link scrollto" href="#team">Team</a></li>
                        <li><a className="nav-link scrollto" href="#pricing">Pricing</a></li>
                        <li className="dropdown"><a href="#"><span>Drop Down</span> <i className="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a href="#">Drop Down 1</a></li>
                                <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
                                    <ul>
                                        <li><a href="#">Deep Drop Down 1</a></li>
                                        <li><a href="#">Deep Drop Down 2</a></li>
                                        <li><a href="#">Deep Drop Down 3</a></li>
                                        <li><a href="#">Deep Drop Down 4</a></li>
                                        <li><a href="#">Deep Drop Down 5</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Drop Down 2</a></li>
                                <li><a href="#">Drop Down 3</a></li>
                                <li><a href="#">Drop Down 4</a></li>
                            </ul>
                        </li>
                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle" onClick={activateMobileNav}></i>
                </nav>

            </div>
        </header>
    )
}

export default Header