import styled from 'styled-components';

export const Container = styled.div`

  background-color: ${props => props.theme.colors.background};
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
`;


export const Div1 = styled.div`

padding:0.4rem;
margin-left:5rem;
@media ${(props) => props.theme.breakpoints.sm} {
    justify-content: left;
    margin-left:0rem;
    align-items: left;
    padding:0.4rem 2.2rem;
    width:260px;
        height:62px;
  }
`;
export const Div2 = styled.div`
display: flex;
margin-left:14em;
list-style: none;
flex-flow: row nowrap;

@media ${(props) => props.theme.breakpoints.md} {
  flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`;
export const NavLink = styled.a`
  flex-flow: row nowrap;
  font-family: ${props => props.theme.fonts.main};
  font-weight:700;
  font-size: 16px;
  display:flex;
  padding:10px 16px;
  justify-content: center;
  align-items: center;
  line-height: 32px;
  color: #002e5b;
  transition: 0.4s ease;
  color: ${({ active }) => active ? '#6C98E1' : '#002e5b'};

  &:hover {
    color: #6C98E1;
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
    font-size:12px;
    line-height: 26px;
    
  }
`;