import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import NavBar from './components/Navbar';
import NextPage from './NextPage';
import NextPrevious from './components/NextPrevious';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className={`bg-[url("https://i.pinimg.com/474x/da/e4/0e/dae40e5fcb081d0fac4fe6733cc49046.jpg")] bg-no-repeat bg-cover bg-center text-white py-10`}>
        <NavBar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/next' element={<NextPage />} />
          </Routes>
        <NextPrevious />
      </div>
    </>
  )
}

export default App
