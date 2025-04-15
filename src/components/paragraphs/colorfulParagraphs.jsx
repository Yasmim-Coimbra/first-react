import Paragraph from "../paragraph/paragraph";
import "./colorfulParagraphs.css"

const ColorfulParagraphs = () => {
  const paragraphs = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      textColor: "red",
    },
    {
      id: 2,
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      textColor: "blue",
    },
    {
      id: 3,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      textColor: "green",
    },
    {
      id: 4,
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      textColor: "purple",
    },
    {
      id: 5,
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

export default ColorfulParagraphs;
