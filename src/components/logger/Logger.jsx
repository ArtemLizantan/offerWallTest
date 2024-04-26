import { useData } from "../../context/Context";
import LoggerItem from "./components/LoggerItem/LoggerItem";
import "./logger.scss";

const Logger = () => {
   const { globalCoordinates } = useData();
   return (
      <div className="logger">
         <div className="logger__body">
            {globalCoordinates.map(({ id, row, column, square, hover }) => (
               <LoggerItem key={id} id={id} row={row} column={column} hover={hover} />
            ))}
         </div>
      </div>
   );
};

export default Logger;
