import React, { useState } from 'react';
import '../Form.css'; // Ensure correct import

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
          <label>Name</label>
          <input type="text" name="name" className="form-input" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group" style={{width: "100%"}}>
          <label>Surname</label>
          <input type="text" name="surname" className="form-input" value={formData.surname} onChange={handleChange} />
        </div>
      </div>
      <div className="form-group">
        <label>Age</label>
        <input type="text" name="age" className="form-input" value={formData.age} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Nationality</label>
        <input type="text" name="nationality" className="form-input" value={formData.nationality} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Occupation</label>
        <input type="text" name="occupation" className="form-input" value={formData.occupation} onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Income</label>
        <input type="text" name="income" className="form-input" value={formData.income} onChange={handleChange} />
      </div>
      <button type="submit" className='form-button'>Continue</button>
    </form>
  );
};

export default Form;
