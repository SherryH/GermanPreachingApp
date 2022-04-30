import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html {
  /* Navigation */
  --showHamburger: hidden;
  @media (max-width: 500px) {
    --showHamburger: visible;
  }
}
`;
