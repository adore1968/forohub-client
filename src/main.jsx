import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import TopicosRoute from "./routes/TopicosRoute";
import CrearTopicoRoute from "./routes/CrearTopicoRoute";
import { TopicosContextProvider } from "./context/TopicosContextProvider";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/topicos",
          element: <TopicosRoute />,
        },
        {
          path: "/crear-topico",
          element: <CrearTopicoRoute />,
        },
        {
          path: "/crear-topico/:id",
          element: <CrearTopicoRoute />,
        },
      ],
    },
  ],
  {
    basename: "/forohub-client/",
  }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TopicosContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </TopicosContextProvider>
  </React.StrictMode>
);
