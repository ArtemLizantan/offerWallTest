import React, { useState } from "react";
import CustomSelect from "../../components/customSelect/CustomSelect";
import { useData } from "../../context/Context";
import Button from "../../components/UI/button/Button";
import "./home.scss";
import Table from "../../components/table/Table";
import Logger from "../../components/logger/Logger";

const Home = () => {
   const { data, setSelect, select } = useData();
   const [start, setStart] = useState(false);

   const handleStart = () => {
      setStart(true);
   };

   return (
      <section className="home">
         <div className="home__body">
            <div className="home__left">
               <div className="home__left-bottom">
                  <Table start={start} data={data} selected={select} />
               </div>
            </div>
            <div className="home__right">
               <div className="home__left-top">
                  <CustomSelect options={data} onSelect={setSelect} />
                  <Button onClick={handleStart} text={"Start"} />
               </div>
               <Logger />
            </div>
         </div>
      </section>
   );
};

export default Home;
