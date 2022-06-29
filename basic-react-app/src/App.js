import { useState } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbakStats from "./components/FeedbakStats";
import Header from "./components/Header";
import data from "./data/feedback";

function App() {
  const [text, setText] = useState("");
  const [feedback, setFeedback] = useState(data);

  // console.log(text);

  function feedbackData(message) {
    console.log(message);
  }

  function deleteFeedback(id) {
    console.log(id);
    // DELETE FEEDBACK
  }

  return (
    <>
      <Header text="Header" />
      <FeedbackForm fnData={feedbackData} />
      <FeedbackList feedback={data} handleDelete={deleteFeedback} />
      <FeedbakStats data={feedback} />
    </>
  );
}
export default App;
