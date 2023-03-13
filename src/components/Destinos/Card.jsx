import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';

const Card = ({ modal, modalFn, descripcion, destino }) => {
  // const descripcionDestino = descripcion[destino];
  return (
    <>
      {modal && (
        <div className=" fixed left-1/2 top-1/2 z-10 h-screen w-screen translate-x-[-50%] translate-y-[-50%] bg-black/50">
          <div className="fixed left-1/2 top-1/2 z-20 h-fit w-[90%] max-w-[360px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-two">
            <button
              onClick={modalFn}
              id="close-modal"
              aria-label="close-modal">
              <FontAwesomeIcon
                icon={faCircleXmark}
                className="absolute right-[-12px] top-[-12px] h-8 rounded-full bg-two text-one "
              />
            </button>
            <h3 className="mt-8 text-center text-5xl font-semibold capitalize text-one">
              {destino}
            </h3>
            <p className="mx-auto mt-8 w-[90%] text-center text-lg font-semibold tracking-wide text-white">
              {/* {descripcionDestino.ar} */}
            </p>
            <button className="mx-auto mt-8 mb-7 block h-12 rounded-full bg-four px-[3.75rem] text-2xl font-bold text-two">
              Contáctanos!
            </button>
          </div>
        </div>
      )}
      <button
        id={destino}
        aria-label={destino}
        className="relative"
        onClick={modalFn}>
        <img
          src={`/src/assets/destinos/${destino}-mobile.jpg`}
          alt={destino}
          loading="lazy"
          className="rounded-xl xl:hidden"
        />
        <img
          src={`/src/assets/destinos/${destino}-desktop.jpg`}
          alt={destino}
          loading="lazy"
          className="hidden rounded-xl xl:block"
        />
        <h3 className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] text-5xl font-semibold capitalize text-one xl:top-[30px] xl:translate-y-0">
          {destino}
        </h3>
      </button>
    </>
  );
};

export default Card;
