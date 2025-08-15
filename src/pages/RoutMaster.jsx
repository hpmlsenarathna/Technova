import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Panel from '../components/Panel';
import { FaSave, FaTrash } from 'react-icons/fa';

const RoutMaster = () => {
  const [routName, setRoutName] = useState('');

  const handleSave = (e) => {
    e.preventDefault();
    console.log('Saving route:', routName);
    alert('Route saved successfully!');
  };

  const handleDelete = () => {
    console.log('Deleting route:', routName);
    alert('Route deleted successfully!');
    setRoutName('');
  };

  const inputStyle = {
    borderColor: '#4CAF50',
    height: '40px',
    width: '50%'
  };

  const labelStyle = {
    color: '#2E7D32'
  };

  return (
    <Panel title="Route Master File" style={{ borderColor: '#4CAF50' }}>
      <Form onSubmit={handleSave}>
        <Form.Group className="mb-3" controlId="formRoutName">
          <Form.Label style={labelStyle}>Route Name</Form.Label>
          <Form.Control
            type="text"
            value={routName}
            onChange={(e) => setRoutName(e.target.value)}
            required
            style={inputStyle}
          />
        </Form.Group>

        <div className="d-flex justify-content-end mt-4">
          <Button
            variant="danger"
            onClick={handleDelete}
            style={{ width: '150px', marginRight: '10px' }}
          >
            <FaTrash style={{ marginRight: '8px' }} /> Delete
          </Button>
          <Button
            variant="success"
            type="submit"
            style={{ width: '150px' }}
          >
            <FaSave style={{ marginRight: '8px' }} /> Save
          </Button>
        </div>
      </Form>
    </Panel>
  );
};

export default RoutMaster;