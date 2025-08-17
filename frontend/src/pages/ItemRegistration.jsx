import { useState } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';
import Panel from '../components/Panel';
import { FaSave, FaTrash, FaEdit, FaTimes } from 'react-icons/fa';

const ItemRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    category: 'Plastic'
  });

  const categories = ['Plastic', 'Pots', 'Flower Pots', 'Ceramic', 'Metal'];

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

  const handleClear = () => {
    setFormData({ name: '', price: '', category: 'plastic' });
  };

  const inputWidth = '50%';
  const labelStyle = { color: 'black' };

  return (
    <Panel title="Item Registration" style={{ borderColor: '#4CAF50' }}>
      <Form>
        {/* Category Selection */}
        <Form.Group className="mb-3" controlId="formCategory">
          <Form.Label style={labelStyle}>Category</Form.Label>
          <Form.Select
            name="category"
            value={formData.category}
            onChange={handleChange}
            style={{
              borderColor: '#ced4da', // Changed to light grey
              height: '40px',
              width: inputWidth
            }}
          >
            {categories.map((cat, index) => (
              <option key={index} value={cat} style={{ padding: '8px' }}>
                {cat}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        {/* Item Name */}
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label style={labelStyle}>Item Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            style={{
              borderColor: '#ced4da', // Changed to light grey
              height: '40px',
              width: inputWidth
            }}
            placeholder="Enter Item Name"
          />
        </Form.Group>

        {/* Price Input */}
        <Form.Group className="mb-4" controlId="formPrice">
          <Form.Label style={labelStyle}>Price (Rs.)</Form.Label>
          <Form.Control
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            required
            style={{
              borderColor: '#ced4da', // Changed to light grey
              height: '40px',
              width: inputWidth
            }}
            placeholder="Enter Price"
          />
        </Form.Group>

        {/* Action Buttons */}
        <div className="d-flex justify-content-between">
          <Button
            variant="outline-danger"
            onClick={handleClear}
            style={{ width: '23%' }}
          >
            <FaTimes style={{ marginRight: '5px' }} /> Clear
          </Button>
          <Button
            variant="danger"
            onClick={handleDelete}
            style={{ width: '23%' }}
          >
            <FaTrash style={{ marginRight: '5px' }} /> Delete
          </Button>
          <Button
            variant="warning"
            onClick={handleUpdate}
            style={{ width: '23%', color: 'white' }}
          >
            <FaEdit style={{ marginRight: '5px' }} /> Update
          </Button>
          <Button
            variant="success"
            onClick={handleAdd}
            style={{ width: '23%' }}
          >
            <FaSave style={{ marginRight: '5px' }} /> Save
          </Button>
        </div>
      </Form>
    </Panel>
  );
};

export default ItemRegistration;