import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <main className="app">
      <div className="container">
        <Router>
          <Routes>
            <Route path="/" element={<>space</>} />
            {/* <Route path="/quiz/:category" element={<></>} /> */}
            {/* <Route path="/result" element={<></>} /> */}
          </Routes>
        </Router>
      </div>
    </main>
  );
}

export default App;
