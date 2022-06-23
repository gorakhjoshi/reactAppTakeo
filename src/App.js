import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import data from "./data/feedback";
import Card from "./components/shared/Card";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  return (
    <div>
      <Header text="Header" />
      <FeedbackForm />
      <FeedbackList feedback={data} />
    </div>
  );
}
export default App;
