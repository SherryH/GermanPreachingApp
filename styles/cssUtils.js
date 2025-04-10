import { css } from 'styled-components';

// hides element but content still visible to screenreaders
export const hideElement = css`
  clip: rect(0, 0, 0, 0);
  position: absolute;
  width: 0;
  height: 0;
  overflow: hidden;
  display: none;
`;
