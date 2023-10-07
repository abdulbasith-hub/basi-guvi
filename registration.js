import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
function Register(){
	const [name, setName] = useState(' ')
	const [age, setAge] = useState(' ')
	const [gender, setGender] = useState(' ')
	const [dob, setDOB] = useState(' ')
	const [mobile, setMobileno] = useState(' ')
	function handleSubmit(event){
		event.preventDefault();
		axios.post('http://localhost:8081/registration',{name,age,gender,dob,mobile})
		.then(res => console.log(res))
		.catch(err => console.log(err));
	}
	return (
	<div className='d-flex vh-100 justify-content-center align-items-center bg-primary'>
	<div className='p-3 bg-white w-25'>
	<form onSubmit={handleSubmit}>
	<div className='mb-3'>
	<label htmlFor="Name">Name</label>
	<input type="text" placeholder="Enter Name" className='form-control' onChange={e => setName(e.target.value)} required/>
	</div>
	<div className='mb-3'>
	<label htmlFor="Age">Age</label>
	<input type="text" placeholder="Enter Age" className='form-control' onChange={e => setAge(e.target.value)} required/>
	</div>
	<div className='mb-3'>
	<label htmlFor="Gender">Gender</label>
	<input type="radio" name="gender" className='form-control' onChange={e => setGender(e.target.value)}/>
	<input type="radio" name="gender" className='form-control' onChange={e => setGender(e.target.value)}/>
	</div>
<div className='mb-3'>
	<label htmlFor="DOB">Age</label>
	<input type="date" className='form-control' onChange={e => setDOB(e.target.value)} required/>
	</div>
	<div className='mb-3'>
	<label htmlFor="MobileNo">Mobile Number</label>
	<input type="number" max=10 placeholder="Enter Mobile No" className='form-control' onChange={e => setMobileno(e.target.value)} required/>
	</div>
	<button className='btn btn-success'>Register</button>
	</form>
	</div>
	</div>
	)
}
export default Register