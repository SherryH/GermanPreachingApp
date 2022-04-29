import type { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { HamburgerIcon } from '../Icon/HamburgerIcon';

const StyledContainer = styled.div`
  grid-area: header;
  background: var(--secondaryColor);
  width: 100%;
  display: flex;
  align-items: center;
`;

const StyledHamburgerWrapper = styled.div`
  width: var(--sidebarWidth);
  display: flex;
  justify-content: center;

  /*Toggle hamburger*/
  visibility: var(--showHamburger);
`;

type NavigationTopTypes = PropsWithChildren<{ onClick: () => void }>;

export const NavigationTop = ({ onClick }: NavigationTopTypes) => (
  <StyledContainer onClick={onClick}>
    <StyledHamburgerWrapper>
      <HamburgerIcon />
    </StyledHamburgerWrapper>
  </StyledContainer>
);
