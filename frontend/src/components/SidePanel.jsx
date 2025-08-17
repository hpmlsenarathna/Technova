import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './SidePanel.css';

const SidePanel = () => {
  const location = useLocation();

  const menuItems = [
    { path: "/", name: "Item Registration" },
    { path: "/rout-master", name: "Route Master" },
    { path: "/employee-master", name: "Employee Master" }
  ];

  return (
    <aside className="side-panel">
      <div className="brand">
        <h3>Saniro Enterprises</h3>
      </div>
      <Nav className="flex-column">
        {menuItems.map((item) => (
          <Nav.Link
            as={Link}
            to={item.path}
            key={item.path}
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <span>{item.name}</span>
          </Nav.Link>
        ))}
      </Nav>
    </aside>
  );
};

export default SidePanel;