import React, { useEffect, useState } from "react";
import "./table.scss";
import { useData } from "../../context/Context";

const Table = ({ data, selected, start }) => {
   const [array, setArray] = useState([]);
   const [coordinates, setCoordinates] = useState([]);
   const { setGlobalCoordinates } = useData();

   useEffect(() => {
      const newArray = [];
      data.forEach(({ name, field, id }) => {
         if (name === selected) {
            for (let index = 0; index < field; index++) {
               newArray.push({ id: `${id}-${index}`, index, hovered: false });
            }
         }
      });
      setArray(newArray);
   }, [selected]);

   const handleHoverSquares = (id) => {
      const updatedArray = array.map((item) =>
         item.id === id ? { ...item, hovered: !item.hovered } : item
      );
      setArray(updatedArray);

      const newCoordinates = updatedArray.map(({ id, index, hovered }) => {
         const { field } = data.find(({ name }) => name === selected);
         const row = Math.floor(index / 5) + 1;
         const square = (index % field) + 1;
         const column = (index % 5) + 1;
         return { id, row, column, square, hover: hovered };
      });

      const hoveredCoordinates = newCoordinates.filter((coord) => coord.hover);

      setCoordinates(hoveredCoordinates);
      setGlobalCoordinates(hoveredCoordinates);
   };

   useEffect(() => {
      setCoordinates([]);
      setGlobalCoordinates([]);
   }, [selected]);

   return (
      start && (
         <div className="square-field">
            <div className="row">
               {array.map(({ id, index, hovered }) => {
                  return (
                     <div
                        key={id}
                        data-id={id}
                        data-index={index}
                        className="square"
                        style={{ background: hovered ? "blue" : "white" }}
                        onMouseEnter={() => handleHoverSquares(id)}
                     ></div>
                  );
               })}
            </div>
         </div>
      )
   );
};

export default Table;
