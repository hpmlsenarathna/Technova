import { Card } from 'react-bootstrap';

const Panel = ({ title, children }) => {
  return (
    <Card className="mb-4 shadow">
      <Card.Header className="bg-success text-white">
        <h4>{title}</h4>
      </Card.Header>
      <Card.Body>
        {children}
      </Card.Body>
    </Card>
  );
};

export default Panel;