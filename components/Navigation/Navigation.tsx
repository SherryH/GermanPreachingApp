import { useState } from 'react';
import { NavigationSide } from './NavigationSide';
import { NavigationTop } from './NavigationTop';
import { ClientOnly } from '../ClientOnly';
import { HamburgerMenu } from './HamburgerMenu';

export const Navigation = () => {
  const [showMobileSideNav, setShowMobileSideNav] = useState(true);
  const toggleSide = () => {
    setShowMobileSideNav((isShown) => {
      return !isShown;
    });
  };
  console.log({ showMobileSideNav });
  return (
    <ClientOnly>
      <NavigationTop />
      <NavigationSide showMobileSideNav={showMobileSideNav} />
      <HamburgerMenu
        onClick={toggleSide}
        showMobileSideNav={showMobileSideNav}
      />
    </ClientOnly>
  );
};
