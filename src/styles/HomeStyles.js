import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100vh;
`;


export const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;


export const Heading1 = styled.h1`
  text-align: center;
  font-family: ${props => props.theme.fonts.title};
  font-weight: 700;
  margin-top:0.67em;
  margin-bottom:0.5em;
  font-size:2.8em;
  color:${props => props.theme.colors.primary2};
`
