import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.jsx";
import "@/App.css";
import "@/fonts/Inter/inter.css";
import { ThemeProvider } from "@/components/theme-provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme" >
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
