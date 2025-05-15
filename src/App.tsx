import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Header from '@/components/Header/Header';


const App = () => {

  return (
    <main className='main'>
      <Header />

      <div className='container'>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Home />}
              />
            <Route path="/game" element={<></>} />
          </Routes>
        </Router>
      </div>
    </main>
  );
};

export default App;
