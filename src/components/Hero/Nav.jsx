import React from 'react';

const Nav = ({ textos, idioma }) => {
  return (
    <nav className="absolute top-12 left-1/2 hidden translate-x-[-50%] xl:block">
      <ul
        className={`flex ${
          idioma === 'ar' && 'flex-row-reverse'
        } w-[700px] justify-between text-2xl text-white`}>
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

export default Nav;
