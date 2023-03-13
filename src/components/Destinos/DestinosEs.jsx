import React from 'react';
import GridEs from './Grid/GridEs';

const DestinosEs = () => {
  return (
    <section
      id="destinos"
      className="bg-gray">
      <h2
        className="pt-12 pb-20 text-center text-5xl
      font-light tracking-wide text-two">
        Nuestros viajes favoritos
      </h2>

      <GridEs />

      <p
        className="mx-auto w-[90%] pt-12 text-center text-2xl font-bold text-two
      ">
        Si no ves el destino que buscas, <br /> pregunta y
        deja que te sorprendamos.
      </p>
      <p
        className=" mx-auto w-[90%] pt-12 pb-12 text-center text-5xl font-semibold text-one
      ">
        Podemos hacer cualquier combinación a medida!
      </p>
    </section>
  );
};

export default DestinosEs;
