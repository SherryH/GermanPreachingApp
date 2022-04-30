import { useState } from 'react';
import { NavigationSide } from './NavigationSide';
import { NavigationTop } from './NavigationTop';

export const Navigation = () => {
  const [showMobileSideNav, setShowMobileSideNav] = useState(false);
  const toggleSide = () => {
    setShowMobileSideNav((isShown) => {
      return !isShown;
    });
  };
  return (
    <>
      <NavigationTop onClick={toggleSide} />
      <NavigationSide showMobileSideNav={showMobileSideNav} />
    </>
  );
};
