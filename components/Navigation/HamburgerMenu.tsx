import styled from 'styled-components';

import { HamburgerIcon } from '../Icon/HamburgerIcon';
import { CrossIcon } from '../Icon/CrossIcon';
import IconButton from '../Icon/IconButton';
import { PropsWithChildren } from 'react';

const StyledHamburgerWrapper = styled.div`
  width: var(--sidebarWidth);
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 2;
  /*Toggle hamburger*/
  visibility: var(--showHamburger);
`;
type HamburgerMenuTypes = PropsWithChildren<{
  onClick: () => void;
  showMobileSideNav: boolean;
}>;

const StyledInnerWrapper = styled.div`
  position: fixed;
  top: 15px;
  left: 24px;
`;

export const HamburgerMenu = ({
  onClick,
  showMobileSideNav,
}: HamburgerMenuTypes) => (
  <StyledHamburgerWrapper>
    <StyledInnerWrapper>
      {showMobileSideNav ? (
        <IconButton onClick={onClick}>
          <CrossIcon />
        </IconButton>
      ) : (
        <IconButton onClick={onClick}>
          <HamburgerIcon />
        </IconButton>
      )}
    </StyledInnerWrapper>
  </StyledHamburgerWrapper>
);
