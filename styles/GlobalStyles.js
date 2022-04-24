import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html {
  /* Navigation */
  --showHamburger: visible;
  @media (max-width: 500px) {
    --showHamburger: hidden;
  }
}
`;
