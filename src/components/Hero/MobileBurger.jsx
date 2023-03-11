import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavEs from './Nav/NavEs';
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
    <>
      {mobileNav && <NavEs />}
      <div className="fixed bottom-0 flex h-[50px] w-screen  justify-center border-t-4 border-t-one bg-black">
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
    </>
  );
};

export default MobileBurger;
