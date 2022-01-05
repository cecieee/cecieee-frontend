import React from 'react';
import ActiveLink from '../ActiveLink';
import Link from 'next/link';
import AboutElement from './AboutElements';
import ChapterElement from './ChapterElements';
import { NavLink,Div2} from './HeaderStyles';
const RightNav = ({ open }) => {
  return (

    <Div2 open={open}>
    <ActiveLink href="/"><NavLink>Home</NavLink></ActiveLink>
    <ActiveLink href="/about"><NavLink>About Us<AboutElement/></NavLink></ActiveLink>
    
    <ActiveLink href=""><NavLink>Chapters<ChapterElement/></NavLink></ActiveLink>
    <ActiveLink href="/event-list"><NavLink>Events</NavLink></ActiveLink>
    <ActiveLink href="/constitution"><NavLink>Constitution</NavLink></ActiveLink>
    <Link href="https://www.ieee.org/membership/join/index.html" passHref><NavLink>Join IEEE</NavLink></Link>
    </Div2>
  )
}

export default RightNav