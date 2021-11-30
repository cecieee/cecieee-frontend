import styled from 'styled-components';

export const Container = styled.div`
 padding:0 3em;
  background-color: ${props => props.theme.colors.primary2};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media ${(props) => props.theme.breakpoints.md} {
        grid-template-columns: 1fr 1fr;
    }

    @media ${(props) => props.theme.breakpoints.sm} {
        grid-template-columns: 1fr;
        padding:0 1em;
    }
`;


export const Div1 = styled.div`
padding:0 1.6em;
margin-top:5em;

align-content: center;
margin-bottom:4em;

@media ${(props) => props.theme.breakpoints.sm} {
    justify-content: left;
    margin-left:0rem;
    align-items: left;
    padding:0.4rem 1.2rem;
    
  }
`;


export const Div2 = styled.div`


margin-top:5em;
padding:0 1.6em;
align-content: center;
margin-bottom:4em;
@media ${(props) => props.theme.breakpoints.sm} {
    margin-left:0rem;
    align-items: left;
    padding:0.4rem 1.2rem;
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
  a {
    text-decoration : none;
    color:white;
    font-weight:600;
  }
  @media ${(props) => props.theme.breakpoints.sm}{

  }
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