import React, { useState } from 'react';
import '../Form.css'; // Ensure correct import
import Button from './Button';

const Form = ({onSubmit}) => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    age: '',
    nationality: '',
    occupation: '',
    income: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  }


  return (
    <form className="form" onSubmit={handleSubmit}>
    <div className='personal-details'>
      <div className="form-group" style={{width: "100%"}}>
        <input type="text" name="name" className="form-input" value={formData.name} onChange={handleChange} placeholder='Name'/>
      </div>
      <div className="form-group" style={{width: "100%"}}>
        <input type="text" name="surname" className="form-input" value={formData.surname} onChange={handleChange} placeholder='Surname' />
      </div>
    </div>
    <div className="form-group">
      <input type="text" name="age" className="form-input" value={formData.age} onChange={handleChange} placeholder='Age'/>
    </div>
    <div className="form-group">
      <input type="text" name="nationality" className="form-input" value={formData.nationality} onChange={handleChange} placeholder='Nationality'/>
    </div>
    <div className="form-group">
      <input type="text" name="occupation" className="form-input" value={formData.occupation} onChange={handleChange} placeholder='Occupation'/>
    </div>
    <div className="form-group">
      <input type="text" name="income" className="form-input" value={formData.income} onChange={handleChange} placeholder='Occupation' />
    </div>
    <Button className='form' text="Continue" />
  </form>
  );
};

export default Form;
