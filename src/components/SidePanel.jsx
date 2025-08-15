import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './SidePanel.css';

const SidePanel = () => {
  const location = useLocation();
  
  const menuItems = [
    { path: "/", name: "Item Registration", icon: "bi-box-seam" },
    { path: "/root-master", name: "Rout Master", icon: "bi-diagram-2" },
    { path: "/employee-master", name: "Employee Master", icon: "bi-people" }
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
            active={location.pathname === item.path}
            className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
          >
            <i className={`bi ${item.icon}`}></i>
            <span>{item.name}</span>
          </Nav.Link>
        ))}
      </Nav>
    </aside>
  );
};

export default SidePanel;