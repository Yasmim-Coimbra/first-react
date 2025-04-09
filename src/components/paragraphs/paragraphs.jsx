import Paragraph from "../paragraph/paragraph";
import "./paragraphs.css"

const Paragraphs = () => {
  const paragraphs = [
    {
      id: "Primeiro Parágrafo",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      textColor: "red",
    },
    {
      id: "Segundo Parágrafo",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      textColor: "blue",
    },
    {
      id: "Terceiro Parágrafo",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      textColor: "green",
    },
    {
      id: "Quarto Parágrafo",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      textColor: "purple",
    },
    {
      id: "Quinto Parágrafo",
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      textColor: "orange",
    },
  ];

  return (
    <section className="paragraphs-section">
      <h2>Parágrafos</h2>
      <div className="paragraphs-container">
        {paragraphs.map((paragraph) => (
          <Paragraph
            key={paragraph.id}
            // text={paragraph.text}
            // textColor={paragraph.textColor}
            {...paragraph}
            // Operadot Spread para passar todas as props
          />
        ))}
      </div>
    </section>
  );
};

export default Paragraphs;
