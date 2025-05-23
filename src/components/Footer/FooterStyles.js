import styled from 'styled-components';

export const Container = styled.div`
height: auto;
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
    margin:1em 0rem;
    align-items: left;
    padding:0.4rem 1.2rem;
    
  }
`;


export const Div2 = styled.div`

margin: 0 6em;
margin-top:5em;
padding:0 1.6em;
align-content: center;
margin-bottom:4em;
@media ${(props) => props.theme.breakpoints.sm} {
    margin:2em 0;
    align-items: left;

    padding:0.4rem 1.2rem;
  }
`;

export const Div3 = styled.div`
margin-top:3em;
padding:0 0;
display:flex;
flex-direction:row;
align-content: center;
.social-text{
  display:none;
}
@media ${(props) => props.theme.breakpoints.sm} {
  margin-top:0;
    margin-left:0rem;
    align-items: left;
    display:grid;
    grid-template-columns: 1fr 1fr;
    padding:0.4rem 1.2rem;
    
  }
  li{
    
    padding:0 1.2em;
    @media ${(props) => props.theme.breakpoints.sm} {
      padding:0;
    margin:1em 0;
    display:flex;
    .social-text{
     display: flex;
     align-items:center;
     color:white;
     padding-left:10px;
      
    }
  }
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