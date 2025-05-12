import React from 'react';
import * as RiIcons from 'react-icons/ri';

export const MenuBarData = [
    {
        title: 'Home',
        path: '/',
       
      },
  {
    title: 'About Us',
    path: '/about/index',
    iconClosed: <RiIcons.RiArrowDownSFill color="white"/>,
    iconOpened: <RiIcons.RiArrowUpSFill color="white"/>,

    subNav: [
      {
        title: 'ExCom 2025',
        path: '/about/execom2025'
      },
      {
        title: 'ExCom 2023',
        path: '/about/execom2023',
        
      },
      {
        title: 'Timeline',
        path: '/about/timeline',
      }
    ]
  },
  {
    title: 'Chapters',
    path: '#',
    iconClosed: <RiIcons.RiArrowDownSFill color="white"/>,
    iconOpened: <RiIcons.RiArrowUpSFill color="white"/>,

    subNav: [
      {
        title: 'Computer Society',
        path: '/cs',
        
        cName: 'sub-nav'
      },
      {
        title: 'Robotics and Automation Society',
        path: '/ras',
        
        cName: 'sub-nav'
      },{
        title: 'Power and Energy Society',
        path: '/pes',
        
        cName: 'sub-nav'
      },{
        title: 'Instrumentation and Measurement Society',
        path: '/ims',
        
        cName: 'sub-nav'
      },{
        title: 'Solid State Circuit Society',
        path: '/sscs',
        
        cName: 'sub-nav'
      },{
        title: 'Industry Applications Society',
        path: '/ias',
        
        cName: 'sub-nav'
      },
      {
        title: 'IEEE SIGHT',
        path: '/sight',
        
        cName: 'sub-nav'
      },
      {
        title: 'WIE',
        path: '/wie',
        
        cName: 'sub-nav'
      },
      
    ]
  },
  {
    title: 'Events',
    path: '/event-list',
   
  },
  {
    title: 'Constitution',
    path: '/constitution',
  },
  {
    title: 'Join IEEE',
    path: 'https://www.ieee.org/membership/join/index.html',
  },
  {
    title: 'Other Links',
    path: '#',
    

    iconClosed: <RiIcons.RiArrowDownSFill color="white"/>,
    iconOpened: <RiIcons.RiArrowUpSFill color="white" />,

    subNav: [
      {
        title: 'IEEE.org',
        path: 'https://www.ieee.org/',
        
      },
      {
        title: 'IEEE Xplore Digital Library',
        path: 'https://ieeexplore.ieee.org/Xplore/home.jsp',
        
      },
      {
        title: 'IEEE Standards',
        path: 'https://standards.ieee.org/',
        
      },
      {
        title: 'IEEE Spectrum',
        path: 'https://spectrum.ieee.org/',
        
      },
      {
        title: 'IEEE Kerala Section',
        path: 'https://ieeekerala.org/',
        
      },
      {
        title: 'IEEE Region 10',
        path: 'https://www.ieeer10.org/',
        
      },
      {
        title: 'More Sites',
        path: 'https://www.ieee.org/sitemap.html',
        
      },

    ]
  }
];