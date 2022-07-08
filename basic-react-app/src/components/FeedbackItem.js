import { useContext } from "react";
import { FaTimes, FaEdit } from "react-icons/fa";
import { FeedbackContext } from "../context/FeedbackContext";
import Card from "./shared/Card";

function FeedbackItem({ item }) {
  const { deleteFeedback: handleDelete, handleEdit } =
    useContext(FeedbackContext);
  return (
    <Card>
      <h2 className="num-display">{item.rating}</h2>
      <div>{item.text}</div>
      <button onClick={() => handleDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => handleEdit(item)}>{<FaEdit />}</button>
    </Card>
  );
}
export default FeedbackItem;
