import { useEffect } from "react";
import { useData } from "../../context/Context";
import LoggerItem from "./components/LoggerItem/LoggerItem";
import "./logger.scss";
import Title from "../title/Title";

const Logger = () => {
   const { globalCoordinates } = useData();

   return (
      <>
         <div className="logger">
            <div className="logger__title">
               <Title text={"Hovered squares"} />
            </div>
            {globalCoordinates.length !== 0 ? (
               <div className="logger__body">
                  {globalCoordinates
                     .reverse()
                     .map(({ id, row, column, square }) => (
                        <LoggerItem
                           key={id}
                           row={row}
                           square={square}
                           column={column}
                        />
                     ))}
               </div>
            ) : (
               <div className="logger__nothing">Nothing logged</div>
            )}
         </div>
      </>
   );
};

export default Logger;
