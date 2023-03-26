import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const Contacto = ({ textos, idioma }) => {
  const { copyright } = textos[idioma];
  return (
    <footer
      id="contacto"
      className=" bg-gray pb-14 pt-12 xl:pb-0">
      {/* <h2 className=" mx-auto max-w-[90%] pt-12 pb-16 text-center text-6xl font-light leading-[4rem] tracking-wide text-two  md:text-7xl lg:text-8xl xl:max-w-[1120px]  xl:text-8xl">
        {titulo}
      </h2> */}
      <div className="mx-auto mb-[50px] flex h-[200px] w-fit flex-col items-start justify-around">
        <div className="flex items-center gap-5">
          <FontAwesomeIcon
            icon={faPhone}
            className="h-[40px] justify-items-end text-end text-two"
          />
          <a
            className="text-xl text-two duration-100 hover:text-one"
            href={`tel:+${
              idioma === 'ar'
                ? '962799757654'
                : '5215554094418'
            }`}>
            {idioma === 'ar'
              ? '+962 7 9975 7654'
              : '+52 1 555409 4418'}
          </a>
        </div>
        <div className="flex items-center gap-6">
          <FontAwesomeIcon
            icon={faWhatsapp}
            className="h-[40px] justify-items-end text-end text-two"
          />

          <a
            href={`https://api.whatsapp.com/send?phone=${
              idioma === 'ar'
                ? '962799757654'
                : '5215554094418'
            }`}
            rel="noreferrer"
            target="_blank"
            className="text-xl text-two duration-100 hover:text-one">
            {idioma === 'ar'
              ? '+962 7 9975 7654'
              : '+52 1 555409 4418'}
          </a>
        </div>
        <div className="flex items-center gap-6">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="h-[40px] justify-items-end text-end text-two"
          />
          <p className="text-xl text-two ">
            info@milvus.travel
          </p>
        </div>
      </div>
      <p className="text-center text-sm text-one">
        {copyright}
      </p>
    </footer>
  );
};

export default Contacto;
