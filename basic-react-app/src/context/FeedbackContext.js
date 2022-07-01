import { createContext, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import data from "../data/feedback";

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(data);

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
    <FeedbackContext.Provider
      value={{ feedback, feedbackData, deleteFeedback }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
