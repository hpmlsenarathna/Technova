import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Panel from '../components/Panel';

const ItemRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: 'plastic'
  });

  const categories = ['plastic', 'pots', 'flower pots', 'ceramic', 'metal'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Item submitted:', formData);
    alert('Item registered successfully!');
  };

  return (
    <Panel title="Item Registration">
      <Form onSubmit={handleSubmit}>
        {/* Category Selection (First) */}
        <Form.Group className="mb-3" controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Select
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            {categories.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Row className="mb-3">
          {/* Item Name (Second) */}
          <Form.Group as={Col} controlId="formName">
            <Form.Label>Item Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          {/* Price (Third) */}
          <Form.Group as={Col} controlId="formPrice">
            <Form.Label>Price (Rs.)</Form.Label>
            <Form.Control
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              required
            />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          Register Item
        </Button>
      </Form>
    </Panel>
  );
};

export default ItemRegistration;