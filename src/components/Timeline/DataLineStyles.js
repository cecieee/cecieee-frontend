import styled from 'styled-components';

export const Container = styled.div`
  
  background-color: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: row;
  width:78%;
 
  @media ${(props) => props.theme.breakpoints.sm} {
    width:100%;
  }
`;

export const Paragraph= styled.p`
    color:black;
    font-size:20px;
    display:flex;
    
    flex-direction:column;
    font-weight: 700;
    font-family: ${props => props.theme.fonts.title};
    @media ${(props) => props.theme.breakpoints.sm} {
  }
`;

export const Paragraph2= styled.p`
    color:#777777;
    font-size:13px;
    margin-top:2em;
    margin-bottom:2em;
    font-weight: 400;
    font-family: ${props => props.theme.fonts.main};
    @media ${(props) => props.theme.breakpoints.sm} {
  }
`;