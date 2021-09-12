import styled from 'styled-components';

export const Container = styled.div`

  background-color: ${props => props.theme.colors.primary2};
  height:24em;
  display: flex;
  flex-direction: row;
`;


export const Div1 = styled.div`

width:14em;
margin-top:5em;
margin-left:4em;
margin-right:3em;
align-content: center;
margin-bottom:4em;

@media ${(props) => props.theme.breakpoints.sm} {
    justify-content: left;
    margin-left:0rem;
    align-items: left;
    padding:0.4rem 2.2rem;
    
  }
`;


export const Div2 = styled.div`

width:15em;
margin-top:5em;
margin-left:4em;
margin-right:2em;
align-content: center;
margin-bottom:4em;

@media ${(props) => props.theme.breakpoints.sm} {
    justify-content: left;
    margin-left:0rem;
    align-items: left;
    padding:0.4rem 2.2rem;
    
  }
`;

export const Div3 = styled.div`

color:red;
height:8em;


@media ${(props) => props.theme.breakpoints.sm} {
    justify-content: left;
    margin-left:0rem;
    align-items: left;
    padding:0.4rem 2.2rem;
    
  }
`;

export const Paragraph = styled.p`
  margin-top: 2em;
  color: white;
  line-height: 22px;
  font-size: 13px;
`

export const Heading4 = styled.h4`
  margin-bottom: 14px;
  color: white;
  font-family: ${props => props.theme.fonts.title};
  font-weight: normal;
  line-height: 1.15;
  font-size: 26px;
`

export const Hr = styled.hr`
    border: 1px solid rgba(204, 204, 204, 0.5);
`