import React from 'react';

const NavEs = () => {
  return (
    <nav className="absolute bottom-[50px] left-1/2 h-[225px]  w-[100%] translate-x-[-50%] bg-black min-tall-mobile:h-[250px] min-tall-mobile2:h-[300px]">
      <ul
        className="flex h-[100%] flex-col items-center justify-around border-t-4 border-t-one text-center
      text-[1.30rem] text-white min-tall-mobile:text-2xl">
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
