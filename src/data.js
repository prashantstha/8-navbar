import React from 'react';
import { FaFacebookF, FaTwitter, FaTiktok  } from "react-icons/fa";

export const links = [
    {
        id: 1,
        url: '/',
        text: 'Home'
    },
    {
        id: 2,
        url: '/about-us',
        text: 'About us'
    },
    {
        id: 3,
        url: '/services',
        text: 'Services'
    },
    {
        id: 4,
        url: '/projects',
        text: 'Projects'
    },
    {
        id: 5,
        url: '/contact-us',
        text: 'Contact us'
    }
];

export const social = [
    {
        id: 1,
        url: 'https://www.facebook.com',
        icon: <FaFacebookF/>
    },
    {
        id: 2,
        url: 'https://twitter.com/',
        icon: <FaTwitter/>
    },
    {
        id: 3,
        url: 'https://www.tiktok.com',
        icon: <FaTiktok/>
    }
];