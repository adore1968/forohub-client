import { useContext } from "react";
import { TopicosContext } from "../context/TopicosContextProvider";
import Topico from "../components/Topico";
import { Link } from "react-router-dom";

function TopicosRoute() {
  const { isLoading, topicos } = useContext(TopicosContext);

  if (isLoading) {
    return (
      <div className="mt-10 text-center">
        <h1 className="text-2xl font-semibold">Cargando...</h1>
      </div>
    );
  }

  if (topicos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-5 mt-10 text-center">
        <h1 className="text-2xl font-semibold">Los topicos estan vacios...</h1>
        <Link
          to="/crear-topico"
          className="hover:bg-red-500 px-4 py-2 transition-colors border border-red-500 rounded"
        >
          Intenta crear uno!
        </Link>
      </div>
    );
  }

  return (
    <div className="container pb-10 mx-auto mt-10">
      <div className="flex flex-wrap items-center gap-5">
        {topicos.map((topico) => (
          <Topico key={topico.id} topico={topico} />
        ))}
      </div>
    </div>
  );
}

export default TopicosRoute;
