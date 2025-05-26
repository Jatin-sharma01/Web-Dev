import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainScreen from './containers/MainScreen';
import Signup from './containers/Student/Signup';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<MainScreen/>}/>  
      <Route path="/student-signup" element={<Signup/>}/>  
      </Routes>
    </Router>
  );
}

export default App;
