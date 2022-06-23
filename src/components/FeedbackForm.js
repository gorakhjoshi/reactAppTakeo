import { useState } from "react";

function FeedbackForm() {
  const [feedback, setFeedback] = useState("");

  function handleChange(e) {
    setFeedback(e.target.value);
  }
  return (
    <form>
      <input type="text" onChange={handleChange} />
    </form>
  );
}
export default FeedbackForm;
