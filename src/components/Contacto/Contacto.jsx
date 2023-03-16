import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Contacto = () => {
  return (
    <footer
      id="contacto"
      className=" bg-gray">
      <h2 className="text-secondary pt-[30px] pb-12 text-center text-6xl font-semibold tracking-wide md:text-8xl">
        Contacto
      </h2>
      <div className="mx-auto mb-[50px] flex h-[200px] w-fit flex-col items-start justify-around">
        <div className="flex items-center gap-5">
          <FontAwesomeIcon
            icon={faPhone}
            className="text-secondary h-[40px] justify-items-end text-end"
          />
          {/* <p className="text-xl text-secondary">
            +491785279833
          </p> */}
          <a
            className="text-secondary text-xl duration-100 hover:text-2xl"
            href="tel:+491785279833">
            491785279833
          </a>
        </div>
        <div className="flex items-center gap-5">
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="text-secondary h-[40px] justify-items-end text-end"
          />
          <button className="text-secondary text-xl duration-100 hover:text-2xl ">
            <a
              href="https://api.whatsapp.com/send?phone=491785279833"
              rel="noreferrer"
              target="_blank">
              +491785279833
            </a>
          </button>
        </div>
        <div className="flex items-center gap-5">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-secondary h-[40px] justify-items-end text-end"
          />
          <p className="text-secondary text-xl ">
            cinthianadim@gmail.com
          </p>
        </div>
      </div>
      <p className="text-secondary text-center text-xs">
        Todos los derechos reservados 2022 - Cinthia Nadim
        Juarez
      </p>
    </footer>
  );
};

export default Contacto;
