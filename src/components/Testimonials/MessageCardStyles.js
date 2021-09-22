import styled from 'styled-components';

export const Card = styled.div`
    background-color: ${props => props.theme.colors.primary3};
    margin-right: 15px;
    margin-left: 15px;
    font-size:14px;
    width:42em;
    height:auto;
    line-height:26px;
    @media ${(props) => props.theme.breakpoints.sm} {
    width:100%;
    margin:0;
  }
`;

export const Paragraph= styled.p`
    color:black;
    padding:28px 28px 0px;
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
  display:flex;
  flex-direction:row;
  margin-bottom:3em;
  
  margin-top:4em;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    display:flex;
    flex-direction:column;
  }
`;