import styled from '@emotion/styled';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing(3)};
  padding-top: 20px;
`;
