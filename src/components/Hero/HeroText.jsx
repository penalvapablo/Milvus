const HeroText = ({ textos, idioma }) => {
  return (
    <p
      className=" absolute bottom-8 left-1/2 w-[90%] translate-x-[-50%] text-center
    text-lg tracking-wide text-white sm:bottom-5 md:bottom-12 mobile-landscape:bottom-[20px]">
      <span className="text-white sm:text-one">
        {idioma === 'ar' ? (
          <bdi dir="rtl">{textos.texto1}</bdi>
        ) : (
          <> {textos.texto1}</>
        )}
      </span>
      <br />{' '}
      {idioma === 'ar' ? (
        <bdi dir="rtl">{textos.texto2}</bdi>
      ) : (
        <> {textos.texto2}</>
      )}
    </p>
  );
};

export default HeroText;
