import Button from "../button/button";
import "./buttons.css";

const Buttons = () => {
  return (
    <section className="buttons-section">
      <h2>Botões</h2>
      <div className="buttons-container">
        <Button label={97} />
        <Button />
        <Button label="Tocar música" />
      </div>
    </section>
  );
};

export default Buttons;
