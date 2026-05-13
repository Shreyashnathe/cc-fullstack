import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import TasksPage from './pages/TasksPage';
import AboutPage from './pages/AboutPage';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app-root">
        <Navbar />
        <div className="page-content">
          <Routes>
            <Route path="/" element={<TasksPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
