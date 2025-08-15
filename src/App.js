import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SidePanel from './components/SidePanel';
import ItemRegistration from './pages/ItemRegistration';
import RoutMaster from './pages/RoutMaster'; // Changed import name to match the file
import EmployeeMaster from './pages/EmployeeMaster';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <SidePanel />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<ItemRegistration />} />
            <Route path="/rout-master" element={<RoutMaster />} /> {/* Corrected the path to match the SidePanel link */}
            <Route path="/employee-master" element={<EmployeeMaster />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;