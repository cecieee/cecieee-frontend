import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { MenuBarData } from '../constants/constants';
import SubMenu from './SubMenu';
import { IconContext } from 'react-icons/lib';

const Nav = styled.div`
  display: none;
  @media ${(props) => props.theme.breakpoints.md} {
    color: #15171c;
  height: 80px;
  display: flex;
  position: absolute;
  top:0;
  right: 20px;
  z-index: 10;
  align-items: center;
}

`;

const NavIcon = styled.a`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
overflow: auto;
width: 100%;
  background: #15171c;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0%' : '100%')};
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#15171c' }}>
        <Nav>
          <NavIcon href='#'>
            <FaIcons.FaBars color="black" onClick={showSidebar} />
          </NavIcon>
        </Nav>
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon href='#'>
              <AiIcons.AiOutlineClose color="white" onClick={showSidebar} />
            </NavIcon>
            {MenuBarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;