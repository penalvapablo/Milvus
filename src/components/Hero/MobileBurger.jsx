import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import MobileNavEs from './MobileNav/MobileNavEs';
import { useState } from 'react';

const MobileBurger = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const mobileNavFn = () => {
    console.log('object');
    setMobileNav(!mobileNav);
  };
  // Preven scrolling when mobile nav activated
  if (typeof window !== 'undefined') {
    mobileNav
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }
  return (
    <div className="fixed bottom-0 z-10 xl:hidden">
      {mobileNav && <MobileNavEs />}
      <div className="flex h-[50px] w-screen  justify-center border-t-4 border-t-one bg-black">
        <button
          id="burger menu"
          aria-label="burger menu"
          onClick={mobileNavFn}>
          <FontAwesomeIcon
            icon={faBars}
            className=" h-[35px]  text-one"
          />
        </button>
      </div>
    </div>
  );
};

export default MobileBurger;
