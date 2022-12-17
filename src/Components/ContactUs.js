import React,{useState} from 'react'
import { TextField, Button } from '@mui/material';

const ContactUs = () => {
  
  const[user,setUser]=useState({name:'',email:'',message:''})

  const changeName=(e)=>{
    setUser({...user,name:e.target.value})
  }

  const changeEmail=(e)=>{
    setUser({...user,email:e.target.value})
  }
  const changeMessage=(e)=>{
    setUser({...user,message:e.target.value})
  }

  const afterSubmit=()=>{
    return alert('Submitted')
  }

  return (
    <body className='contactBody'>
    <div>
      <form onSubmit={afterSubmit}>

  <br/>
      <TextField variant='outlined' label='Full Name' type='text' value={user.name} onChange={changeName} required fullWidth/><br/><br/>
      <TextField variant='outlined' label='Email Address' type='email' value={user.email}  onChange={changeEmail} required fullWidth/><br/> <br/>
      <TextField variant='outlined' label='Comment' multiline rows={4} value={user.message}  onChange={changeMessage} required fullWidth/><br/><br/>
      <Button className='submitBtn' type='submit' variant='contained' >Submit</Button>
</form>
{/* <div className='results'>
<h1>Full Name is {user.name}</h1>
<h1>Email Address is {user.email}</h1>
<h1>Message is {user.message}</h1><br/>
</div> */}
    </div>
    </body>
  )
}

export default ContactUs