import main from './Images/Main.jpg'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardMedia, Grid,CardActions,CardContent,Button,Typography, Link } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Posts from './PostContent'


const HomePage = () => {
  const newsNavigate = useNavigate()


  return (
    <body className='homePage'>
      
    <div className='headerTitle'><h1 className='title'>All Blog</h1></div>
    <img src={main} className='mainImg'/><br/><br/>
<Grid container spacing={2} className='nowtrending'>

{Posts.map((Post,key)=>(

  <Grid item xs={12} md={6} lg={4}>
      <Card sx={{margin:'10px', width: 400,height:670}}>
        <CardMedia component='img' height='300px' image={Post.imgsrc} alt={Post.imgdes} />
        <CardContent>
        <Typography variant="caption" color="text.secondary">
        <Link href="#" onClick={()=>newsNavigate(`${Post.category}`)} underline="hover">{Post.category}</Link> 
        <a> {Post.date} </a><br/>
        <AccountCircleIcon fontSize='small'/><a> {Post.author} </a> 
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
        {Post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {Post.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" key={key} onClick={() => newsNavigate(`${Post.name}`)}>Read More</Button>
      </CardActions>

      </Card>
      </Grid>
))}
</Grid>







      </body>
  )
}

export default HomePage