import Card from './Card';

const Grid = ({ textos, idioma }) => {
  const { destinos } = textos;
  return (
    <ul className=" mx-auto grid  grid-cols-1 justify-items-center gap-6 md:w-[644px] md:grid-cols-2 xl:w-[978px] xl:grid-cols-3 2xl:w-[1312px] 2xl:grid-cols-4">
      {destinos.map((destino) => {
        let id = destinos.indexOf(destino) + 1;
        return (
          <li
            className="list-none"
            key={destino.destino}>
            <Card
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
