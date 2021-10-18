import styled from 'styled-components';

export const Container = styled.div`

  background-color: ${props => props.theme.colors.primary2};

  display: flex;
  flex-direction: column;
  padding-bottom:4rem;
`;
export const Hr = styled.hr`
    margin:0 0.8em 0.8em 0.8em;
    border: 1px solid rgba(204, 204, 204, 0.5);

    @media ${(props) => props.theme.breakpoints.sm}{
      display:none;
    }
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

export const Paragraph = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
  color:rgba(255, 255, 255, 0.6);
  margin:8px 0px;
  font-size:13px;
`;

export const Paragraph2 = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
  color:rgba(255, 255, 255, 0.6);
  font-size:13px;

  span{
    color:red;
    margin:0 4px;
  }
`;