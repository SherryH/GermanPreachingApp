import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html {
  /* Navigation */
  --showHamburger: hidden;
  ${({ theme: { bp, maxWidth } }) => `
    ${maxWidth(bp.lg)}{
      --showHamburger: visible;  
    }
  `} 
}
`;
