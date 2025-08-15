import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Panel from '../components/Panel';

const RootMaster = () => {
  const [rootName, setRootName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Root name:', rootName);
    alert('Root master saved successfully!');
  };

  return (
    <Panel title="Root Master File">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formRootName">
          <Form.Label>Root Name</Form.Label>
          <Form.Control
            type="text"
            value={rootName}
            onChange={(e) => setRootName(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save Root
        </Button>
      </Form>
    </Panel>
  );
};

export default RootMaster;