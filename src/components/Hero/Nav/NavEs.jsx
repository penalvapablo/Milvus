import React from 'react';

const NavEs = () => {
  return (
    <nav className="absolute top-12 left-1/2 hidden translate-x-[-50%] xl:block">
      <ul className="flex w-[700px] justify-between text-2xl text-white">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#destinos">Destinos</a>
        </li>
        <li>
          <a href="#servicios">Servicios</a>
        </li>
        <li>
          <a href="#about">Sobre Nosotros</a>
        </li>
        <li>
          <a href="#contacto">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavEs;
