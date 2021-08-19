import { Autocomplete } from '@material-ui/lab';
import styled, { css } from 'styled-components';

export const rootClassName = 'dot-autocomplete';

export const StyledAutocomplete = styled(Autocomplete)`
  ${({ theme }) => css`
    &.${rootClassName} {
    }
  `}
`;
