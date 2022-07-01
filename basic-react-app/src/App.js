import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbakStats from "./components/FeedbakStats";
import Header from "./components/Header";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <div className="container">
        <Header text="Header" />
        <FeedbackForm />
        <FeedbackList />
        <FeedbakStats />
      </div>
    </FeedbackProvider>
  );
}
export default App;
