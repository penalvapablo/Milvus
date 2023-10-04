import Card from './Card';

const Grid = ({ textos, idioma }) => {
  const { destinos } = textos;
  return (
    <ul className=" lg:w[800px] mx-auto  grid grid-cols-1 items-center justify-items-center gap-4 md:w-[644px] md:grid-cols-2 lg:w-[978px] lg:grid-cols-4">
      {destinos.map((destino) => {
        let id = destinos.indexOf(destino) + 1;
        return (
          <li
            className="flex list-none"
            key={destino.destino}>
            <Card
              destinos={destinos}
              id={id}
              cta={textos.cta}
              destino={destino.destino}
              titulo={destino.titulo}
              descripcion={destino.descripcion}
              idioma={idioma}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Grid;
