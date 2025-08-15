import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import ItemRegistration from './pages/ItemRegistration';
import RootMaster from './pages/RootMaster';
import EmployeeMaster from './pages/EmployeeMaster';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<ItemRegistration />} />
          <Route path="/root-master" element={<RootMaster />} />
          <Route path="/employee-master" element={<EmployeeMaster />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;