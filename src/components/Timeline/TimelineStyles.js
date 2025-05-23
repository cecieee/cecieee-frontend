import styled from 'styled-components';

export const Container = styled.div`
  padding:0px 28px 27px;
  background-color: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  margin:1em 4em 3em;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    margin:0;
    padding:0px 1em;
  }
`;

export const Heading2 = styled.h2`
  justify-content: left;
  display: flex;
  font-family: ${props => props.theme.fonts.title};
  font-weight: 400;
  margin:0.67em 0 0.47em;
  font-size:2.2em;
  color:${props => props.theme.colors.primary2};

  @media ${(props) => props.theme.breakpoints.sm}{
    
  }
`

export const BlueHorizontal= styled.div`
display:flex;
background-color: none;
justify-content: left;
div {
    width: 2.1em;
    
    height: 6px;
    background-color: ${props => props.theme.colors.primary1};
    border-radius: 3px;}
`;
export const Paragraph= styled.p`
    color:black;
    font-size:18.62px;
    margin:1em 0 3em;
    font-weight: 600;
    width:70%;
    font-family: ${props => props.theme.fonts.title};
    @media ${(props) => props.theme.breakpoints.sm} {
    display:flex;
    flex-direction:row;
    width:100%;
  }
`;

