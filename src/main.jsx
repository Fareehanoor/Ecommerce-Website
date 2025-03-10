import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AppProvider } from "./context/products/productContext.jsx";
import { FilterContextProvider } from "./context/filter/filterContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      <FilterContextProvider>
        <App />
      </FilterContextProvider>
    </AppProvider>
  </StrictMode>
);
