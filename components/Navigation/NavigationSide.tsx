import type { PropsWithChildren } from 'react';
import styles from './Navigation.module.css';
import styled from 'styled-components';

type NavigationSideTypes = PropsWithChildren<{ showNavigationSide: boolean }>;

const SidebarWrapper = styled.aside`
  grid-area: sidebar;
  position: relative;
  background-color: var(--primaryColor);
`;

const NavWrapper = styled.nav`
  position: absolute;
  top: 0px;
  left: 0px;
`;

const NavItem = styled.ul`
  width: var(--sidebarWidth);
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

export const NavigationSide = ({ showNavigationSide }: NavigationSideTypes) => {
  if (typeof window === 'undefined') {
    return null;
  }

  return (
    <SidebarWrapper>
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
