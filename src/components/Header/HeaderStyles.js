import styled from 'styled-components';

export const Container = styled.div`

  background-color: ${props => props.theme.colors.background1};
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  padding: 0 3em;
  display: flex;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 0.4em;
}
`;

export const Container2 = styled.div`
  padding: 10px 0;
  position:absolute;
  z-index:25;
  width:18%;
  top: 6.56em;
  margin-left:8.5em;
  background-color: ${props => props.theme.colors.background1};
  box-shadow: 1px 4px 6px 1px rgba(0, 0, 0, 0.3);
  &:hover {
    cursor: pointer;
    .hide-container{
      display: block;
  
    }
    }
  @media ${(props) => props.theme.breakpoints.sm} {

  }
`;

export const Div1 = styled.div`

padding:0.4rem;

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
display:flex;
margin:0 0 0 auto;
justify-content:flex-end;
list-style: none;



@media ${(props) => props.theme.breakpoints.md} {
  flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    z-index:20;
    transform: ${({ open }) => open ? 'translateX(0%) translateY(33.5%)' : 'translateX(100%) translateY(33.5%)'};
    top: 0;
    right: 0;
    padding:2rem 0;
    width: 100%;
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
  .hide-container{
    display:none;
  }

  &:hover {
    color: #6C98E1;
    opacity: 1;
    cursor: pointer;
    .hide-container{
      display: block;
  
    }
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.8em 2em;
    font-size:1.25em;
    line-height: 26px;
    justify-content:flex-start;
    color: ${({ active }) => active ? '#FDE428' : '#FFFFFF'};
    &:hover {
    color: #6C98E1;
    opacity: 1;
    cursor: pointer;
    .hide-container{
      display: none;
  
    }
  }
}
`;

export const Elements = styled.a`
  display:block;
  padding:0.8em 2em;
  background-color: ${props => props.theme.colors.background1};
  font-family: ${props => props.theme.fonts.title};
  font-weight:400;
  font-size:0.9em;
  line-height:18px;
  color:#000000;
  &:hover {
    background-color: #002e5b;
    color:#FFFFFF;
    opacity: 1;
    cursor: pointer;
    .hide-container{
      display: block;
  
    }
    }
`;