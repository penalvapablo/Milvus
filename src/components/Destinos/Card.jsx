import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faCircleArrowLeft,
  faCircleArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const Card = ({
  destinos,
  destino,
  titulo,
  descripcion,
  id,
  cta,
  idioma,
}) => {
  const [modal, setModal] = useState(undefined);
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
    if (modal !== undefined) {
      setModal(undefined);
      if (typeof window !== 'undefined') {
        document.body.style.overflow = 'auto';
      }
    } else {
      setModal(id);
      if (typeof window !== 'undefined') {
        document.body.style.overflow = 'hidden';
      }
    }
  };

  function arrowLeft() {
    if (modal !== 1) {
      setModal(modal - 1);
    }
  }

  function arrowRight() {
    if (modal !== 12) {
      setModal(modal + 1);
    }
  }
  return (
    <>
      {modal && (
        <>
          <div
            onClick={modalFn}
            className="fixed left-1/2 top-1/2 z-10 h-screen w-screen translate-x-[-50%] translate-y-[-50%]  bg-black/50"></div>
          <h1>{}</h1>
          <div className="fixed left-1/2  top-1/2 z-50 h-fit max-h-[600px] w-[85%]  max-w-[400px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-two  min-tall-mobile:max-h-[600px] modal-view:h-[500px] modal-view:w-[500px]  modal-view:max-w-none ">
            <button
              onClick={modalFn}
              id="close-modal"
              aria-label="close-modal">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="absolute right-[-12px] top-[-12px] z-10 h-8 rounded-full bg-two text-four "
              />
            </button>
            <button
              id="left arrow"
              aria-label="left arrow"
              onClick={arrowLeft}>
              {modal !== 1 && (
                <FontAwesomeIcon
                  icon={faCircleArrowLeft}
                  className="absolute left-[-15px] bottom-[50%] z-10 h-8 rounded-full bg-two text-four "
                />
              )}
            </button>
            <button
              onClick={arrowRight}
              id="right arrow"
              aria-label="right arrow">
              {modal !== 12 && (
                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  className="absolute right-[-15px] bottom-[50%] z-10 h-8 rounded-full bg-two text-four "
                />
              )}
            </button>
            <picture>
              <source
                type="image/webp"
                srcSet={`/destinos/${
                  destinos[modal - 1].destino
                }-modal.webp`}
              />
              <img
                src={`/destinos/${
                  destinos[modal - 1].destino
                }-modal.jpg`}
                alt={destino}
                loading="lazy"
                className="absolute top-0 -z-10 hidden rounded-xl modal-view:block"
              />
            </picture>
            <h3 className="mx-auto max-w-[90%] text-center text-5xl font-semibold capitalize text-one modal-view:hidden">
              {destinos[modal - 1].titulo}
            </h3>

            <p className="mx-auto mt-8 max-h-[100px] w-[85%] scroll-ml-1 overflow-y-scroll text-center  text-base font-semibold tracking-wide text-white min-tall-mobile3:max-h-[300px] min-tall-mobile2:max-h-[300px] modal-view:hidden">
              {idioma === 'ar' ? (
                <bdi dir="rtl">
                  {destinos[modal - 1].descripcion}
                </bdi>
              ) : (
                <>{destinos[modal - 1].descripcion}</>
              )}
            </p>

            <a
              href={`https://api.whatsapp.com/send?phone=${
                idioma === 'ar'
                  ? '962799757654'
                  : '5215554094418'
              }`}
              className="mx-auto mt-8 mb-7 block w-[90%] max-w-[300px] transform rounded-full bg-four px-[3.75rem] py-2 text-center text-xl font-bold text-two duration-200 hover:bg-one modal-view:hidden"
              rel="noreferrer"
              target="_blank">
              {cta}
            </a>
            <div className="absolute bottom-0 hidden h-full w-full rounded-xl bg-black/70 modal-view:block">
              <h3
                className={`mt-8 hidden text-center text-6xl font-semibold capitalize text-white modal-view:block`}>
                {destinos[modal - 1].titulo}
              </h3>
              <div className="absolute bottom-0 mb-7 flex flex-col items-center gap-7">
                <p className="w-[90%]  text-center text-base font-semibold tracking-wide text-white">
                  {idioma === 'ar' ? (
                    <bdi dir="rtl">
                      {destinos[modal - 1].descripcion}
                    </bdi>
                  ) : (
                    <>{destinos[modal - 1].descripcion}</>
                  )}
                </p>
                <a
                  href={`https://api.whatsapp.com/send?phone=${
                    idioma === 'ar'
                      ? '962799757654'
                      : '5215554094418'
                  }`}
                  className="block w-[300px] transform rounded-full bg-four px-[3.75rem] py-2 text-center text-xl font-bold text-two duration-200 hover:bg-one"
                  rel="noreferrer"
                  target="_blank">
                  {cta}
                </a>
              </div>
            </div>
          </div>
        </>
      )}

      <button
        id={destino}
        aria-label={destino}
        className="relative scale-100 transform transition-transform hover:scale-105"
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
            className="rounded-xl lg:hidden"
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
            className="hidden rounded-xl lg:block"
          />
        </picture>
        <h3
          className={`absolute left-1/2 top-1/2 w-full translate-x-[-50%] translate-y-[-50%] px-2  text-4xl font-semibold lg:hidden xl:top-[30px] text-${mobileColor}`}>
          {titulo}
        </h3>
        <h3
          className={`absolute  hidden w-full px-2 text-4xl   font-semibold lg:top-[20px] lg:block text-${desktopColor} `}>
          {titulo}
        </h3>
      </button>
    </>
  );
};

export default Card;
