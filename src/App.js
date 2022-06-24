import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import data from "./data/feedback";
import Card from "./components/shared/Card";
import FeedbackForm from "./components/FeedbackForm";
import Button from "./components/shared/Button";
import { useState } from "react";

// Rating
// Feedback Text

function App() {
  const [text, setText] = useState("");
  const [feedback, setFeedback] = useState(data);
  console.log(feedback);

  function feedbackData(message) {
    setText(message);
  }

  return (
    <>
      <Header text="Header" />
      <FeedbackForm fnData={feedbackData} />
      <FeedbackList feedback={data} />
    </>
  );
}
export default App;
