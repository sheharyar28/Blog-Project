import main from './Images/Main.jpg'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box,Card, CardMedia, Grid,CardActions,CardContent,Button,Typography, Link,Container } from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Posts from './PostContent'


const HomePage = () => {
  const newsNavigate = useNavigate()
  const styles = {
    HeaderImg: {
        width:'100%',
        height:'600px',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
        backgroundImage: `url(${main})`
    }
};

  return (
    <div className='homePage'>
    <div style={{position:'relative'}}>
    <Typography sx={{ fontSize:{xs:'60px',md:'100px'},  letterSpacing: 9 ,textAlign:'center',marginBottom:{xs:'-50px',md:'-70px'},color:'white'}}>All Blog</Typography>    
      <div className='headerTitle' style={styles.HeaderImg}>
      </div>
      
    </div>
    <Container maxWidth="xl">


    <Typography sx={{ fontSize:'60px',  letterSpacing: 9 ,textAlign:'center',color:'white'}}>News Events</Typography>    
<Grid sx={{paddingLeft:'20px',paddingRight:'20px'}} container spacing={2} className='nowtrending' alignItems="center" justifyContent="center">

{Posts.map((Post,key)=>(

  <Grid key={key} item xs={12} md={6} lg={4}>
      <Card sx={{margin:'10px'}}>
        <CardMedia component='img' height='300px' image={Post.imgsrc} alt={Post.imgdes} />
        <CardContent sx={{height:180}}>
        <Typography variant="caption" color="text.secondary">
          <Link href="#" onClick={()=>newsNavigate(`${Post.category}`)} underline="hover">{Post.category}</Link> 
        </Typography> 
        <Typography gutterBottom variant="h6" component="div">
        {Post.title}
        </Typography>
        <Box fontSize='small' sx={{display:'flex',alignItems:'center', marginBottom:1, justifyContent:'space-between'}}>
          <Box fontSize='small' sx={{display:'flex',alignItems:'center'}}>
          <AccountCircleIcon sx={{marginRight:1}} fontSize='small'/>
            {Post.author}
          </Box>
          <Typography variant="caption" color="text.secondary">{Post.date}</Typography>
        </Box>
        <Typography variant="body2" style={{textOverflow: 'ellipsis' ,maxHeight: '75ch'}} color="text.secondary">
        {((Post.content).toString()).substring(0,150) + '....'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" key={key} onClick={() => newsNavigate(`${Post.name}`)}>Read More</Button>
      </CardActions>

      </Card>
  </Grid>
))}
</Grid>


</Container>




      </div>
  )
}

export default HomePage
