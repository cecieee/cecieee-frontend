import styled from 'styled-components';

export const Card = styled.span`
    background-color: ${props => props.theme.colors.primary3};
    margin:1em;
    display: block;
    font-size:14px;
    width:60%;
    @media ${(props) => props.theme.breakpoints.sm} {
    width:100%;
    margin:0;
  }
`;

export const Paragraph= styled.p`
    color:black;
    padding:28px 28px 0px;
    line-height:26px;
    @media ${(props) => props.theme.breakpoints.sm} {
    display:flex;
    flex-direction:column;
  }
`;

export const Quotes = styled.span`
    display:flex;
    justify-content:end;
    align-items:end;
`;

export const Container = styled.div`
  
  background-color: ${props => props.theme.colors.background};
  margin-bottom:5em;
  margin-top:4em;
  
  display:flex;
  justify-content: center;
  align-items: center;
  @media ${(props) => props.theme.breakpoints.sm} {
    display:flex;
    flex-direction:column;
  }
`;

export const Triangle = styled.div`
    
    width: 0; 
    height: 0; 
    display:flex;
    margin-left:4em;
    border-bottom: 15px solid transparent;
    position:absolute;
    z-index: 20;
    border-left: 15px solid ${props => props.theme.colors.primary3};

`;

export const CircleAvatar = styled.img`
  border-radius:50%;
  position:absolute;
  display: flex;
  justify-content: center;
  margin-top:2rem;
  align-items: center;
  border: 1px solid black;
  width:50px;
  height:50px;

`;

export const AvatarDetails = styled.div`
  position:absolute;
  margin:2.5rem 7rem;
  color:black;
`;

export const Name = styled.div`
  font-size:14px;
  font-weight:bold;
`;

export const Designation = styled.div`
  font-size:14px;
  font-weight:italic;
`;