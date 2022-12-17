import React,{useEffect, useState} from 'react'
import user from '../Images/user.png'
import like from '../Images/like.png'
import Comments from './Comments'
import Box from "@mui/material/Box";
import { Button, TextField } from '@mui/material';

const UserCom = () => {
   
const [userN, setUserN] = useState({username:'',comment:''})
const [likes, setlikes] = useState(120);
const changeUserName = (e) =>{
  setUserN({...userN,username:e.target.value})
}

const changeComment = (e) =>{
  setUserN({...userN,comment:e.target.value})
}

function useForceUpdate(){
  const [value, setValue] = useState(0);
  return () => setValue(value => value + 1); 
}

const forceUpdate = useForceUpdate();



const postComment =(e)=>{
  e.preventDefault();
  Comments.push({username:userN.username,comment:userN.comment});
  forceUpdate();
};


  return (
    <div>
       {likes} &nbsp;<input type='image' width='30px' src={like} onClick={()=>setlikes(likes+1)}/> &emsp;
      <h3>Enter Comments Below</h3>
      <form onSubmit={postComment}>
      <TextField variant='outlined' label='Username' value={userN.username} onChange={changeUserName} fullWidth required/><br/>
      <TextField variant='outlined' label='Enter Comment' value={userN.comment} onChange={changeComment} fullWidth required/><br/><br/>
      <Button variant='contained' fullWidth size='small' type='Submit'>Add Comment</Button>
      </form>
<h3>Comments:</h3>
{Comments.map((Comm)=>(
   <Box sx={{width:'100%',height:100,backgroundColor:'primary.light',borderRadius:3}}>
  <h4 className='useremail'>
  <img src={user} alt='UserEmail' className='userimg'/>&emsp;
  {Comm.username}
  </h4>
  <div className='usercomments'>
    {Comm.comment}
</div>
</Box>
 ))}
    
    </div>    
  )
}
export default UserCom