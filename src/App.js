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
    <>
      <Scrollbar
        damping="0.4"
        plugins={{
          overscroll: {
            effect: 'bounce',
          }
        }} >
        <Router>
          <link href='https://fonts.googleapis.com/css?family=Nunito' rel='stylesheet' />
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            <Analytics />
          </div>
        </Router>
      </Scrollbar>
    </>
  );
}

export default App;
