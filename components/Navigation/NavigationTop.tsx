import type { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { HamburgerIcon } from '../Icon/HamburgerIcon';
import { CrossIcon } from '../Icon/CrossIcon';
import IconButton from '../Icon/IconButton';

const StyledContainer = styled.div`
  background: var(--secondaryColor);
  width: 100%;
  display: flex;
  align-items: center;
`;

const StyledHamburgerWrapper = styled.div`
  width: var(--sidebarWidth);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /*Toggle hamburger*/
  visibility: var(--showHamburger);
`;

type NavigationTopTypes = PropsWithChildren<{
  onClick: () => void;
  showMobileSideNav: boolean;
}>;

export const NavigationTop = ({
  onClick,
  showMobileSideNav,
}: NavigationTopTypes) => (
  <StyledContainer onClick={onClick}>
    <StyledHamburgerWrapper>
      {showMobileSideNav ? (
        <IconButton>
          <CrossIcon />
        </IconButton>
      ) : (
        <IconButton>
          <HamburgerIcon />
        </IconButton>
      )}
    </StyledHamburgerWrapper>
  </StyledContainer>
);
