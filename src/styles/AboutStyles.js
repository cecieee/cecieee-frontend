import styled from "styled-components";

export const StyledBanner = styled.div`
  background-color: #464646ce;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8rem;
`;

export const StyledMain = styled.main`
  text-align: center;
  padding: 5rem 15rem;
`;

const StyledParagraph = styled.p`
  color: black;
  margin-bottom: 1rem;
  font-size: 1.8rem;
  font-weight: 300;
  line-height: 1.8;
`;

StyledMain.Paragraph = StyledParagraph;

export const StyledAcheivements = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledAwardGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

StyledAcheivements.AwardsGrid = StyledAwardGrid;
