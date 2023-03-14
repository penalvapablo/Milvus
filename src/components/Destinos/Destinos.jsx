import Grid from './Grid';

const Destinos = ({ textos, idioma }) => {
  return (
    <section
      id="destinos"
      className="overflow-hidden bg-gray">
      <h2 className="mx-auto max-w-[80%] pt-12 pb-20 text-center text-5xl font-light tracking-wide text-two">
        {textos.titulo}
      </h2>

      <Grid
        textos={textos}
        idioma={idioma}
      />

      <p
        className="mx-auto w-[90%] pt-12 text-center text-xl font-bold text-two md:w-[80%] md:text-2xl
      ">
        {textos.texto1}
      </p>
      <p
        className=" mx-auto w-[90%] pt-12 pb-12 text-center text-4xl font-semibold text-one md:w-[80%] md:text-5xl
      ">
        {textos.texto2}
      </p>
    </section>
  );
};

export default Destinos;
