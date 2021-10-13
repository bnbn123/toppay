import { useEffect, useState } from 'react';

export const WINDOWS_SIZE = {
  DESKTOP: 1200,
  TABLET: 768,
  MOBILE: 540,
};

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowSize({
          width: window.screen.width,
          height: window.screen.height,
        });
      };

      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  const isMobile = windowSize.width <= WINDOWS_SIZE.MOBILE;
  const isTablet = !isMobile && windowSize.width <= WINDOWS_SIZE.TABLET;
  return { windowSize, isMobile, isTablet };
}
