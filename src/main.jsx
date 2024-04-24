import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ContextProvider } from "./context/Context.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
   <ContextProvider>
      <BrowserRouter basename="/User-Weather/">
         <App />
      </BrowserRouter>
   </ContextProvider>
);
