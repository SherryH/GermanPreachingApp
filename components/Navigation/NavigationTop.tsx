import type { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { HamburgerIcon } from '../Icon/HamburgerIcon';
import { CrossIcon } from '../Icon/CrossIcon';
import IconButton from '../Icon/IconButton';

const StyledContainer = styled.div`
  grid-column: header-left / header-right;
  background: var(--secondaryColor);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LektionHeader = styled.div`
  padding-right: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: black;
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
}: NavigationTopTypes) => {
  const lesson = window.location.pathname.replace('/', '');
  return (
    <StyledContainer onClick={onClick}>
      {console.log(window.location.pathname)}
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
      <LektionHeader>Lektion {lesson}</LektionHeader>
    </StyledContainer>
  );
};
