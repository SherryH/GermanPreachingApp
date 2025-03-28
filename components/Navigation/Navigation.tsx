import { useState } from 'react';
import { NavigationSide } from './NavigationSide';
import { NavigationTop } from './NavigationTop';
import { ClientOnly } from '../ClientOnly';
import { HamburgerMenu } from './HamburgerMenu';

export const Navigation = ({ onSidebarToggle, showMobileSideNav }) => {
  // const [showMobileSideNav, setShowMobileSideNav] = useState(true);
  // const toggleSide = () => {
  //   setShowMobileSideNav((isShown) => {
  //     const newState = !isShown;
  //     // Notify parent component about sidebar visibility change
  //     if (onSidebarToggle) {
  //       onSidebarToggle(newState);
  //     }
  //     return newState;
  //   });
  // };
  console.log({ showMobileSideNav });
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
