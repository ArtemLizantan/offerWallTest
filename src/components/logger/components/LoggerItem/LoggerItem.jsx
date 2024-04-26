const LoggerItem = ({ id, row, column, hover }) => {
   return (
      <div className="logger__item logger-item">
         <div className="logger-item__body">
            <div className="logger-item__row">
               <div className="logger-item__info">id: {id}</div>
               <div className="logger-item__info">row: {row}</div>
               <div className="logger-item__info">column: {column}</div>
               <div className="logger-item__info">hover: {hover.toString()}</div>
            </div>
         </div>
      </div>
   );
};

export default LoggerItem;
