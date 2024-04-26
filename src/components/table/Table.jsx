import React, { useEffect, useState } from "react";
import "./table.scss";
import { useData } from "../../context/Context";

const Table = ({ data, selected, start }) => {
   const [array, setArray] = useState([]);
   const { setGlobalCoordinates, globalCoordinates } = useData();

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
   }, [selected, data]);

   const handleHoverSquares = (event) => {
      const { id, index } = event.target.dataset;
      const { field } = data.find(({ name }) => name === selected);
      const row = Math.floor(index / 5) + 1;
      const square = (index % field) + 1;
      const column = (index % 5) + 1;

      const updatedArray = array.map((item) =>
         item.id === id && item.index.toString() === index
            ? { ...item, hovered: !item.hovered }
            : item
      );

      setArray(updatedArray);

      const coordinatesExist = globalCoordinates.some(
         (coord) =>
            coord.id === id &&
            coord.row === row &&
            coord.column === column &&
            coord.square === square
      );

      if (!coordinatesExist) {
         setGlobalCoordinates((prevCoordinates) => [
            ...prevCoordinates,
            { id, row, column, square },
         ]);
      } else {
         setGlobalCoordinates((prevCoordinates) =>
            prevCoordinates.filter(
               (coord) =>
                  coord.id !== id ||
                  coord.row !== row ||
                  coord.column !== column ||
                  coord.square !== square
            )
         );
      }
   };

   useEffect(() => {
      setGlobalCoordinates([]);
   }, [selected, setGlobalCoordinates]);

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
                        onMouseEnter={(event) => handleHoverSquares(event)}
                     ></div>
                  );
               })}
            </div>
         </div>
      )
   );
};

export default Table;
