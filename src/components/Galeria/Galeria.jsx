import React, { useEffect, useState } from 'react';
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
    7, 1, 2,
  ]);

  const rightFn2 = () => {
    const lastImage = visibleImages[2];
    const firstHiddenImage =
      images[
        (images.indexOf(lastImage) + 1) % images.length
      ];
    setVisibleImages([
      ...visibleImages.slice(1, 3),
      firstHiddenImage,
    ]);
  };

  const leftFn2 = () => {
    if (visibleImages[0] === 1) {
      setVisibleImages([7, 1, 2]);
      return;
    }
    const lastImage = visibleImages[0];
    const firstHiddenImage =
      images[
        (images.indexOf(lastImage) - 1) % images.length
      ];
    setVisibleImages([
      firstHiddenImage,
      ...visibleImages.slice(0, 2),
    ]);
  };

  return (
    <section className="xl:overflow-x-hidden">
      <h1
        className={`mx-auto max-w-[80%] pt-12 pb-20 text-center text-${
          idioma === 'ar' ? '6xl' : '6xl lg:8xl'
        } font-light tracking-wide  xl:max-w-[1120px]`}>
        <span className="text-two">{titulo.titulo1} </span>
        <span className="text-one">{titulo.titulo2}</span>
      </h1>

      <div className="xl:relative xl:h-[600px] ">
        <div className="mb-8 h-fit xl:absolute xl:left-1/2 xl:flex xl:h-[600px] xl:w-[2600px] xl:translate-x-[-50%] xl:justify-between">
          <picture>
            <source
              type="image/webp"
              srcSet={`/galeria/foto${visibleImages[0]}.webp`}
            />
            <img
              src={`/galeria/foto${visibleImages[0]}.jpg`}
              alt=""
              loading="lazy"
              className="hidden max-h-[600px] w-[90%] max-w-[800px] rounded-xl xl:block xl:w-full"
            />
          </picture>
          <picture>
            <source
              type="image/webp"
              srcSet={`/galeria/foto${visibleImages[1]}.webp`}
            />
            <img
              src={`/galeria/foto${visibleImages[1]}.jpg`}
              alt=""
              loading="lazy"
              className="mx-auto max-h-[600px] w-[90%] max-w-[800px] rounded-xl xl:block xl:w-full"
            />
          </picture>
          <picture>
            <source
              type="image/webp"
              srcSet={`/galeria/foto${visibleImages[2]}.webp`}
            />
            <img
              src={`/galeria/foto${visibleImages[2]}.jpg`}
              alt=""
              loading="lazy"
              className="hidden max-h-[600px] w-[90%] max-w-[800px]  rounded-xl xl:block xl:w-full"
            />
          </picture>
        </div>
      </div>

      <div className="relative mx-auto my-8 flex h-fit w-fit items-center gap-3">
        <button>
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className=" h-8 rounded-full bg-white text-one "
            onClick={leftFn2}
          />
        </button>
        <div
          className={`h-3 w-3 rounded-full ${
            visibleImages[1] === 1 ? 'bg-two' : 'bg-one'
          }`}></div>
        <div
          className={`h-3 w-3 rounded-full ${
            visibleImages[1] === 2 ? 'bg-two' : 'bg-one'
          }`}></div>
        <div
          className={`h-3 w-3 rounded-full ${
            visibleImages[1] === 3 ? 'bg-two' : 'bg-one'
          }`}></div>
        <div
          className={`h-3 w-3 rounded-full ${
            visibleImages[1] === 4 ? 'bg-two' : 'bg-one'
          }`}></div>
        <div
          className={`h-3 w-3 rounded-full ${
            visibleImages[1] === 5 ? 'bg-two' : 'bg-one'
          }`}></div>
        <div
          className={`h-3 w-3 rounded-full ${
            visibleImages[1] === 6 ? 'bg-two' : 'bg-one'
          }`}></div>
        <div
          className={`h-3 w-3 rounded-full ${
            visibleImages[1] === 7 ? 'bg-two' : 'bg-one'
          }`}></div>
        <button>
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
