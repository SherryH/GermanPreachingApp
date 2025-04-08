import type { PropsWithChildren } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

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
    return `
    ${maxWidth(bp.md)} {
      transform: translateX(${showMobileSideNav ? '0' : '-100%'});
      transition: transform 300ms ;
    }
    `;
  }}
`;

const NavWrapper = styled.nav`
  position: sticky;
  top: 0px;
  left: 0px;
`;

const NavItem = styled.ul`
  list-style-type: none;
  padding: 24px;
  margin: 0;
  height: 100vh;
  font-size: 1.5rem;
  color: black;
  text-align: right;

  & * + * {
    padding-top: 12px;
  }

  &:first-child {
    padding-top: 16px;
  }
`;

export const NavigationSide = ({ showMobileSideNav }: NavigationSideTypes) => {
  return (
    <SidebarWrapper showMobileSideNav={showMobileSideNav}>
      <NavWrapper>
        <NavItem>
          <li>
            <Link href="10"> Lesson 10</Link>
          </li>
          <li>
            <Link href="14"> Lesson 14</Link>
          </li>
          <li>
            <Link href="15"> Lesson 15</Link>
          </li>
        </NavItem>
      </NavWrapper>
    </SidebarWrapper>
  );
};
