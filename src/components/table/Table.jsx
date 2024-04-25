import React, { useEffect, useState } from "react";
import "./table.scss";
import { useData } from "../../context/Context";

const Table = ({ data, selected, start }) => {
   const [array, setArray] = useState([]);
   const [coordinates, setCoordinates] = useState([]);
   const { setGlobalCoordinates, globalCoordinates, select } = useData();

   useEffect(() => {
      const newArray = [];
      data.forEach(({ name, field, id }) => {
         if (name === selected) {
            for (let index = 0; index < field; index++) {
               newArray.push({ id: `${id}-${index}`, index });
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
   } else {
      maxWidth = 200;
   }

   const styles = {
      maxWidth: `${maxWidth}px`,
   };

   const handleHoverSquares = (event) => {
      const { id, index } = event.target.dataset;
      const { field } = data.find(({ name }) => name === selected);
      const row = Math.floor(index / 5) + 1;
      const square = (index % field) + 1;
      const column = (index % 5) + 1;

      const existingCoordinateIndex = coordinates.findIndex(
         (coord) => coord.id === id
      );
      if (existingCoordinateIndex !== -1) {
         const updatedCoordinates = [...coordinates];
         updatedCoordinates[existingCoordinateIndex] = {
            ...updatedCoordinates[existingCoordinateIndex],
            hover: !updatedCoordinates[existingCoordinateIndex].hover,
         };
         setTimeout(() => setCoordinates(updatedCoordinates);
         setGlobalCoordinates(updatedCoordinates),0.2)
      } else {
         const newCoordinates = [
            ...coordinates,
            { id, row, column, square, hover: true },
         ];
         setCoordinates(newCoordinates);
         setGlobalCoordinates(newCoordinates);
      }
   };

   useEffect(() => {
      setCoordinates([]);
      setGlobalCoordinates([]);
   }, [selected]);

   return (
      start && (
         <div style={styles} className="square-field">
            <div className="row">
               {array.map(({ id, index }) => {
                  return (
                     <div
                        key={id}
                        data-id={id}
                        data-index={index}
                        className="square"
                        onMouseEnter={(event) => {
                           handleHoverSquares(event);
                        }}
                     ></div>
                  );
               })}
            </div>
         </div>
      )
   );
};

export default Table;
