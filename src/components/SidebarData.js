import React from 'react'
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as IoIcons from 'react-icons/io';
import * as BsIcons from 'react-icons/bs';

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome size={40} className="navbar-icons" />,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: '/about',
        icon: <BsIcons.BsFillPersonFill size={40} className="navbar-icons" />,
        cName: 'nav-text'
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <AiIcons.AiFillFolder size={40} className="navbar-icons" />,
        cName: 'nav-text'
    },
]

export const socialMediaURLS = [
    {
        title: 'LinkedIn',
        path: 'https://www.linkedin.com/in/seth-roller-783939191/',
        icon: <AiIcons.AiFillLinkedin size={40} className="navbar-icons" />,
    },
    {
        title: 'Instagram',
        path: 'https://www.instagram.com/set.rolling/',
        icon: <AiIcons.AiFillInstagram size={40} className="navbar-icons" />,
    },
    {
        title: 'Facebook',
        path: 'https://www.facebook.com/seth.roller.1/',
        icon: <AiIcons.AiFillFacebook size={40} className="navbar-icons" />,
    }, 
]