import { Button, FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React, { useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import PostContent from './PostContent';
import { useNavigate } from 'react-router-dom';
const AddPost = () => {
 
const [post,setPost] = useState({name:'',title:'',content:'',author:'',category:'',imgsrc:'',imgdes:''})
const [img, setImg] = useState();
var today = new Date();
const navigate = useNavigate();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); 
var yyyy = today.getFullYear();
today = dd + '-'+ mm  + '-' + yyyy;

const changeName=(e)=>{
  setPost({...post,name:e.target.value})
}

const changeTitle=(e)=>{
  setPost({...post,title:e.target.value})
}

const changeContent=(e)=>{
  setPost({...post,content:e.target.value})
}
const changeCategory=(e)=>{
  setPost({...post,category:e.target.value})
}

const changeAuthor=(e)=>{
  setPost({...post,author:e.target.value})
}

const changeImgdes=(e)=>{
  setPost({...post,imgdes:e.target.value})
}

const changeImgsrc = (e) => {
  const [file] = e.target.files;
  setImg(URL.createObjectURL(file));
};


const pushArr = (e)=>{
  e.preventDefault();
  PostContent.push(
    {
      name:post.name,
      title:post.title, 
      content:post.content,
      author:post.author,
      category:post.category,
      imgdes:post.name,
      date:today,
      imgsrc:img
    });
    navigate('/');
  return(alert('Post Created Check HomePage'));
}
return (
    <div>
<form onSubmit={pushArr}>
<br/>      
<Button variant="contained" component="label">
  <AddCircleIcon /> Add Image Of Post
  <input type="file" hidden accept="image/*" onChange={changeImgsrc}/>
</Button>
<TextField variant='outlined' label='Image Caption' value={post.imgdes} onChange={changeImgdes} fullWidth required/><br/><br/><br/>
<TextField variant='outlined' label='Post Name' value={post.name} onChange={changeName} fullWidth required/><br/><br/>
<TextField variant='outlined' label='Title' value={post.title} onChange={changeTitle} fullWidth required/><br/><br/>
<TextField variant='outlined' label='Author Name' value={post.author} onChange={changeAuthor} fullWidth required/><br/><br/>
<TextField variant='outlined' label='Body' value={post.content} onChange={changeContent} multiline rows={5} fullWidth required/><br/><br/>
<FormControl fullWidth>
<InputLabel id="select-label">Category</InputLabel>
<Select value={post.category} labelId="select-label" label='Category' onChange={changeCategory}>
  <MenuItem value='Technology'>Technology</MenuItem>
  <MenuItem value='CurrentAffairs'>CurrentAffairs</MenuItem>
  <MenuItem value='Eatries'>Eatries</MenuItem>
</Select>
</FormControl>
     <Button variant='contained' fullWidth size='small' type='Submit'>Add Post</Button>
</form>



    </div>
  )
}

export default AddPost
