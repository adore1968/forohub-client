import { useContext } from "react";
import { TopicosContext } from "../context/TopicosContextProvider";
import { Link } from "react-router-dom";

function Topico({ topico }) {
  const { eliminarTopico } = useContext(TopicosContext);

  const topicoId = topico.id;
  const values = [
    topico.mensaje,
    topico.fechaDeCreacion,
    topico.status,
    topico.nombreDeCurso,
    topico.autorCorreoElectronico,
  ];

  return (
    <div className="min-w-fit flex flex-col flex-1 max-w-md gap-1 p-5 border rounded">
      <h4 className="text-xl font-medium">
        <span>{topicoId}</span> - {topico.titulo}
      </h4>
      {values.map((v, i) => (
        <p key={i} className="text-lg">
          {v}
        </p>
      ))}
      <div className="flex justify-between gap-5 mt-1 text-lg border-t pt-2.5">
        <Link
          to={`/crear-topico/${topicoId}`}
          className="hover:bg-green-500 px-4 py-2 transition-colors border border-green-500 rounded"
        >
          Actualizar
        </Link>
        <button
          type="button"
          onClick={() => eliminarTopico(topicoId)}
          className="hover:bg-red-500 px-4 py-2 transition-colors border border-red-500 rounded"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default Topico;
