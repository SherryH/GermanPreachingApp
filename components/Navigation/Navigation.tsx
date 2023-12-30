import { useState } from 'react';
import { NavigationSide } from './NavigationSide';
import { NavigationTop } from './NavigationTop';
import { HamburgerIcon } from '../Icon/HamburgerIcon';

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
        <button onClick={toggleSide}>
          <HamburgerIcon />
        </button>
      </NavigationTop>
      <NavigationSide showMobileSideNav={showMobileSideNav} />
    </>
  );
};
