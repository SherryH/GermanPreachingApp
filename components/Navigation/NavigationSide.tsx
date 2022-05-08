import type { PropsWithChildren } from 'react';
import styles from './Navigation.module.css';
import styled from 'styled-components';
import { hideElement } from '../../styles/cssUtils';

type NavigationSideTypes = PropsWithChildren<{
  showMobileSideNav: boolean;
}>;

const SidebarWrapper = styled.aside<NavigationSideTypes>`
  grid-area: sidebar;
  position: relative;
  background-color: var(--primaryColor);
  width: var(--sidebarWidth);

  ${({ showMobileSideNav, theme: { bp, maxWidth } }) => {
    // hide sidebar when window resizes to be small
    // toggle sidebar on click hamburger menu
    console.log({ showMobileSideNav });
    return `
    ${maxWidth(bp.md)} {
      ${hideElement}
      ${showMobileSideNav ? `position: relative` : hideElement}
    }
    `;
  }}
`;

const NavWrapper = styled.nav`
  position: absolute;
  top: 0px;
  left: 0px;
`;

const NavItem = styled.ul`
  list-style-type: none;
  padding: 24px;
  margin: 0;
  height: 100vh;
  font-size: 2.5rem;
  color: black;

  & * + * {
    padding-top: 12px;
  }

  &:first-child {
    padding-top: 16px;
  }
`;

export const NavigationSide = ({ showMobileSideNav }: NavigationSideTypes) => {
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <SidebarWrapper showMobileSideNav={showMobileSideNav}>
      <NavWrapper>
        <NavItem>
          <li>
            <a href={`${window.location.origin}/4`}>Lesson 4 (broken)</a>
          </li>
          <li>
            <a href={`${window.location.origin}/10`}>Lesson 10</a>
          </li>
          <li>
            <a href={`${window.location.origin}/14`}>Lesson 14</a>
          </li>
          <li>
            <a href={`${window.location.origin}/15`}>Lesson 15</a>
          </li>
        </NavItem>
      </NavWrapper>
    </SidebarWrapper>
  );
};
