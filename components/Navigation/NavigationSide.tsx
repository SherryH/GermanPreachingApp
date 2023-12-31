import type { PropsWithChildren } from 'react';
import styles from './Navigation.module.css';
import styled from 'styled-components';
import { hideElement } from '../../styles/cssUtils';

type NavigationSideTypes = PropsWithChildren<{
  showMobileSideNav: boolean;
}>;

const SidebarWrapper = styled.aside<NavigationSideTypes>`
  position: absolute;
  background-color: var(--primaryColor);
  top: var(--navHeight);
  left: 0px;
  grid-area: sidebar;
  width: var(--sidebarWidth);
  transform: ${({ showMobileSideNav }) =>
    showMobileSideNav ? 'translateX(0)' : 'translateX(-110%)'};
  transition: all 0.3s linear;

  ${({ theme: { bp, minWidth } }) => `
    ${minWidth(bp.lg)} {
      position: sticky;
      top:var(--navHeight);
      transform: translateX(0);
    }
    `};
`;

const NavItem = styled.ul`
  // sticky needed here for the sticky sidebar to work
  position: sticky;
  top: var(--navHeight);

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
        <li>
          <a href={`${window.location.origin}/16`}>Lesson 16</a>
        </li>
      </NavItem>
    </SidebarWrapper>
  );
};
