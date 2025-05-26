import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainScreen from './containers/MainScreen';
import Signup from './containers/Student/Signup';
import Teacher from './containers/Teacher/Signup';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<MainScreen/>}/>  
      <Route path="/student-signup" element={<Signup/>}/>  
      <Route path="/teacher-signup" element={<Teacher/>}/>  
      </Routes>
    </Router>
  );
}

export default App;
