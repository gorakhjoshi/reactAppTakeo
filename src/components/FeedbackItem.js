import { FaTimes } from "react-icons/fa";
import Card from "./shared/Card";

function FeedbackItem({ item, handleDelete }) {
  return (
    <Card>
      <h2 className="num-display">{item.rating}</h2>
      <div>{item.text}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
    </Card>
  );
}
export default FeedbackItem;
