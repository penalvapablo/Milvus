import React from 'react';

const NavAbout = ({ textos, idioma }) => {
  return (
    <nav className="absolute top-12 left-1/2 hidden w-[37.5rem] translate-x-[-50%] md:block">
      <ul
        className={`flex ${
          idioma === 'ar' && 'flex-row-reverse'
        }  justify-between gap-10 text-lg text-two`}>
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
          {idioma === 'ar' && (
            <a
              href="/ar#destinos"
              className="capitalize">
              {textos.nav.destinos}
            </a>
          )}
          {idioma === 'es' && (
            <a
              href="/#destinos"
              className="capitalize">
              {textos.nav.destinos}
            </a>
          )}
          {idioma === 'en' && (
            <a
              href="/en#destinos"
              className="capitalize">
              {textos.nav.destinos}
            </a>
          )}
        </li>
        <li>
          {idioma === 'ar' && (
            <a
              href="/ar#servicios"
              className="capitalize">
              {textos.nav.servicios}
            </a>
          )}
          {idioma === 'es' && (
            <a
              href="/#servicios"
              className="capitalize">
              {textos.nav.servicios}
            </a>
          )}
          {idioma === 'en' && (
            <a
              href="/en#servicios"
              className="capitalize">
              {textos.nav.servicios}
            </a>
          )}
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

export default NavAbout;
