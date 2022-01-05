import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme.colors.background1};
  padding: 0 3em;
  display: flex;
  flex-wrap:wrap;
//   grid-template-columns: repeat(3, 1fr);
  @media ${(props) => props.theme.breakpoints.md} {
    padding: 0 0.4em;
    grid-template-columns: repeat(2, 1fr);
}
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 0.4em;
    grid-template-columns: repeat(1, 1fr);
}
`;

export const Card = styled.div`
    display:flex;
    flex-direction : column;
    height : 42rem;
    margin : 70px auto;
    background : #fff;
    position : relative;
    @media ${(props) => props.theme.breakpoints.sm} {
        width:100%;
        margin: 2em 1em;
        height : 38rem;
    }
`;

export const EventImage = styled.img`
    max-width:400px;
    @media ${(props) => props.theme.breakpoints.sm} {
        max-width:300px;
    }

`;

export const EventName = styled.div`
margin: 2rem 2rem 1rem 1rem;
font-size: 16px;
color: ${props => props.theme.colors.primary2};
font-family: ${props => props.theme.fonts.title};
font-weight: bold;
`;

export const EventDate = styled.div`
margin: 1rem 2rem 0rem 2rem;
display: flex;
font-size:13px;
color: ${props => props.theme.colors.primary4};
font-family: ${props => props.theme.fonts.main};
`;

export const EventMode = styled.div`
display: flex;
margin: 1rem 2rem 0rem 2rem;
font-size:13px;
color: ${props => props.theme.colors.primary4};
font-family: ${props => props.theme.fonts.main};
`;


export const Span = styled.span`
    margin-left: 8px;
`;