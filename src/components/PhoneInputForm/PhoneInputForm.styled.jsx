import styled from '@emotion/styled';

export const InputFormContainer = styled.form`
  width: ${props => props.theme.spacing(200)};
  margin-left: auto;
  margin-right: auto;

  background-color: ${props => props.theme.colors.black};
  border-radius: ${props => props.theme.spacing(1.5)};

  padding: ${props => props.theme.spacing(10)}
    ${props => props.theme.spacing(30)};

  display: flex;
  flex-direction: column;
  row-gap: ${props => props.theme.spacing(0.5)};
`;

export const FormField = styled.label`
  display: flex;
  gap: ${props => props.theme.spacing(6)};
  align-items: center;

  padding: ${props => props.theme.spacing(4)} ${props => props.theme.spacing(6)};
  overflow: hidden;
  border-radius: ${props => props.theme.spacing(1)};

  color: ${props => props.theme.colors.accent1};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.large};
  letter-spacing: ${props => props.theme.spacing(0.25)};

  background-color: ${props => props.theme.colors.gray};
`;

export const FormInput = styled.input`
  width: 100%;
  padding: ${props => props.theme.spacing(1)} ${props => props.theme.spacing(2)};
  border-radius: ${props => props.theme.spacing(1)};
  border: none;

  color: ${props => props.theme.colors.light};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.large};
  letter-spacing: ${props => props.theme.spacing(0.25)};
  line-height: inherit;

  transition-property: color;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};

  background-color: ${props => props.theme.colors.gray};

  &:hover {
    color: ${props => props.theme.colors.white};

    &::placeholder {
      color: ${props => props.theme.colors.accent2};
    }
  }

  &:focus-visible {
    outline: none;
    color: ${props => props.theme.colors.white};
  }

  &::placeholder {
    color: ${props => props.theme.colors.accent1};
  }
`;

export const FormButton = styled.button`
  padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(5)};

  border-radius: ${props => props.theme.spacing(1)};

  color: ${props => props.theme.colors.accent1};
  font-weight: 600;
  font-size: ${props => props.theme.fontSizes.large};
  letter-spacing: ${props => props.theme.spacing(0.25)};

  background-color: ${props => props.theme.colors.gray};

  &:hover {
    color: ${props => props.theme.colors.accent2};
  }
`;
