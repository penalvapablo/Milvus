import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const Card = ({
  destino,
  titulo,
  descripcion,
  id,
  cta,
  idioma,
}) => {
  const [modal, setModal] = useState(false);
  const [mobileColor, setMobileColor] = useState('one');
  const [desktopColor, setDesktopColor] = useState('one');

  const white = [2, 5, 8, 11];
  const blue = [3, 6, 9, 12];

  useEffect(() => {
    if (id % 2 === 0) {
      setMobileColor('white');
    }
    white.includes(id) && setDesktopColor('white');
    blue.includes(id) && setDesktopColor('two');
  }, []);

  const modalFn = () => {
    setModal(!modal);
    if (typeof window !== 'undefined') {
      !modal
        ? (document.body.style.overflow = 'hidden')
        : (document.body.style.overflow = 'auto');
    }
  };

  return (
    <>
      {modal && (
        <>
          <div
            onClick={modalFn}
            className="fixed left-1/2 top-1/2 z-10 h-screen w-screen translate-x-[-50%] translate-y-[-50%]  bg-black/50"></div>
          <div className="fixed left-1/2  top-1/2 z-50 h-fit max-h-[600px]  w-[95%] max-w-[360px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-two xl:h-[800px] xl:w-[800px] xl:max-w-none min-tall-mobile:max-h-[800px]">
            <button
              onClick={modalFn}
              id="close-modal"
              aria-label="close-modal">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="absolute right-[-12px] top-[-12px] z-10 h-8 rounded-full bg-two text-one "
              />
            </button>
            <picture>
              <source
                type="image/webp"
                srcSet={`/destinos/${destino}-modal.webp`}
              />
              <img
                src={`/destinos/${destino}-modal.jpg`}
                alt={destino}
                loading="lazy"
                className="absolute top-0 -z-10 hidden rounded-xl xl:block"
              />
            </picture>
            <h3 className="mx-auto max-w-[90%] text-center text-5xl font-semibold capitalize text-one xl:hidden">
              {titulo}
            </h3>
            <h3
              className={`mt-8 text-center text-6xl font-semibold capitalize text-${desktopColor} hidden xl:block`}>
              {titulo}
            </h3>
            <p className="mx-auto mt-8 max-h-[300px] w-[90%] overflow-y-scroll  text-center text-lg font-semibold tracking-wide text-white xl:hidden min-tall-mobile2:max-h-[400px]">
              {descripcion}
            </p>
            <button className="mx-auto mt-8 mb-7 block h-12 rounded-full bg-four px-[3.75rem] text-2xl font-bold text-two xl:hidden">
              Contáctanos!
            </button>
            <div className="absolute bottom-0 hidden h-fit w-full rounded-b-xl bg-black/80 xl:block">
              <p className="mx-auto mt-8 w-[90%] text-center text-lg font-semibold tracking-wide text-white">
                {idioma === 'ar' ? (
                  <bdi dir="rtl">{descripcion}</bdi>
                ) : (
                  <>{descripcion}</>
                )}
              </p>
              <button className="mx-auto mt-8 mb-7 block h-12 rounded-full bg-four px-[3.75rem] text-2xl font-bold text-two ">
                {cta}
              </button>
            </div>
          </div>
        </>
      )}

      <button
        id={destino}
        aria-label={destino}
        className="relative"
        onClick={modalFn}>
        <picture>
          <source
            type="image/webp"
            srcSet={`/destinos/${destino}-mobile.webp`}
          />
          <img
            src={`/destinos/${destino}-mobile.jpg`}
            alt={destino}
            loading="lazy"
            className="rounded-xl xl:hidden"
          />
        </picture>
        <picture>
          <source
            type="image/webp"
            srcSet={`/destinos/${destino}-desktop.webp`}
          />
          <img
            src={`/destinos/${destino}-desktop.jpg`}
            alt={destino}
            loading="lazy"
            className="hidden rounded-xl xl:block"
          />
        </picture>
        <h3
          className={`absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-${
            idioma === 'ar' ? '4xl' : '5xl'
          } font-semibold text-${mobileColor} w-[95%] xl:top-[30px] xl:hidden xl:translate-y-0`}>
          {titulo}
        </h3>
        <h3
          className={`absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] 
          text-${idioma === 'ar' ? '4xl' : '5xl'}
          font-semibold text-${desktopColor} hidden w-full xl:top-[30px] xl:block xl:translate-y-0 `}>
          {titulo}
        </h3>
      </button>
    </>
  );
};

export default Card;
