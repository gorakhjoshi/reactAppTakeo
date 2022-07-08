import { createContext, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import data from "../data/feedback";

export const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(data);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  function feedbackData(message) {
    message.id = uuidv4();
    setFeedback([...feedback, message]);
  }

  function deleteFeedback(id) {
    if (window.confirm("Do you really want to delete this feedback?")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  }

  function handleEdit(item) {
    setFeedbackEdit({
      item,
      edit: true,
    });
  }

  function updateFeedback(id, uItem) {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...uItem } : item))
    );
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackData,
        deleteFeedback,
        handleEdit,
        feedbackEdit,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};
