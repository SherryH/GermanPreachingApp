import { useState } from 'react';
import { NavigationSide } from './NavigationSide';
import { NavigationTop } from './NavigationTop';

export const Navigation = () => {
  if (typeof window === 'undefined') {
    return null;
  }
  const [showMobileSideNav, setShowMobileSideNav] = useState(true);
  const toggleSide = () => {
    setShowMobileSideNav((isShown) => {
      return !isShown;
    });
  };
  console.log({ showMobileSideNav });
  return (
    <>
      <NavigationTop
        onClick={toggleSide}
        showMobileSideNav={showMobileSideNav}
      />
      <NavigationSide showMobileSideNav={showMobileSideNav} />
    </>
  );
};
