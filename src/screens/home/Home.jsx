import React from "react";
import CustomSelect from "../../components/customSelect/CustomSelect";
import { useData } from "../../context/Context";
import Button from "../../components/UI/button/Button";
import "./home.scss";
import Table from "../../components/table/Table";

const Home = () => {
   const { data, setSelect, select } = useData();

   return (
      <section className="home">
         <div className="home__body">
            <div className="home__left">
               <div className="home__left-top">
                  <CustomSelect options={data} onSelect={setSelect} />
                  <Button text={"Start"} />
               </div>
               <div className="home__left-bottom">
                  <Table data={data} selected={select} />
               </div>
            </div>
            <div className="home__right"></div>
         </div>
      </section>
   );
};

export default Home;
