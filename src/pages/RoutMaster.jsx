import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Panel from '../components/Panel';

const RoutMaster = () => {
  const [routName, setRoutName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Rout name:', routName);
    alert('Rout master saved successfully!');
  };

  return (
    <Panel title="Rout Master File">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formRoutName">
          <Form.Label>Rout Name</Form.Label>
          <Form.Control
            type="text"
            value={routName}
            onChange={(e) => setRoutName(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save Rout
        </Button>
      </Form>
    </Panel>
  );
};

export default RoutMaster;