import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home/Home';
import Header from '@/components/Header/Header';


const App = () => {

  return (
    <main className='main'>
      <Header />
      <div className='container'>

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/destination" element={<>destination</>} />
        <Route path="/crew" element={<>crew</>} />
        <Route path="/tehnology" element={<>tehnology</>} />
      </Routes>

      </div>
    </main>
  );
};

export default App;
