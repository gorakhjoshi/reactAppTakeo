import { useState } from "react";
import Rating from "./Rating";
import Button from "./shared/Button";

function FeedbackForm({ fnData }) {
  const [feedbackText, setFeedbackText] = useState("");
  const [message, setMessage] = useState("");
  const [disable, setDisable] = useState(true);
  const [rating, setRating] = useState(0);

  console.log(rating);

  function handleChange(e) {
    setFeedbackText(e.target.value);

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
    fnData({ feedbackText, rating });
    setFeedbackText("");
  }

  function select(rating) {
    setRating(rating);
  }

  return (
    <div>
      <div>Select Rating</div>
      <form onSubmit={handleSubmit}>
        <Rating selectFunction={select} />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write your feedback here!"
            onChange={handleChange}
            value={feedbackText}
          />
        </div>
        <Button version="secondary" type="submit" isDisabled={disable}>
          Send
        </Button>
        {message && <div style={{ color: "red" }}>{message}</div>}
      </form>
    </div>
  );
}
export default FeedbackForm;
