import PropTypes from "prop-types";
import { useContext } from "react";
import { FeedbackContext } from "../context/FeedbackContext";
import FeedbackItem from "./FeedbackItem";

function FeedbackList() {
  const { feedback, deleteFeedback: handleDelete } =
    useContext(FeedbackContext);

  if (!feedback) {
    return <div>No Feedbacks Found!</div>;
  }

  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
