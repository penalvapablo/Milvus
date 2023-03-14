const HeroText = ({ textos, idioma }) => {
  return (
    <p
      className="absolute bottom-[100px] left-1/2 w-[90%] translate-x-[-50%] text-center text-2xl
    tracking-wide text-white sm:bottom-[4.5rem] xl:bottom-12 xl:text-3xl">
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
