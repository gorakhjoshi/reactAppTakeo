import { useEffect } from "react";
import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbakStats from "./components/FeedbakStats";
import Header from "./components/Header";
import { FeedbackProvider } from "./context/FeedbackContext";
import axios from "axios";

// const feedback = fetch("http://localhost:4000/feedback")
//   .then((response) => response.json())
//   .then((data) => data);

// console.log(feedback);

function App() {
  useEffect(() => {
    (async function () {
      const feedback = await axios("http://localhost:4000/feedback");
      console.log(feedback);
    })();
  }, []);

  return (
    <FeedbackProvider>
      {/* <BrowserRouter> */}
      <div className="container">
        <Header text="Header" />
        {/* <Routes> */}
        {/* <Route
              path="/"
              element={
                <> */}
        <FeedbackForm />
        <FeedbackList />
        <FeedbakStats />
        {/* </>
              }
            /> */}

        {/* <Route path="about" element={<div>I am from about</div>} /> */}
        {/* <Route path="*" element={<div>404 Not Found</div>} /> */}
        {/* </Routes> */}
      </div>
      {/* </BrowserRouter> */}
    </FeedbackProvider>
  );
}
export default App;
