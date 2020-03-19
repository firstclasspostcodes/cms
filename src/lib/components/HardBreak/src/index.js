import styled from 'styled-components';
import breakpoint from 'styled-components-breakpoint';

export const Component = styled.br`
  ${breakpoint('xs')`
    display: none;
  `}

  ${breakpoint('md')`
    display: inline;
  `}
`;
