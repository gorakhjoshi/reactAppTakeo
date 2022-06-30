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
    if (window.confirm("Do you really want to delete this feedback?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
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
