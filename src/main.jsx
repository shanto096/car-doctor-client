import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Route";
import AuthContextProvider from "./authProvider/AuthContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
<AuthContextProvider>
<div className="max-w-7xl mx-auto">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
</AuthContextProvider>
);
