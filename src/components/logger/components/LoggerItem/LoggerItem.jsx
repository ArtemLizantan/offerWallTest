const LoggerItem = ({ row, column, square }) => {
   return (
      <div className="logger__item logger-item">
         <div className="logger-item__body">
            <div className="logger-item__row">
               <div className="logger-item__info">row: {row}</div>
               <div className="logger-item__info">col: {column}</div>
               <div className="logger-item__info">square: {square}</div>
            </div>
         </div>
      </div>
   );
};

export default LoggerItem;
