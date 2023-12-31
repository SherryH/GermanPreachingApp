import { useState } from 'react';
import { NavigationSide } from './NavigationSide';
import { NavigationTop } from './NavigationTop';
import { HamburgerButton } from './HamburgerButton';

export const Navigation = () => {
  const [showMobileSideNav, setShowMobileSideNav] = useState(false);
  const toggleSide = () => {
    setShowMobileSideNav((isShown) => {
      return !isShown;
    });
  };
  return (
    <>
      <NavigationTop>
        <HamburgerButton onClick={toggleSide} />
      </NavigationTop>
      <NavigationSide showMobileSideNav={showMobileSideNav} />
    </>
  );
};
