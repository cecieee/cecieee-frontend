import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.primary1};
  display: flex;
  flex-direction: row;
`;


export const Div1 = styled.div`
  padding:0.4rem 1.8rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    justify-content: center;
    align-items: center;
    padding:0.4rem 2.2rem;
  }
`;

export const NavLink = styled.a`
  font-size: 14px;
  padding-left:1.2rem;
  padding-right:1.2rem;
  line-height: 32px;
  color: white;
  transition: 0.4s ease;
  &:hover {
    color: rgba(255, 255, 255, 0.75);
    opacity: 1;
    cursor: pointer;
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
    font-size:12px;
    line-height: 26px;
    
  }
`;

export const Span = styled.span`
  color: white;
  font-size: 14px;
`;