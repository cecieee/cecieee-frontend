import styled from 'styled-components';

export const Container = styled.div`
  padding:0px 28px 27px;
  background-color: ${props => props.theme.colors.background};
  display: flex;
  flex-direction: column;
  margin-bottom:2em;
  margin-left:4em;
  margin-right:4em;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin:0;
    padding:0px 1em;
  }
`;



