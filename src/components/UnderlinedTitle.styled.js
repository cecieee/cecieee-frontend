import styled from "styled-components";

const UnderLinedTitle = ({ color, children, primary }) => {
  return (
    <StyledWrapper>
      <StyledTitle primary={primary}>{children}</StyledTitle>
      <StyledUnderline color={color} primary={primary} />
    </StyledWrapper>
  );
};

export default UnderLinedTitle;

const StyledWrapper = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.title};
  font-weight: 700;
  font-size: 3.8rem;
  letter-spacing: 0.1px;
  margin: 1rem 0;
  color: ${(props) => (props.primary ? "white" : "black")};
`;

const StyledUnderline = styled.span`
  background-color: ${(props) => props.theme.colors.primary1};
  border-radius: 25px;
  width: 30%;
  height: 0.8rem;
`;
