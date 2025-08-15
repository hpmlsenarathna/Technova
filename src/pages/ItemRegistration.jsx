import { useState } from 'react';
import { Form, Button, ButtonGroup } from 'react-bootstrap';
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

  const handleAdd = () => {
    console.log('Adding item:', formData);
    alert('Item added successfully!');
  };

  const handleUpdate = () => {
    console.log('Updating item:', formData);
    alert('Item updated successfully!');
  };

  const handleDelete = () => {
    console.log('Deleting item:', formData);
    alert('Item deleted successfully!');
  };

  return (
    <Panel title="Item Registration">
      <Form>
        {/* Category Selection */}
        <Form.Group className="mb-2" controlId="formCategory">
          <Form.Label className="mb-1">Category</Form.Label>
          <Form.Select
            name="category"
            value={formData.category}
            onChange={handleChange}
            size="sm"
            style={{ width: '70%', height: '32px' }}
          >
            {categories.map((cat, index) => (
              <option key={index} value={cat}>{cat}</option>
            ))}
          </Form.Select>
        </Form.Group>

        {/* Item Name */}
        <Form.Group className="mb-2" controlId="formName">
          <Form.Label className="mb-1">Item Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            size="sm"
            style={{ width: '70%', height: '32px' }}
          />
        </Form.Group>

        {/* Price */}
        <Form.Group className="mb-3" controlId="formPrice">
          <Form.Label className="mb-1">Price (Rs.)</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            size="sm"
            style={{ width: '70%', height: '32px' }}
          />
        </Form.Group>

        {/* Action Buttons - Uniform Sizes */}
        <div className="d-flex gap-2 mt-2">
          <Button 
            variant="primary"
            onClick={handleAdd}
            className="flex-grow-1 py-1"
            style={{ minWidth: '80px' }}
          >
            Add
          </Button>
          <Button 
            variant="primary"
            onClick={handleUpdate}
            className="flex-grow-1 py-1"
            style={{ minWidth: '80px' }}
          >
            Update
          </Button>
          <Button 
            variant="primary"
            onClick={handleDelete}
            className="flex-grow-1 py-1"
            style={{ minWidth: '80px' }}
          >
            Delete
          </Button>
        </div>
      </Form>
    </Panel>
  );
};

export default ItemRegistration;