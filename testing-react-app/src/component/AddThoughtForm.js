import React, { useState } from "react";
import { generateId, getNewExpirationTime } from "../utils/utils";

export function AddThoughtForm(props) {
  const [text, setText] = useState("");
  const handleTextChange = ({ target }) => {
    const { value } = target;
    setText(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.length) {
      const thought = {
        id: generateId(),
        text: text,
        expiresAt: getNewExpirationTime(),
      };
      props.addThought(thought);
      setText("");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="AddThoughtForm">
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
