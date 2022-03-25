import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar'
import './App.css';
import Eratani from './Pages/Eratani';
import Question1 from './Components/Question1'
import Question2 from './Components/Question2'
import Question3 from './Components/Question3'
import Question4 from './Components/Question4'
import Question5 from './Components/Question5'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Eratani />} />
        <Route exact path="/question1" element={<Question1 />} />
        <Route exact path="/question2" element={<Question2 />} />
        <Route exact path="/question3" element={<Question3 />} />
        <Route exact path="/question4" element={<Question4 />} />
        <Route exact path="/question5" element={<Question5 />} />
      </Routes>
    </Router>
  );
}

export default App;
