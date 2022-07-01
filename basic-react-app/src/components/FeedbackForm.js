import { useContext, useState } from "react";
import { FeedbackContext } from "../context/FeedbackContext";
import Rating from "./Rating";
import Button from "./shared/Button";
import Card from "./shared/Card";

function FeedbackForm() {
  const { feedbackData: fnData } = useContext(FeedbackContext);
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [disable, setDisable] = useState(true);
  const [rating, setRating] = useState(0);

  function handleChange(e) {
    setText(e.target.value);

    if (e.target.value.trim().length < 10) {
      setDisable(true);
      setMessage("Text length should be greater than 10 character!");
    } else {
      setDisable(false);
      setMessage("");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    fnData({ text, rating });
    setText("");
  }

  function select(rating) {
    setRating(rating);
  }

  return (
    <Card>
      <div>Select Rating</div>
      <form onSubmit={handleSubmit}>
        <Rating selectFunction={select} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write your feedback here!"
            onChange={handleChange}
            value={text}
          />
          <Button version="secondary" type="submit" isDisabled={disable}>
            Send
          </Button>
        </div>
        {message && <div style={{ color: "red" }}>{message}</div>}
      </form>
    </Card>
  );
}
export default FeedbackForm;
