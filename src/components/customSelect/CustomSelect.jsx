import { useState } from "react";
import "./customSelect.scss";

const CustomSelect = ({ options, onSelect }) => {
   const [isOpen, setIsOpen] = useState(false);
   const [selectedOption, setSelectedOption] = useState(null);

   const handleToggle = () => {
      setIsOpen(!isOpen);
   };

   const handleSelectOption = (option) => {
      setSelectedOption(option);
      setIsOpen(false);
      onSelect(option);
   };

   return (
      <div className="custom-select">
         <div className="select-header" onClick={handleToggle}>
            {selectedOption ? selectedOption : "Select an option"}
            <span className={`arrow ${isOpen ? "open" : ""}`}>&#9660;</span>
         </div>
         {isOpen && (
            <div
               style={{ display: isOpen ? "block" : "none" }}
               className="options"
            >
               {options.map(({ name, id }) => (
                  <div
                     key={id}
                     className={`option ${
                        selectedOption === name ? "selected" : ""
                     }`}
                     onClick={() => handleSelectOption(name)}
                  >
                     {name}
                  </div>
               ))}
            </div>
         )}
      </div>
   );
};

export default CustomSelect;
