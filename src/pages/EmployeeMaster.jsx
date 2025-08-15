import { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import Panel from '../components/Panel';
import { FaSave, FaTrash } from 'react-icons/fa';

const EmployeeMaster = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    contact: '',
    nic: '',
    designation: '',
    gender: 'male',
    dob: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log('Saving employee data:', formData);
    alert('Employee saved successfully!');
  };

  const handleDelete = () => {
    console.log('Deleting employee:', formData.name);
    alert('Employee deleted successfully!');
    // Logic to clear the form or handle deletion from a data source
    setFormData({
      name: '',
      address: '',
      contact: '',
      nic: '',
      designation: '',
      gender: 'male',
      dob: ''
    });
  };

  const inputStyle = {
    borderColor: '#4CAF50',
    height: '40px'
  };

  const labelStyle = {
    color: '#2E7D32'
  };

  return (
    <Panel title="Employee Master File" style={{ borderColor: '#4CAF50' }}>
      <Form onSubmit={handleSave}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formName">
            <Form.Label style={labelStyle}>Employee Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formContact">
            <Form.Label style={labelStyle}>Contact Number</Form.Label>
            <Form.Control
              type="tel"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Label style={labelStyle}>Address</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            style={{ ...inputStyle, height: 'auto' }}
          />
        </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formNIC">
            <Form.Label style={labelStyle}>NIC Number</Form.Label>
            <Form.Control
              type="text"
              name="nic"
              value={formData.nic}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formDesignation">
            <Form.Label style={labelStyle}>Designation</Form.Label>
            <Form.Control
              type="text"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGender">
            <Form.Label style={labelStyle}>Gender</Form.Label>
            <Form.Select
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formDOB">
            <Form.Label style={labelStyle}>Date of Birth</Form.Label>
            <Form.Control
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </Form.Group>
        </Row>

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
            <FaSave style={{ marginRight: '8px' }} /> Save Employee
          </Button>
        </div>
      </Form>
    </Panel>
  );
};

export default EmployeeMaster;