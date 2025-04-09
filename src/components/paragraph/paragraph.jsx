import "./paragraph.css"

const Paragraph = ({ text, textColor }) => {
  return (
    <p className="paragraph" style={{color: textColor}}>
      {text}
    </p>
  );
};

export default Paragraph;
