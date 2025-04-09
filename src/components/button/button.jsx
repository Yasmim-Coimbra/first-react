import "./button.css";
import PropTypes from "prop-types";

const Button = ({ label = "Clique Aqui (label default)"}) => {
  function showLabel() {
    alert(`A label desse botão é: ${label}`);
  }

  return (
    <button type="button" className="btn" onClick={showLabel}>
        {label}
    </button>
  );
};

Button.PropTypes = {
  label: PropTypes.string,
};

export default Button;
