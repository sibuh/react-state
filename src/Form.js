import './style.css'
import React  from "react";
export default function Form(){
    const[formData,setFormData]=React.useState(
        {
            password:"",
            cpassword:"",
            email:"",
            wantToJoin:false
        })
    console.log(formData)
    function handleFormData(event){
        const{name,type,value,checked}=event.target
        setFormData(prevData=>{
            return{
                ...prevData,
                [name]:type==="checkbox"?checked:value
            }
        })
    }
    function handleSubmit(event){
        event.preventDefault()
        formData.password===formData.cpassword?console.log("form data",formData):console.log("password and confirmation passwords are not equal")
        
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
        <input 
        className='input'
        type="text"
        placeholder="password"
        name="password"
        value={formData.password}
        onChange={handleFormData}
         />
        <input 
         className='input'
        type="text"
        placeholder="confirm password"
        name="cpassword"
        value={formData.cpassword}
        onChange={handleFormData}

         />
        <input 
         className='input'
        type="text"
        placeholder="Email"
        name="email"
        onChange={handleFormData}
        value={formData.email}
         />
         <div className='check'> 
            <input
            type="checkbox"
            id="wantToJoin"
            checked={formData.wantToJoin}
            name="wantToJoin"
            onChange={handleFormData}
            />
            <label htmlFor="wantToJoin">I want to join news letter</label>
         </div>
         <input className='btn'
          type="submit"
          value="sign up"
          onChange={handleFormData}
          />
        </form>
    )
}