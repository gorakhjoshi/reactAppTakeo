import { BrowserRouter, Route, Routes } from "react-router-dom";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbakStats from "./components/FeedbakStats";
import Header from "./components/Header";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <BrowserRouter>
        <div className="container">
          <Header text="Header" />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackList />
                  <FeedbakStats />
                </>
              }
            />

            <Route path="about" element={<div>I am from about</div>} />
            <Route path="*" element={<div>404 Not Found</div>} />
          </Routes>
        </div>
      </BrowserRouter>
    </FeedbackProvider>
  );
}
export default App;
