import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";

import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import AuthProvider from "./contexts/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <Toaster />
    <RouterProvider router={router} />
  </AuthProvider>
);
