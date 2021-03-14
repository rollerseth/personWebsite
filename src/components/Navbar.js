import React, {useState} from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData'
import { socialMediaURLS } from './SidebarData'
import './Navbar.css';
import { IconContext } from 'react-icons'

function Navbar() {

    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
        <IconContext.Provider value={{className: ''}}>
            <div className="navbar">
                <div className="navbar-inner">
                    <Link to="#" className="menu-bars">
                        <FaIcons.FaBars onClick={showSidebar} className="bar-icon"/>
                    </Link>
                    <div>
                    {socialMediaURLS.map((item,index) => {
                        return (
                            <a key={index} href={item.path} rel="noreferrer" target="_blank" className="social-media-icon">
                                {item.icon}
                            </a>
                        )
                    })}
                    </div>
                </div>             
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className="nav-menu-items" onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className="menu-bars">
                            <AiIcons.AiOutlineClose className="navbar-icons" />
                        </Link>
                    </li>
                    {SidebarData.map((item,index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
