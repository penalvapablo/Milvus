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
      setVisibleImages([6, 7, 1, 2, 3]);
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
  console.log(visibleImages);

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
      return 'hidden xl:block xl:absolute xl:right-1/2 xl:translate-x-[1250px] transform duration-500';
    }
    if (visibleImages[4] === n) {
      return 'hidden xl:block xl:absolute xl:right-1/2 xl:translate-x-[2100px] transform duration-500';
    }
    return 'hidden';
  }

  function dotPositionFn(n) {
    return visibleImages[2] === n ? 'bg-two' : 'bg-one';
  }

  return (
    <section className="xl:overflow-x-hidden">
      <h1
        className={`mx-auto max-w-[80%] pt-12 pb-20 text-center text-${
          idioma === 'ar' ? '6xl' : '6xl lg:8xl'
        } font-light tracking-wide  xl:max-w-[1120px]`}>
        <span className="text-two">{titulo.titulo1} </span>
        <span className="text-one">{titulo.titulo2}</span>
      </h1>
      <div className="">
        <div className="mb-8 h-fit w-full   xl:relative xl:h-[600px]">
          {images.map((img) => {
            return (
              <picture>
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

          {/* <picture>
              <source
                type="image/webp"
                srcSet={`/galeria/foto1.webp`}
              />
              <img
                src={`/galeria/foto1.jpg`}
                alt=""
                className={` max-h-[600px] w-[90%] max-w-[800px]  rounded-xl  xl:w-full ${visibleImageFn(
                  1
                )}`}
              />
            </picture>
            <picture>
              <source
                type="image/webp"
                srcSet={`/galeria/foto2.webp`}
              />
              <img
                src={`/galeria/foto2.jpg`}
                alt=""
                className={` max-h-[600px] w-[90%] max-w-[800px]  rounded-xl  xl:w-full ${visibleImageFn(
                  2
                )}`}
              />
            </picture>
            <picture>
              <source
                type="image/webp"
                srcSet={`/galeria/foto3.webp`}
              />
              <img
                src={`/galeria/foto3.jpg`}
                alt=""
                className={` max-h-[600px] w-[90%] max-w-[800px]  rounded-xl  xl:w-full ${visibleImageFn(
                  3
                )}`}
              />
            </picture>
            <picture>
              <source
                type="image/webp"
                srcSet={`/galeria/foto4.webp`}
              />
              <img
                src={`/galeria/foto4.jpg`}
                alt=""
                className={` max-h-[600px] w-[90%] max-w-[800px]  rounded-xl  xl:w-full ${visibleImageFn(
                  4
                )}`}
              />
            </picture>
            <picture>
              <source
                type="image/webp"
                srcSet={`/galeria/foto5.webp`}
              />
              <img
                src={`/galeria/foto5.jpg`}
                alt=""
                className={` max-h-[600px] w-[90%] max-w-[800px]  rounded-xl  xl:w-full ${visibleImageFn(
                  5
                )}`}
              />
            </picture>
            <picture>
              <source
                type="image/webp"
                srcSet={`/galeria/foto6.webp`}
              />
              <img
                src={`/galeria/foto6.jpg`}
                alt=""
                className={` max-h-[600px] w-[90%] max-w-[800px]  rounded-xl  xl:w-full ${visibleImageFn(
                  6
                )}`}
              />
            </picture>
            <picture>
              <source
                type="image/webp"
                srcSet={`/galeria/foto7.webp`}
              />
              <img
                src={`/galeria/foto7.jpg`}
                alt=""
                className={` max-h-[600px] w-[90%] max-w-[800px]  rounded-xl  xl:w-full ${visibleImageFn(
                  7
                )}`}
              />
            </picture> */}
        </div>
      </div>

      {/* CONTROL DE FOTOS */}
      <div className="relative mx-auto my-8 flex h-fit w-fit items-center gap-3">
        <button>
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
