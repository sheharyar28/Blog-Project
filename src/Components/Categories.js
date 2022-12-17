import { Grid,Card, CardMedia, CardContent, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import cAffairs from './Images/CAffairs.jpg'
import tech from './Images/Tech.jpg'
import eat from './Images/eat.jpg'
const Categories = () => {

    const newsNavigate = useNavigate()
  return (
    <Grid container spacing={3} justifyContent="center" alignItems="center" direction='column'>
      <Grid item sx={12}>
        <a className='catanchor' href='#' onClick={()=>newsNavigate('../CurrentAffairs')}>
        <Card sx={{width:500,height:400}}>
          <CardMedia component='img' height='300px' image={cAffairs} alt='Category of Current Affairs'/>
          <CardContent>
            <Typography variant='h5' component='div'>
            Current Affairs
            </Typography>
          </CardContent>
        </Card>
        </a>
        </Grid>
        <Grid item sx={12}>
        <a className='catanchor' href='#' onClick={()=>newsNavigate('../Technology')}>
        <Card sx={{width:500,height:400}}>
          <CardMedia component='img' height='300px' image={tech} alt='Category of Technology'/>
          <CardContent>
            <Typography variant='h5' component='div'>
            Technology
            </Typography>
          </CardContent>
        </Card>
        </a>
      </Grid>
        <Grid item sx={12}>
        <a className='catanchor' href='#' onClick={()=>newsNavigate('../Eatries')}>
        <Card sx={{width:500,height:400}}>
          <CardMedia component='img' height='300px' image={eat} alt='Category of Eatries'/>
          <CardContent>
            <Typography variant='h5' component='div'>
            Eatries
            </Typography>
          </CardContent>
        </Card>
        </a>
        </Grid>
    </Grid>
  )
}

export default Categories