import Card from "./shared/Card";
import Button from "./shared/Button";

function FeedbackItem({ item }) {
  return (
    <Card>
      <h2 className="num-display">{item.rating}</h2>
      <div>{item.text}</div>
    </Card>
  );
}
export default FeedbackItem;
