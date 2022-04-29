import { useState } from 'react';
import { NavigationSide } from './NavigationSide';
import { NavigationTop } from './NavigationTop';

export const Navigation = () => {
  const [showNavigationSide, setShowNavigationSide] = useState(true);
  const toggleSide = () => {
    console.log('click');

    setShowNavigationSide((isShown) => !isShown);
  };
  return (
    <>
      <NavigationTop onClick={toggleSide} />
      <NavigationSide showNavigationSide />
    </>
  );
};
