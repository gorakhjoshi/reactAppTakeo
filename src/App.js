import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import Card from "./components/shared/Card";
import data from "./data/feedback";

function App() {
  return (
    <div>
      <Card>
        <Header text="Header" />
      </Card>

      <Card>
        <FeedbackList feedback={data} />
      </Card>
    </div>
  );
}
export default App;
