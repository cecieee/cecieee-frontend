import styled from 'styled-components';

export const Container = styled.div`
  
  background-color: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  width:auto;
  margin:0 1.6em;
  @media ${(props) => props.theme.breakpoints.sm} {
    
  }
`;

export const Circle = styled.span`
height: 9px;
  width: 9px;
  background-color: #fde428;
  border-radius: 50%;
  display: inline-block;
`;

export const VerticalLine = styled.span`
  width: 1.2px;
  min-height: 130px;
  background: #e6e6e6;

  border-radius: 100%;
  margin-left: 0.22em;
@media ${(props) => props.theme.breakpoints.sm} {
  min-height: 230px;
}
`;