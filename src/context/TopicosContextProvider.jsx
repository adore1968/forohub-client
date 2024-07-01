import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const TopicosContext = createContext();
const url = "https://zoological-fulfillment-production.up.railway.app/topicos";
const topicoInitialState = {
  titulo: "",
  mensaje: "",
  status: "",
  nombreDeCurso: "",
  autorId: "",
};

export function TopicosContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [topicos, setTopicos] = useState([]);
  const [topico, setTopico] = useState(topicoInitialState);
  const [topicoId, setTopicoId] = useState("");

  const obtenerTopicos = async () => {
    try {
      const response = await axios(url);
      if (response.status === 200) {
        const data = response.data;
        setTopicos(data.content);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const handleTopicoChange = (e) => {
    const { name, value } = e.target;
    setTopico({ ...topico, [name]: value });
  };

  const registrarTopico = async () => {
    try {
      const response = await axios.post(url, topico);
      if (response.status === 201) {
        const data = response.data;
        setTopico(topicoInitialState);
        setTopicos([...topicos, data]);
        return true;
      }
    } catch (error) {
      console.log(error);
      return false;
    }
  };

  const obtenerTopico = async (id) => {
    try {
      const response = await axios(`${url}/${id}`);
      if (response.status === 200) {
        const data = response.data;
        setTopico(data);
        setTopicoId(id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const setActualizarStates = (id) => {
    obtenerTopico(id);
  };

  const actualizarTopico = async () => {
    try {
      const response = await axios.put(`${url}/${topicoId}`, topico);
      if (response.status === 200) {
        const data = response.data;
        const topicosFiltrados = topicos.filter((t) => t.id != topicoId);
        setTopicos([...topicosFiltrados, data]);
        setTopico(topicoInitialState);
        setTopicoId("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarTopico = async (id) => {
    try {
      const response = await axios.delete(`${url}/${id}`);
      if (response.status === 204) {
        const topicosFiltrados = topicos.filter((t) => t.id != id);
        setTopicos(topicosFiltrados);
        console.log("Topico eliminado correctamente!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerTopicos();
  }, []);

  return (
    <TopicosContext.Provider
      value={{
        isLoading,
        topicos,
        topico,
        handleTopicoChange,
        registrarTopico,
        setActualizarStates,
        topicoId,
        actualizarTopico,
        eliminarTopico,
      }}
    >
      {children}
    </TopicosContext.Provider>
  );
}
