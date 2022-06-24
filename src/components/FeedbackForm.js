import { useState } from "react";
import Rating from "./Rating";
import Button from "./shared/Button";
import Card from "./shared/Card";

function FeedbackForm({ fnData }) {
  const [feedbackText, setFeedbackText] = useState("");
  const [message, setMessage] = useState("");
  const [disable, setDisable] = useState(true);

  function handleChange(e) {
    if (e.target.value.trim().length < 10) {
      setDisable(true);
      setMessage("Text length should be greater than 10 character!");
    } else {
      setDisable(false);
      setFeedbackText(e.target.value);
      setMessage("");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    fnData(feedbackText);
  }

  return (
    <div>
      <div>Select Rating</div>
      <Rating />
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Write your feedback here!"
            onChange={handleChange}
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
