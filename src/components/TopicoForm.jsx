import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { TopicosContext } from "../context/TopicosContextProvider";

function TopicoForm() {
  const {
    topico,
    handleTopicoChange,
    registrarTopico,
    setActualizarStates,
    topicoId,
    actualizarTopico,
  } = useContext(TopicosContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!topicoId) {
      registrarTopico();
    } else {
      actualizarTopico();
    }
    navigate("/topicos");
  };

  useEffect(() => {
    if (id) {
      setActualizarStates(id);
    }
  }, [id]);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col max-w-md gap-4 p-5 border rounded"
    >
      <label htmlFor="titulo" className="text-xl">
        Titulo
        <input
          type="text"
          name="titulo"
          id="titulo"
          value={topico.titulo}
          onChange={(e) => handleTopicoChange(e)}
          className="text-gray-950 w-full p-2 mt-1 text-lg"
        />
      </label>

      <label htmlFor="mensaje" className="text-xl">
        Mensaje
        <textarea
          name="mensaje"
          id="mensaje"
          value={topico.mensaje}
          onChange={(e) => handleTopicoChange(e)}
          className="text-gray-950 w-full p-2 mt-1 text-lg resize-none"
        ></textarea>
      </label>

      <label htmlFor="status" className="text-xl">
        Status
        <input
          type="text"
          name="status"
          id="status"
          value={topico.status}
          onChange={(e) => handleTopicoChange(e)}
          className="text-gray-950 w-full p-2 mt-1 text-lg resize-none"
        />
      </label>

      <label htmlFor="nombreDeCurso" className="text-xl">
        Nombre de Curso
        <input
          type="text"
          name="nombreDeCurso"
          id="nombreDeCurso"
          value={topico.nombreDeCurso}
          onChange={(e) => handleTopicoChange(e)}
          className="text-gray-950 w-full p-2 mt-1 text-lg resize-none"
        />
      </label>

      <label htmlFor="autorId" className="text-xl">
        Autor ID
        <input
          type="text"
          name="autorId"
          id="autorId"
          value={topico.autorId}
          onChange={(e) => handleTopicoChange(e)}
          className="text-gray-950 w-full p-2 mt-1 text-lg resize-none"
        />
      </label>
      <button
        type="submit"
        className={`p-2 text-xl transition-colors border  rounded ${
          topicoId
            ? "border-green-500 hover:bg-green-500"
            : "hover:bg-red-500 border-red-500"
        }`}
      >
        {topicoId ? "Actualizar" : "Registrar"}
      </button>
    </form>
  );
}

export default TopicoForm;
