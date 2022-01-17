import styled from 'styled-components';

export const Container = styled.div`

  background-color: ${props => props.theme.colors.background1};
  
  padding: 0 3em;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0 0.4em;
    display: flex;
    flex-direction:column;
}
`;

export const Card = styled.div`
    display:flex;
    flex-direction : column;
    width : 70%;
    height : auto;
    margin : 70px auto;
    color:grey;
    border:  4px solid rgba(236, 236, 236,0.8);
    background : #fff;
    position : relative;
    @media ${(props) => props.theme.breakpoints.sm} {
        width:100%;
        margin: 2em 0;
    }
`;

export const EventImage = styled.img`


`;

export const EventName = styled.div`
margin: 2rem 2rem 1rem 2rem;
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
margin: 1rem 2rem 1rem 2rem;
font-size:13px;
color: ${props => props.theme.colors.primary4};
font-family: ${props => props.theme.fonts.main};
`;


export const Span = styled.span`
    margin-left: 8px;
`;