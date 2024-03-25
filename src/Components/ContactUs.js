import React,{useState} from 'react'
import { TextField, Button,Box } from '@mui/material';

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
    <div style={{display:'flex', justifyContent:'center'}}>
      <form style={{width:"100%", display: 'flex',justifyContent: 'center'}} onSubmit={afterSubmit}>
        <Box sx={{width:{xs:'100%',lg:'50%'}}}>
          <TextField sx={{marginTop:4}} variant='outlined' label='Full Name' type='text' value={user.name} onChange={changeName} required fullWidth/>
          <TextField sx={{marginTop:4}} variant='outlined' label='Email Address' type='email' value={user.email}  onChange={changeEmail} required fullWidth/>
          <TextField sx={{marginTop:4}} variant='outlined' label='Comment' multiline rows={4} value={user.message}  onChange={changeMessage} required fullWidth/>
          <Button sx={{marginTop:4}} className='submitBtn' type='submit' variant='contained' >Submit</Button>
        </Box>
      </form>
    </div>
    </body>
  )
}

export default ContactUs
