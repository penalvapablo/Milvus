import React, { useState } from 'react';
import galeriaTextos from './galeria.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleChevronRight,
  faCircleChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

const Galeria = ({ idioma }) => {
  const titulo = galeriaTextos[idioma];
  // const [active, setActive] = useState(1);
  // const [left, setLeft] = useState(7);
  // const [right, setRight] = useState(2);
  const images = [1, 2, 3, 4, 5, 6, 7];
  const [visibleImages, setVisibleImages] = useState([
    6, 7, 1, 2, 3,
  ]);
  console.log(visibleImages[3]);

  const leftFn2 = () => {
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

  const rightFn2 = () => {
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

  // const leftFn = () => {
  //   if (active === 1) {
  //     setActive(7);
  //     setLeft(6);
  //     setRight(1);
  //     return;
  //   }
  //   if (right === 1) {
  //     setRight(7);
  //     setActive(6);
  //     setLeft(5);
  //     return;
  //   }
  //   if (left === 1) {
  //     setRight(2);
  //     setActive(1);
  //     setLeft(7);
  //     return;
  //   }
  //   setActive(active - 1);
  //   setLeft(left - 1);
  //   setRight(right - 1);
  // };
  // const rightFn = () => {
  //   if (left === 7) {
  //     setActive(2);
  //     setLeft(1);
  //     setRight(3);
  //     return;
  //   }
  //   if (right === 7) {
  //     setRight(1);
  //     setActive(7);
  //     setLeft(6);
  //     return;
  //   }
  //   if (active === 7) {
  //     setRight(2);
  //     setActive(1);
  //     setLeft(7);
  //     return;
  //   }
  //   setActive(active + 1);
  //   setLeft(left + 1);
  //   setRight(right + 1);
  // };

  // // console.log({ left });
  // // console.log({ active });
  // // console.log({ right });

  return (
    <section>
      <h1
        className={`mx-auto max-w-[80%] pt-12 pb-20 text-center text-${
          idioma === 'ar' ? '6xl' : '6xl lg:8xl'
        } font-light tracking-wide  xl:max-w-[1120px]`}>
        <span className="text-two">{titulo.titulo1} </span>
        <span className="text-one">{titulo.titulo2}</span>
      </h1>

      <div className="relative w-full">
        <div className="relative mb-8 flex">
          <img
            src={`/src/assets/galeria/foto${visibleImages[0]}.jpg`}
            alt=""
            loading="lazy"
            className="absolute top-0 hidden w-[90%]  rounded-xl"
          />
          <img
            src={`/src/assets/galeria/foto${visibleImages[1]}.jpg`}
            alt=""
            loading="lazy"
            className="absolute top-0 hidden w-[90%] rounded-xl "
          />
          <img
            src={`/src/assets/galeria/foto${visibleImages[2]}.jpg`}
            alt=""
            loading="lazy"
            className="absolute top-0 left-1/2 w-[90%] translate-x-[-50%] rounded-xl"
          />
          <img
            src={`/src/assets/galeria/foto${visibleImages[3]}.jpg`}
            alt=""
            loading="lazy"
            className="absolute top-0 hidden w-[90%]  rounded-xl"
          />
          <img
            src={`/src/assets/galeria/foto${visibleImages[4]}.jpg`}
            alt=""
            loading="lazy"
            className="absolute top-0 hidden w-[90%] rounded-xl "
          />
        </div>

        <div className="relative mx-auto mt-6 flex h-fit w-fit items-center gap-3">
          <button>
            <FontAwesomeIcon
              icon={faCircleChevronLeft}
              className=" h-8 rounded-full bg-white text-one "
              onClick={leftFn2}
            />
          </button>
          <div
            className={`h-3 w-3 rounded-full ${
              visibleImages[2] === 1 ? 'bg-two' : 'bg-one'
            }`}></div>
          <div
            className={`h-3 w-3 rounded-full ${
              visibleImages[2] === 7 ? 'bg-two' : 'bg-one'
            }`}></div>
          <div
            className={`h-3 w-3 rounded-full ${
              visibleImages[2] === 6 ? 'bg-two' : 'bg-one'
            }`}></div>
          <div
            className={`h-3 w-3 rounded-full ${
              visibleImages[2] === 5 ? 'bg-two' : 'bg-one'
            }`}></div>
          <div
            className={`h-3 w-3 rounded-full ${
              visibleImages[2] === 4 ? 'bg-two' : 'bg-one'
            }`}></div>
          <div
            className={`h-3 w-3 rounded-full ${
              visibleImages[2] === 3 ? 'bg-two' : 'bg-one'
            }`}></div>
          <div
            className={`h-3 w-3 rounded-full ${
              visibleImages[2] === 2 ? 'bg-two' : 'bg-one'
            }`}></div>
          <button>
            <FontAwesomeIcon
              icon={faCircleChevronRight}
              className="h-8 rounded-full bg-white text-one "
              onClick={rightFn2}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Galeria;
