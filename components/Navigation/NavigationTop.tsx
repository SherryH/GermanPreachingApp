import type { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { HamburgerIcon } from '../Icon/HamburgerIcon';

const StyledContainer = styled.div`
  grid-area: header;
  background: var(--secondaryColor);
  width: 100%;
  display: flex;
  align-items: center;
  height: var(--navHeight);
`;

const StyledHamburgerWrapper = styled.div`
  width: var(--sidebarWidth);
  display: flex;
  justify-content: center;

  /*Toggle hamburger*/
  visibility: var(--showHamburger);
`;

type NavigationTopTypes = PropsWithChildren<{}>;

export const NavigationTop = ({ children }: NavigationTopTypes) => (
  <StyledContainer>
    <StyledHamburgerWrapper>{children}</StyledHamburgerWrapper>
  </StyledContainer>
);
