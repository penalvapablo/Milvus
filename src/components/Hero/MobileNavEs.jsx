import React from 'react';

const NavEs = ({ textos }) => {
  return (
    <nav className="absolute  left-1/2 top-[-225px] h-[225px]  w-[100%] translate-x-[-50%] bg-black min-tall-mobile:top-[-250px] min-tall-mobile:h-[250px] min-tall-mobile2:top-[-300px] min-tall-mobile2:h-[300px]">
      <ul
        className="flex h-[100%] flex-col items-center justify-around border-t-4 border-t-one text-center
      text-[1.30rem] text-white min-tall-mobile:text-2xl">
        <li>
          <a
            href="/"
            className="capitalize">
            {textos.nav.home}
          </a>
        </li>
        <li>
          <a
            href="#destinos"
            className="capitalize">
            {textos.nav.destinos}
          </a>
        </li>
        <li>
          <a
            href="#servicios"
            className="capitalize">
            {textos.nav.servicios}
          </a>
        </li>
        <li>
          <a
            href="#about"
            className="capitalize">
            {textos.nav.sobreNosotros}
          </a>
        </li>
        <li>
          <a
            href="#contacto"
            className="capitalize">
            {textos.nav.contacto}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavEs;
