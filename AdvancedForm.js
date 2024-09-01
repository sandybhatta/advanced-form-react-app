import React, { useState } from 'react';

// function AdvancedForm() {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '', age: '' });
//   const [errors, setErrors] = useState({});

//   const validate = (name, value) => {
//     let error = '';
//     switch (name) {
//       case 'email':
//         // Simple email validation: check for the presence of "@" and "."
//         if (!value.includes('@') || !value.includes('.')) {
//           error = 'Email is invalid';
//         }
//         break;
//       case 'password':
//         if (value.length < 8) {
//           error = 'Password must be at least 8 characters long';
//         }
//         break;
//       case 'confirmPassword':
//         if (value !== formData.password) {
//           error = 'Passwords do not match';
//         }
//         break;
//       case 'age':
//         if (isNaN(value) || value <= 0) {
//           error = 'Age must be a positive number';
//         }
//         break;
//       default:
//         break;
//     }
//     setErrors({ ...errors, [name]: error });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//     validate(name, value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Process formData
//     console.log('Submitted:', formData);
//   };

//   const isFormValid = !Object.values(errors).some(error => error !== '') && Object.values(formData).every(field => field !== '');

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
//       <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
//       {errors.email && <p>{errors.email}</p>}
//       <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
//       {errors.password && <p>{errors.password}</p>}
//       <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
//       {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
//       <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} />
//       {errors.age && <p>{errors.age}</p>}
//       <button type="submit" disabled={!isFormValid}>Submit</button>
//     </form>
//   );
// }
function AdvancedForm(){
    const[formData,setFormData]=useState({name:'',email:'',pass:'',confPass:'',age:''})
    const[errors,setError]=useState({})

    function handleChange(e){
        const{name,value}=e.target
        setFormData({...formData,[name]:value})
        handleValidity(name,value)
    }
    function handleValidity(name,value){
        let error=''
        switch (name) {
            case 'email':
                if(!value.includes('@')||!value.includes('gmail.com')){
                    error='email thik kar apna '
                }
                break;
            case 'name':
                if(value.charCodeAt(0)>=97 && value.charCodeAt(0)<=122){
                   error='naam pascal case mai kar pehle'
                }
                break;
            case 'pass':
                if(value.length<8){
                   error='password mai jow nhi hai'
                }
                break;
           
            case 'confPass':
                if(formData.pass!==value && value.length>=formData.pass.length){
                   error='confirm pass galat hai bhai'
                }
                break;
            case 'age':
                if(value<18){
                   error='voting nahi kar payega'
                }
                break;
            default:
                break;
        }
        setError({...errors,[name]:error})
    }


    return(
        <>
        <div> <input type='text' name='name' placeholder='enter your name' value={formData.name} onChange={handleChange} />
        {errors.name && <p>{errors.name}</p>}
        </div>

        <div> <input type='text' name='age' placeholder='enter your age' value={formData.age} onChange={handleChange} /> 
        {errors.age && <p>{errors.age}</p>}
        </div>

        <div> <input type='email' name='email' placeholder='enter your email' value={formData.email} onChange={handleChange} /> 
        {errors.email && <p>{errors.email}</p>}
        </div>
        
        <div> <input type='text' name='pass' placeholder='enter your password' value={formData.pass} onChange={handleChange} /> 
        {errors.pass && <p>{errors.pass}</p>}
        </div>
        
        <div> <input type='text' name='confPass' placeholder='confirm password' value={formData.confPass} onChange={handleChange} /> 
        {errors.confPass && <p>{errors.confPass}</p>}
        </div>
  
        </>
        
    )
}
export default AdvancedForm;
