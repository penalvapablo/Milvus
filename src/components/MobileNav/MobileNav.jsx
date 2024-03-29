import React, { useEffect, useState } from 'react';

const MobileNav = ({ textos, idioma, mobileNavFn }) => {
  const [path, setPath] = useState(undefined);

  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  const isInHomepage =
    path === '/' || path === '/en' || path === '/ar';

  return (
    <nav
      className={`absolute  left-1/2 top-[-225px] h-[225px]  w-[100%] translate-x-[-50%] bg-black min-tall-mobile:top-[-250px] min-tall-mobile:h-[250px] min-tall-mobile2:top-[-300px] min-tall-mobile2:h-[300px]`}>
      <ul
        className="flex h-[100%] flex-col items-center justify-around border-t-4 border-t-one text-center
      text-lg text-white min-tall-mobile:text-2xl">
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
          {isInHomepage && (
            <a
              href="#destinos"
              className="capitalize"
              onClick={mobileNavFn}>
              {textos.nav.destinos}
            </a>
          )}

          {path === '/ar/about' && (
            <a
              href="/ar#destinos"
              className="capitalize"
              onClick={mobileNavFn}>
              {textos.nav.destinos}
            </a>
          )}

          {path === '/en/about' && (
            <a
              href="/en#destinos"
              className="capitalize"
              onClick={mobileNavFn}>
              {textos.nav.destinos}
            </a>
          )}
          {path === '/about' && (
            <a
              href="/#destinos"
              className="capitalize"
              onClick={mobileNavFn}>
              {textos.nav.destinos}
            </a>
          )}
        </li>

        <li>
          {isInHomepage && (
            <a
              href="#servicios"
              className="capitalize"
              onClick={mobileNavFn}>
              {textos.nav.servicios}
            </a>
          )}

          {path === '/ar/about' && (
            <a
              href="/ar#servicios"
              className="capitalize"
              onClick={mobileNavFn}>
              {textos.nav.servicios}
            </a>
          )}

          {path === '/en/about' && (
            <a
              href="/en#servicios"
              className="capitalize"
              onClick={mobileNavFn}>
              {textos.nav.servicios}
            </a>
          )}
          {path === '/about' && (
            <a
              href="/#servicios"
              className="capitalize"
              onClick={mobileNavFn}>
              {textos.nav.servicios}
            </a>
          )}
        </li>

        {/* <li>
          <a
            href="#servicios"
            className="capitalize"
            onClick={mobileNavFn}>
            {textos.nav.servicios}
          </a>
        </li> */}
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
            className="capitalize"
            onClick={mobileNavFn}>
            {textos.nav.contacto}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNav;
