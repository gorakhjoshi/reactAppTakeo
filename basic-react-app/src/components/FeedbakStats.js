import { useContext } from "react";
import { FeedbackContext } from "../context/FeedbackContext";

function FeedbakStats() {
  const { feedback } = useContext(FeedbackContext);
  console.log(feedback);
  const result =
    feedback.reduce((acc, item) => acc + item.rating, 0) / feedback.length;

  return (
    <div className="feedback-stats">
      {feedback.length > 0 ? (
        <h2>Average Rating: {result}</h2>
      ) : (
        <h2>No data received</h2>
      )}
    </div>
  );
}
export default FeedbakStats;
