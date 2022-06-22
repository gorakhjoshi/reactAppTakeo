function FeedbackItem({ item }) {
  return (
    <div>
      <div>{item.rating}</div>
      <div>{item.text}</div>
    </div>
  );
}
export default FeedbackItem;
