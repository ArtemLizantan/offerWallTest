import Button from "./components/UI/button/Button";
import CustomSelect from "./components/customSelect/CustomSelect";
import Logger from "./components/logger/Logger";
import Table from "./components/table/Table";
import Title from "./components/title/Title";
import { useData } from "./context/Context";
import "./styles/index.scss";

function App() {
   const { data, setSelect, select } = useData();

   console.log(select);

   console.log(data);
   return (
      <>
         <Button text={"test"} />
         <Title text={"Test"} />
         <Logger />
         <CustomSelect options={data} onSelect={setSelect} />
         <Table data={data} selected={select} />
      </>
   );
}

export default App;
