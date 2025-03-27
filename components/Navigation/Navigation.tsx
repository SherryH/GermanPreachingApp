import { useState } from 'react';
import { NavigationSide } from './NavigationSide';
import { NavigationTop } from './NavigationTop';
import { ClientOnly } from '../ClientOnly';

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
      <NavigationTop
        onClick={toggleSide}
        showMobileSideNav={showMobileSideNav}
      />
      <NavigationSide showMobileSideNav={showMobileSideNav} />
    </ClientOnly>
  );
};
