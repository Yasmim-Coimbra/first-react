import AlertButton from "../button/alertButton.jsx";
import "./buttons.css";

const Buttons = () => {
  return (
    <section className="buttons-section">
      <h2>Botões</h2>
      <div className="buttons-container">
        <AlertButton label={97} />
        <AlertButton />
        <AlertButton label="Tocar música" />
      </div>
    </section>
  );
};

export default Buttons;
