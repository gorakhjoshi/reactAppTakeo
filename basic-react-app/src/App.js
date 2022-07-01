import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbakStats from "./components/FeedbakStats";
import Header from "./components/Header";
import data from "./data/feedback";

function App() {
  const [text, setText] = useState("");
  const [feedback, setFeedback] = useState(data);
  // const id = useId();

  function feedbackData(message) {
    message.id = uuidv4();
    setFeedback([...feedback, message]);
  }

  function deleteFeedback(id) {
    if (window.confirm("Do you really want to delete this feedback?")) {
      console.log(feedback.filter((item) => item.id !== id));
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  }

  return (
    <div className="container">
      <Header text="Header" />
      <FeedbackForm fnData={feedbackData} />
      <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      <FeedbakStats data={feedback} />
    </div>
  );
}
export default App;
