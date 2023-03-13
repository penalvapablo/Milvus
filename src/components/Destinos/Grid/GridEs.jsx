import React, { useEffect, useState } from 'react';
import Card from '../Card';
import descripciones from '../descripciones.json';

const GridEs = () => {
  const [modal, setModal] = useState(false);

  const modalFn = () => {
    setModal(!modal);
    if (typeof window !== 'undefined') {
      !modal
        ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = 'auto');
    }
  };

  const { destinos } = descripciones;

  console.log(destinos);

  return (
    <div className=" mx-auto grid  grid-cols-1 justify-items-center gap-6 md:w-[644px] md:grid-cols-2 xl:w-[978px] xl:grid-cols-3 2xl:w-[1312px] 2xl:grid-cols-4">
      <Card
        modal={modal}
        modalFn={modalFn}
        destino="islandia"
        descripcion={'descripciones'}></Card>
      <div className="h-[150px] w-[310px] bg-black xl:h-[310px]"></div>
      <div className="h-[150px] w-[310px] bg-black xl:h-[310px]"></div>
      <div className="h-[150px] w-[310px] bg-black xl:h-[310px]"></div>
      <div className="h-[150px] w-[310px] bg-black xl:h-[310px]"></div>
      <div className="h-[150px] w-[310px] bg-black xl:h-[310px]"></div>
      <div className="h-[150px] w-[310px] bg-black xl:h-[310px]"></div>
      <div className="h-[150px] w-[310px] bg-black xl:h-[310px]"></div>
      <div className="h-[150px] w-[310px] bg-black xl:h-[310px]"></div>
      <div className="h-[150px] w-[310px] bg-black xl:h-[310px]"></div>
      <div className="h-[150px] w-[310px] bg-black xl:h-[310px]"></div>
      <div className="h-[150px] w-[310px] bg-black xl:h-[310px]"></div>
      <div className="h-[150px] w-[310px] bg-black xl:h-[310px]"></div>
    </div>
  );
};

export default GridEs;
