import styled, { css } from 'styled-components';

export const StyledDynamicFormStory = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacing(2)};

    .form-section-component {
      display: flex;
      gap: ${theme.spacing(0.5)};
    }

    .terms {
      display: flex;
      align-items: center;
      gap: ${theme.spacing(2)};

      .dot-icon {
        color: ${theme.palette.primary[500]};
      }
    }
  `}
`;
