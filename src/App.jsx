import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
