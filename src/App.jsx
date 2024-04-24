import Button from "./components/UI/button/Button";
import CustomSelect from "./components/customSelect/CustomSelect";
import Logger from "./components/logger/Logger";
import Table from "./components/table/Table";
import Title from "./components/title/Title";
import { useData } from "./context/Context";
import Home from "./screens/home/Home";
import "./styles/index.scss";

function App() {
   return (
      <>
         <Home />
      </>
   );
}

export default App;
