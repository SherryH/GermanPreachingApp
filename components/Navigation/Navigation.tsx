import { useState } from 'react';
import { NavigationSide } from './NavigationSide';
import { NavigationTop } from './NavigationTop';
import { ClientOnly } from '../ClientOnly';
import { HamburgerMenu } from './HamburgerMenu';

export const Navigation = ({ onSidebarToggle, showMobileSideNav }) => {
  return (
    <ClientOnly>
      <NavigationTop />
      <NavigationSide showMobileSideNav={showMobileSideNav} />
      <HamburgerMenu
        onClick={onSidebarToggle}
        showMobileSideNav={showMobileSideNav}
      />
    </ClientOnly>
  );
};
