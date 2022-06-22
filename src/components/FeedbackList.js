import FeedbackItem from "./FeedbackItem";

function FeedbackList({ feedback }) {
  if (!feedback) {
    return <div>No Feedbacks Found!</div>;
  }

  return (
    <div>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default FeedbackList;
