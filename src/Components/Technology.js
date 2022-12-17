import React from 'react'
import mobile from './Images/WebImages/techMobile.jpg'
import tech from './Images/WebImages/tech.jpg'
import game from './Images/WebImages/game.jpg'
import { useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import Button from '@mui/material/Button'
const Technology = () => {
  const newsNavigate = useNavigate()
  return (
    <body className='technology'>
<br/><br/><br/>


      <Grid container spacing={4} className='nowtrending'>
  <Grid item >
<Card sx={{ display: 'flex',maxWidth:1800, height:525 }}>
      <CardMedia component="img" height="520px" image={mobile} alt='News of Samsung'/>
      <CardContent>
        <Typography variant="h5" component="div">
        Samsung Galaxy S23 Ultra's 200MP Camera
        </Typography>
        <Typography variant="body2" color="text.secondary">
        While the upcoming Galaxy Unpacked event is the current talk of the town, leaks, and rumors surrounding the Samsung Galaxy S23 series have also paced up. 
          Especially the Galaxy S23 Ultra is bound to bring some incredible pioneering features to the table. 
          Per the current rumors, the S23 Ultra would feature a 200MP primary shooter. However, the sensor type was still unconfirmed until now.......
        </Typography>
      </CardContent>
      <CardActions sx={{ flex: '1 0 auto'}}>
      <Button size='small' onClick={() => newsNavigate('../MobileNews') }>Read More</Button>
      </CardActions>
    </Card>
</Grid>
<Grid item >
<Card sx={{ display: 'flex',maxWidth:1800, height:395 }}>
      <CardMedia component="img" height="390px" image={tech} alt='News of Graphics Card'/>
      <CardContent>
        <Typography variant="h5" component="div">
        Nvidia RTX 4070 GPU could be faster than RTX 3090 Ti
        </Typography>
        <Typography variant="body2" color="text.secondary">
        RTX 4070 graphics card may be a good deal more powerful than previously believed.
        Nvidia’s RTX 4070 graphics card may run with more CUDA Cores and video memory than the rumor mill previously believed, according to the latest from the GPU grapevine.......
        </Typography>
      </CardContent>
      <CardActions sx={{ flex: '1 0 auto'}}>
        <Button size='small' onClick={() => newsNavigate('../GCNews') }>Read More</Button>
      </CardActions>
    </Card>
</Grid>
<Grid item >
<Card sx={{ display: 'flex',maxWidth:1800, height:395 }}>
      <CardMedia component="img" height="390" image={game} alt='News of Video Game'/>
      <CardContent>
        <Typography variant="h5" component="div">
        Assassin's Creed Infinity: everything we know so far
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Assassin’s Creed Infinity promises big changes for Ubisoft’s series.
        Assassin’s Creed Infinity marks a huge step for Ubisoft's franchise. Historically, it's never been afraid of evolution, whether that's jumping through time periods or transitioning from a stealth action game to more of an RPG. 
        Following on from Assassin's Creed Valhalla, Ubisoft’s next big project is Assassin’s Creed Infinity, which could represent a seismic shift for the franchise itself. Potentially, this could fundamentally change how the series works by taking a live service approach. 
        Revealed in a Bloomberg report that’s since been verified by Ubisoft, Assassin’s Creed Infinity looks set to tie future entries in the franchise together........
        </Typography>
      </CardContent>
      <CardActions sx={{ flex: '1 0 auto'}}>
      <Button size='small' onClick={() => newsNavigate('../GACNews') }>Read More</Button>
      </CardActions>
    </Card>
</Grid>
    </Grid>
    </body>
  )
}

export default Technology