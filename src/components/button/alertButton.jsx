import "./alertButton.css";
import PropTypes from "prop-types";

const AlertButton = ({ label = "Clique Aqui (label default)" }) => <button type="button" className="btn" onClick={() => alert(`A label desse botão é: ${label}`)}>{label}</button>

AlertButton.PropTypes = {
  label:PropTypes.string.isRequired,
}

export default AlertButton;
