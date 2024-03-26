import { Grid,Card, CardMedia, CardContent, Typography,Container } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import cAffairs from './Images/CAffairs.jpg'
import tech from './Images/Tech.jpg'
import eat from './Images/eat.jpg'
const Categories = () => {

    const newsNavigate = useNavigate()
  return (
    <Grid sx={{paddingLeft:'40px',paddingRight:'40px'}} container spacing={5} justifyContent="center" alignItems="center" direction='row'>
      <Grid sx={{marginTop:'20px'}} item xs={4}>
        <span className='CatagoriesLink' href='#' onClick={()=>newsNavigate('../CurrentAffairs')}>
        <Card sx={{height:400}}>
          <CardMedia component='img' height='300px' image={cAffairs} alt='Category of Current Affairs'/>
          <CardContent>
            <Typography variant='h5' component='div'>
            Current Affairs
            </Typography>
          </CardContent>
        </Card>
        </span>
      </Grid>
      <Grid sx={{marginTop:'20px'}} item xs={4}>
        <span className='CatagoriesLink' href='#' onClick={()=>newsNavigate('../Technology')}>
        <Card sx={{height:400}}>
          <CardMedia component='img' height='300px' image={tech} alt='Category of Technology'/>
          <CardContent>
            <Typography variant='h5' component='div'>
            Technology
            </Typography>
          </CardContent>
        </Card>
        </span>
      </Grid>
      <Grid sx={{marginTop:'20px'}} item xs={4}>
        <span className='CatagoriesLink' href='#' onClick={()=>newsNavigate('../Eatries')}>
        <Card sx={{height:400}}>
          <CardMedia component='img' height='300px' image={eat} alt='Category of Eatries'/>
          <CardContent>
            <Typography variant='h5' component='div'>
            Eatries
            </Typography>
          </CardContent>
        </Card>
        </span>
      </Grid>
    </Grid>
  )
}

export default Categories
