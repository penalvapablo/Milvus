import React from 'react';

const NavEs = () => {
  return (
    <nav className="absolute top-12 left-1/2 hidden translate-x-[-50%] xl:block">
      <ul className="flex w-[700px] justify-between text-2xl text-white">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>Destinos</a>
        </li>
        <li>
          <a>Servicios</a>
        </li>
        <li>
          <a>Sobre Nosotros</a>
        </li>
        <li>
          <a>Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavEs;
