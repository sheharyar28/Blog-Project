import React from 'react'
import food from './Images/WebImages/food.jpg'
import sandwich from './Images/WebImages/sandwichnews8.jpeg'
import pancake from './Images/WebImages/pancake.jpg'
import { useNavigate } from 'react-router-dom'
import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import Button from '@mui/material/Button'
const Eatries = () => {
  const newsNavigate = useNavigate()
  return (
    <body className='eatries'>

<br/><br/><br/>
<Grid container spacing={4} className='nowtrending'>
  <Grid item >
<Card sx={{ display: 'flex',maxWidth:1800, height:270 }}>
      <CardMedia component="img" height="265px" image={food} alt='Food Points In Karachi'/>
      <CardContent>
        <Typography variant="h5" component="div">
        7 most Iconic and Yummiest food points in the city of lights
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Every city in the world is known for its delicacies, the city of lights Karachi has its own. 
          Karachi, bustling metropolis, has a unique and vibrant food sense so the tastes are just amazing. 
          There are certain delicacies that nobody serves well than Karachitties.
          From roadside Dhaba to high-end restaurant, Karachi has a variety of delicious foods to offer for every price point. 
          There’s a blend of Western and traditional food but you can also find Mexican and Chinese here........
        </Typography>
      </CardContent>
      <CardActions sx={{ flex: '1 0 auto'}}>
      <Button size='small' onClick={() => newsNavigate('../KarachiFood') }>Read More</Button>
      </CardActions>
    </Card>
</Grid>
<Grid item >
<Card sx={{ display: 'flex',maxWidth:1800, height:360 }}>
      <CardMedia component="img" height="355px" image={sandwich} alt='Sandwich Variations'/>
      <CardContent>
        <Typography variant="h5" component="div">
        Chicken Sandwich Variations
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Chicken is an all-time star and a versatile ingredient. The aromatic, though a little bland, white meat goes perfectly well with almost every recipe. 
        It is a flexible, nutritious, easy-to-use, and quick ingredient that regularly saves the day for a majority of chefs. 
        Using Chicken, you can make curries, rice dishes, stews, soups, and whatnot.
        However, perhaps, the highlight dish composed using this much-loved ingredient is the one and only, Chicken Sandwich. 
        It is a unique combination of soft bread, tender Chicken, sliced cucumber, tomatoes, mayonnaise, ketchup, and some spices.
        Right now, I have described you the classic version of a Chicken sandwich that you would have eaten a lot of times. 
        But, are you craving something different and a little spiced up?
        Well, then you need to try out these amazing and delicious Chicken sandwich variations.......
        </Typography>
      </CardContent>
      <CardActions sx={{ flex: '1 0 auto'}}>
        <Button size='small' onClick={() => newsNavigate('../SFoodNews') }>Read More</Button>
      </CardActions>
    </Card>
</Grid>
<Grid item >
<Card sx={{ display: 'flex',maxWidth:1800, height:405 }}>
      <CardMedia component="img" height="400" image={pancake} alt='Pancake Recipies'/>
      <CardContent>
        <Typography variant="h5" component="div">
        Good Old Fashioned Pancakes
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Pancake is one of the most popular breakfast around the world. There are many variations to the Recipe of the Pancakes.
        The one discussed here is a great recipe that I found in my Grandma's recipe book. 
        This one takes you down the memory lane childhood days by just the smell of this delicious pancake.
        Judging from the weathered look of this recipe card, this was a family favorite........
        </Typography>
      </CardContent>
      <CardActions sx={{ flex: '1 0 auto'}}>
      <Button size='small' onClick={() => newsNavigate('../PFoodNews') }>Read More</Button>
      </CardActions>
    </Card>
</Grid>
    </Grid>
    </body>
  )
}

export default Eatries