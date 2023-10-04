import React from 'react';

const Nav = ({ textos, idioma }) => {
  return (
    <nav className="absolute top-20 left-1/2 hidden w-[37.5rem] translate-x-[-50%] md:block  xl:top-[3.1rem]">
      <ul
        className={`flex ${
          idioma === 'ar' && 'flex-row-reverse'
        }  justify-between text-lg text-white`}>
        <li>
          {idioma === 'ar' && (
            <a
              href="/ar"
              className="capitalize">
              {textos.nav.home}
            </a>
          )}
          {idioma === 'es' && (
            <a
              href="/"
              className="capitalize">
              {textos.nav.home}
            </a>
          )}
          {idioma === 'en' && (
            <a
              href="/en"
              className="capitalize">
              {textos.nav.home}
            </a>
          )}
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
          {idioma === 'ar' && (
            <a
              href="/ar/about"
              className="capitalize">
              {textos.nav.sobreNosotros}
            </a>
          )}
          {idioma === 'es' && (
            <a
              href="/about"
              className="capitalize">
              {textos.nav.sobreNosotros}
            </a>
          )}
          {idioma === 'en' && (
            <a
              href="/en/about"
              className="capitalize">
              {textos.nav.sobreNosotros}
            </a>
          )}
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
