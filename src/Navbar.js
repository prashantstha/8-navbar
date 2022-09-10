import React, { useRef, useState, useEffect } from 'react';
import { links, social } from './data';
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import logo from './logo-thing.png';

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const linksContainerRef = useRef(null);
    const linkRef = useRef(null);
    
    useEffect(() => {
      const menuHeight = linkRef.current.getBoundingClientRect().height;
      if ( navOpen ) {
        linksContainerRef.current.style.height = `${menuHeight}px`
      } else {
        linksContainerRef.current.style.height = '0px'
      }
    }, [navOpen]);
    
    return (
        <header className="App-header">
            <div className="containter">                
                <div className="logo-container">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="button-wrapper">
                        <button onClick={()=> setNavOpen(!navOpen) }>{ navOpen ? <HiOutlineX/> : <HiOutlineMenu/>}</button>
                    </div>
                </div>
                <nav className={`${ navOpen ? 'nav-container nav-container--open' : 'nav-container'}`} ref={linksContainerRef}>
                    <div className="menu-wrapper" ref={linkRef}>
                        <ul className="links">
                            {links.map((link) => {
                                const {id, url, text} = link;
                                return (
                                    <li className='link' key={id}>
                                        <a href={url}>{text}</a>
                                    </li>
                                );
                            })}
                            
                        </ul>
                        <div className="social-lists">
                            <ul>
                                {social.map((item) => {
                                    const {id, url, icon} = item;
                                return (
                                    <li key={id}><a href={url} target="_blank" rel="noopener noreferrer">{icon}</a></li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>        
        </header>
    )
};

export default Navbar;