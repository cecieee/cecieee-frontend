import styled from 'styled-components';

export const Container = styled.div`

  background-color: ${props => props.theme.colors.primary2};

  display: flex;
  flex-direction: column;
`;
export const Hr = styled.hr`
    border: 1px solid rgba(204, 204, 204, 0.5);
`

export const Div1 = styled.div`

margin:0 5rem;

@media ${(props) => props.theme.breakpoints.sm} {
    justify-content: left;
    margin-left:0rem;
    align-items: left;
    padding:0.4rem 2.2rem;
    
  }
`;