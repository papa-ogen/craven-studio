import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

import "./index.css";
import "../node_modules/@papa-ogen/craven-ui/dist/style.css";
import ErrorPage from "./error-page";
import Clicker from "./clicker";
import { ContextProvider } from "@papa-ogen/craven-ui";
import Footer from "./Footer";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "clicker",
    element: <Clicker />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
      <Footer />
    </ContextProvider>
  </React.StrictMode>
);
