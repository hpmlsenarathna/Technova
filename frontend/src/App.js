import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SidePanel from "./components/SidePanel";
import ItemRegistration from "./pages/ItemRegistration";
import RoutMaster from "./pages/RoutMaster";
import EmployeeMaster from "./pages/EmployeeMaster";
import TestConnection from "./pages/TestConnection"; // 👈 add this

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <SidePanel />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<ItemRegistration />} />
            <Route path="/rout-master" element={<RoutMaster />} />
            <Route path="/employee-master" element={<EmployeeMaster />} />
            <Route path="/test" element={<TestConnection />} /> {/* 👈 New route */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
