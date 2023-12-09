import styled from '@emotion/styled';

export const Contact = styled.li`
  display: flex;
  justify-content: space-between;

  padding: ${props => props.theme.spacing(4)} ${props => props.theme.spacing(6)};
  overflow: hidden;
  border-radius: ${props => props.theme.spacing(1)};

  cursor: pointer;

  transition-property: transform, box-shadow;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};

  background-color: ${props => props.theme.colors.gray};

  &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadows.small};
  }
`;

export const Name = styled.p`
  color: ${props => props.theme.colors.white};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.small};
  letter-spacing: ${props => props.theme.spacing(0.25)};
`;

export const Number = styled.p`
  color: ${props => props.theme.colors.white};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.small};
  letter-spacing: ${props => props.theme.spacing(0.25)};
`;
