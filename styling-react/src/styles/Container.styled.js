import styled from "styled-components";

export const Container = styled.div`
  width: 600px;
  border: 3px solid green;
  max-width: 100%;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ bgColor }) => bgColor};
`;
