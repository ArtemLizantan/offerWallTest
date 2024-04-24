import "./button.scss";

const Button = ({ text, onClick }) => {
   return (
      <button onClick={onClick} className="main-btn">
         {text}
      </button>
   );
};

export default Button;
