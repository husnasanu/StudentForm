 
    import React, { useState } from 'react';
    import './App.css';
    
    function App() {
      const [formData, setFormData] = useState({
        name: '',
        address: '',
        mobile: '',
        email: '',
        gender: '',
        dob: '',
        course: '',
      });
    
      const [errors, setErrors] = useState({});
    
      // Handle input change
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      // form validation
      const validate = () => {
        let newErr = {};
    
        if (!formData.name) newErr.name = 'Name is required';
        if (!formData.address) newErr.address = 'Address is required';
        if (!formData.mobile) newErr.mobile = 'Mobile is required';
        else if (!/^\d{10}$/.test(formData.mobile)) newErrors.mobile = 'Enter a valid 10-digit mobile number';
        
        if (!formData.email) newErr.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErr.email = 'Enter a valid email address';
    
    
        if (!formData.gender) newErr.gender = 'Gender is required';
        if (!formData.dob) newErr.dob = 'Date of birth is required';
        if (!formData.course) newErr.course = 'Course selection is required';
         return newErr;
      };
    
      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        setErrors(validationErrors);
    
        if (Object.keys(validationErrors).length === 0) {
          alert( 
            `Data stored successfully: 👍✅
            *************************
            Name: ${formData.name}
            Address: ${formData.address}
            Mobile: ${formData.mobile}
            Email: ${formData.email}
            Gender: ${formData.gender}
            Date of Birth: ${formData.dob}
            Course: ${formData.course}`
          );
          // Reset form after submit
          setFormData({
            name: '',
            address: '',
            mobile: '',
            email: '',
            gender: '',
            dob: '',
            course: '',
          });
          setErrors({});
        }
      };
    
      // reset All
      const handleCancel = () => {
        setFormData({
          name: '',
          address: '',
          mobile: '',
          email: '',
          gender: '',
          dob: '',
          course: '',
        });
        setErrors({});
      };
    
      return (
        <>
          <div className='container p-4 shadow' style={{ maxWidth: '700px', marginTop: '60px', backgroundColor: 'beige', border: '2px solid aqua', borderRadius: '20px' }}>
            <h1 className='text-center'>Registration Form</h1>
            
            <label>Name</label>
            <input type="text" className='form-control' name="name" value={formData.name}
             onChange={handleChange} placeholder='Enter Name' />
            {errors.name && <div className="text-danger">{errors.name}</div>}
    
            <label>Address</label>
            <input type="text" className='form-control' name="address" value={formData.address}
             onChange={handleChange} placeholder='Enter Address' />
            {errors.address && <div className="text-danger">{errors.address}</div>}
    
            <label>Mobile</label>
            <input type="text" className='form-control' name="mobile" value={formData.mobile}
             onChange={handleChange} placeholder='Enter Mobile' />
            {errors.mobile && <div className="text-danger">{errors.mobile}</div>}
    
            <label>Email</label>
            <input type="text" className='form-control' name="email" value={formData.email}
             onChange={handleChange} placeholder='abc@gmail.com' />
            {errors.email && <div className="text-danger">{errors.email}</div>}
    
            <label>Gender</label>
            <select className="form-select" name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <div className="text-danger">{errors.gender}</div>}
    
            <label>D.O.B</label>
            <input type="date" className='form-control' name="dob" value={formData.dob} onChange={handleChange} placeholder='dd-mm-yyyy' />
            {errors.dob && <div className="text-danger">{errors.dob}</div>}
    
           
            <label>Course</label><br />
            <input type="radio" name="course" value="Biology" checked={formData.course === 'Biology'}
             onChange={handleChange} /> Biology
            <input type="radio" className='mx-3' name="course" value="CS" checked={formData.course === 'CS'}
             onChange={handleChange} /> Computer Science
            <input type="radio" className='mx-3' name="course" value="Commerce" checked={formData.course === 'Commerce'}
             onChange={handleChange} /> Commerce
            <input type="radio" className='mx-3' name="course" value="Humanities" checked={formData.course === 'Humanities'} 
            onChange={handleChange} /> Humanities
            {errors.course && <div className="text-danger">{errors.course}</div>}
    
    
            <div className='text-center mt-5'>
              <button onClick={handleSubmit} className='btn btn-success mx-3 px-4' type='submit'>Submit</button>
              <button onClick={handleCancel} className='btn btn-danger mx-3 px-4' type='button'>Cancel</button>
            </div>
          </div>
        </>
      );
    }
    
    export default App;
    
       