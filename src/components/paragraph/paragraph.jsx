import "./paragraph.css"

const Paragraph = ({ text, textColor }) => <p className="paragraph" style={{ color: textColor }}>{text}</p>

export default Paragraph;
