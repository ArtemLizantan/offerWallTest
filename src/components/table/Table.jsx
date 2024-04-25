import { useEffect, useState } from "react";
import "./table.scss";

const Table = ({ data, selected, start }) => {
   const [array, setArray] = useState([]);

   useEffect(() => {
      const newArray = [];
      data.forEach(({ name, field }) => {
         if (name === selected) {
            for (let index = 0; index < field; index++) {
               newArray.push(index);
            }
         }
      });
      setArray(newArray);
   }, [selected]);

   let maxWidth;
   if (array.length >= 70) {
      maxWidth = 450;
   } else if (array.length >= 50) {
      maxWidth = 400;
   } else if (array.length <= 15) {
      maxWidth = 260;
   } else if (array.length <= 15) {
      maxWidth = 260;
   } else {
      maxWidth = 200;
   }

   const styles = {
      maxWidth: `${maxWidth}px`,
   };

   return (
      start && (
         <div style={styles} className="square-field">
            <div className="row">
               {array.map((index) => (
                  <div key={index} className="square"></div>
               ))}
            </div>
         </div>
      )
   );
};

export default Table;
