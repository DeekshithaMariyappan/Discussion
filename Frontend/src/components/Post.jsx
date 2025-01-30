import { useState } from "react";

const Post = () => {
  const [text, setText] = useState("");

  function handleText(event) {
    setText(event.target.value);
  }

  const styling = {
    textAlign: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  };

  const textareaStyle = {
    width: "80%",
    height: "100px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid gray",
    resize: "none",
  };

  const paragraphStyle = {
    marginTop: "10px",
    fontSize: "18px",
    color: "black",
  };

  return (
    <div style={styling}>
      <h2>TextArea:</h2>
      <textarea style={textareaStyle} value={text} onChange={handleText} />
      <p style={paragraphStyle}>{text}</p>
    </div>
  );
};

export default Post;
