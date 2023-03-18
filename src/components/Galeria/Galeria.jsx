import React, { useState } from 'react';
import galeriaTextos from './galeria.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronRight,
  faCircleChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

const Galeria = ({ idioma }) => {
  const titulo = galeriaTextos[idioma];

  const images = [1, 2, 3, 4, 5, 6, 7];
  const [visibleImages, setVisibleImages] = useState([
    6, 7, 1, 2, 3,
  ]);

  const rightFn2 = () => {
    const lastImage = visibleImages[4];
    const firstHiddenImage =
      images[
        (images.indexOf(lastImage) + 1) % images.length
      ];
    setVisibleImages([
      ...visibleImages.slice(1, 5),
      firstHiddenImage,
    ]);
  };

  const leftFn2 = () => {
    if (visibleImages[0] === 1) {
      setVisibleImages([7, 1, 2, 3, 4]);
      return;
    }
    const lastImage = visibleImages[0];
    const firstHiddenImage =
      images[
        (images.indexOf(lastImage) - 1) % images.length
      ];
    setVisibleImages([
      firstHiddenImage,
      ...visibleImages.slice(0, 4),
    ]);
  };

  function visibleImageFn(n) {
    if (visibleImages[2] === n) {
      return 'w-[90%] mx-auto max-w-[800px] xl:absolute xl:left-1/2 xl:translate-x-[-400px] transform duration-500';
    }
    if (visibleImages[1] === n) {
      return 'hidden xl:block xl:absolute xl:left-1/2 xl:translate-x-[-1250px] transform duration-500';
    }
    if (visibleImages[0] === n) {
      return 'hidden xl:block xl:absolute xl:left-1/2 xl:translate-x-[-2100px] transform duration-500';
    }
    if (visibleImages[3] === n) {
      return 'hidden xl:block xl:absolute xl:left-1/2 xl:translate-x-[450px] transform duration-500';
    }
    if (visibleImages[4] === n) {
      return 'hidden xl:block xl:absolute xl:left-1/2 xl:translate-x-[1300px] transform duration-500';
    }
    return 'hidden';
  }

  function dotPositionFn(n) {
    return visibleImages[2] === n ? 'bg-two' : 'bg-one';
  }

  return (
    <section className="bg-gray xl:overflow-x-hidden">
      <h2
        className={`mx-auto max-w-[90%] pt-12 pb-20 text-center text-6xl font-light leading-[4rem] tracking-wide  md:text-7xl lg:text-8xl xl:max-w-[1120px]  xl:text-8xl`}>
        <span className="text-two">{titulo.titulo1} </span>
        <span className="text-one">{titulo.titulo2}</span>
      </h2>

      <div className="mb-8 h-fit w-full   xl:relative xl:h-[600px]">
        {images.map((img) => {
          return (
            <picture key={img}>
              <source
                type="image/webp"
                srcSet={`/galeria/foto${img}.webp`}
              />
              <img
                src={`/galeria/foto1.jpg`}
                alt=""
                className={`max-h-[600px] w-[90%] max-w-[800px] rounded-xl xl:w-full ${visibleImageFn(
                  img
                )}`}
              />
            </picture>
          );
        })}
      </div>

      {/* CONTROL DE FOTOS */}
      <div className="relative mx-auto flex h-fit w-fit items-center gap-3 pt-8 pb-16">
        <button
          id="galery-left"
          aria-label="galery-left">
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className=" h-8 rounded-full bg-white text-one "
            onClick={leftFn2}
          />
        </button>
        {images.map((n) => {
          return (
            <div
              key={n}
              className={`h-3 w-3 rounded-full ${dotPositionFn(
                n
              )}`}></div>
          );
        })}
        <button
          id="galery-right"
          aria-label="galery-right">
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className="h-8 rounded-full bg-white text-one "
            onClick={rightFn2}
          />
        </button>
      </div>
    </section>
  );
};

export default Galeria;
