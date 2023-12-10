import './App.css';
import './style.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import { Analytics } from '@vercel/analytics/react';
import { Scrollbar } from 'smooth-scrollbar-react';

function App() {
  return (
    <Router>
      <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet' />
      <div className="App">
        <Scrollbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Scrollbar>
        <Analytics />
      </div>
    </Router>
  );
}

export default App;
