import React from 'react'
import cars from './Images/carsMW.jpg'
import gold from './Images/WebImages/news2Gold.jpg'
import flood from './Images/WebImages/NDMA.jpg'
import { useNavigate } from 'react-router-dom'
import { Card, CardActions, CardMedia, Grid, Typography,CardContent } from '@mui/material'
import Button from '@mui/material/Button';

const CurrentAffairs = () => {
  const newsNavigate = useNavigate()
  return (
    <body className='currentAffair'>
<br/><br/><br/>

<Grid container spacing={4} className='nowtrending'>
  <Grid item >
<Card sx={{ display: 'flex',maxWidth:1800, height:455 }}>
      <CardMedia component="img" height="450px" image={cars} alt='News of Cars'/>
      <CardContent>
        <Typography variant="h5" component="div">
        Popular Cars get a massive hike in Prices
        </Typography>
        <Typography variant="body2" color="text.secondary">
        2022 is proving to be a tumultuous year for the Pakistani car industry with the local currency rate on a continuous nosedive.
        The steep depreciation began on July 18, when the dollar went from Rs. 209 to Rs. 216 within hours. 
        From there, the devaluation continued till the dollar rate reached Rs. 240 and remained there.
        Such a drastic dip in local currency value has forced nearly all carmakers to increase the prices of their cars massively..... 
        </Typography>
      </CardContent>
      <CardActions sx={{ flex: '1 0 auto'}}>
      <Button size='small' onClick={() => newsNavigate('../CarsNews') }>Read More</Button>
      </CardActions>
    </Card>
</Grid>
<Grid item >
<Card sx={{ display: 'flex',maxWidth:1800, height:395 }}>
      <CardMedia component="img" height="390px" image={gold} alt='News of Gold'/>
      <CardContent>
        <Typography variant="h5" component="div">
        Price of Gold goes down after Rupee improvement
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Gold pared some losses on Thursday after Pakistani rupee continued to register significant gains against the US dollars some investors unwound safe-haven positions.
        Data released by All Sindh Sarafa and Jewellers Association (ASSJA) showed that the price of gold plunged by Rs2,100 per tola and Rs1,800 per 10 grams to settle at Rs143,200 and Rs112,540 in the local market. 
        The gold hit an all-time high of Rs162,500 per tola on July 28......
        </Typography>
      </CardContent>
      <CardActions sx={{ flex: '1 0 auto'}}>
        <Button size='small' onClick={() => newsNavigate('../GoldNews') }>Read More</Button>
      </CardActions>
    </Card>
</Grid>
<Grid item >
<Card sx={{ display: 'flex',maxWidth:1800, height:405 }}>
      <CardMedia component="img" height="400px" image={flood} alt='News of Flood Relief'/>
      <CardContent>
        <Typography variant="h5" component="div">
        Nestlé Pakistan Donates 60,000 Liters of Water for Flood Relief Efforts
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Nestlé Pakistan has donated 60,000 liters of Nestlé Pure Life water to National Disaster Management Authority (NDMA) to facilitate their relief activities across flood-affected areas following the torrential rains during recent monsoon spells.
        Sharing his thoughts, Waqar Ahmad, Head of Corporate Affairs and Sustainability, Nestlé in Pakistan and Afghanistan, said, “Access to clean drinking water for those affected by flooding across Pakistan has become an issue”.......
        </Typography>
      </CardContent>
      <CardActions sx={{ flex: '1 0 auto'}}>
      <Button size='small' onClick={() => newsNavigate('../FloodsNews') }>Read More</Button>
      </CardActions>
    </Card>
</Grid>
    </Grid>

    </body>
  )
}

export default CurrentAffairs