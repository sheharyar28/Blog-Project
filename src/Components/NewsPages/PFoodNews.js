import React from 'react'
import pancake from '../Images/WebImages/pancake.jpg'
import UserCom from '../Navigation/UserCom'

const PFoodNews = () => {
  return (
    <body className='newspage'>
    <div>
        <img src={pancake} width='100%' alt='Chicken Sandwich'/>
        <h1>Good Old Fashioned Pancakes</h1>
        <p>TPancake is one of the most popular breakfast around the world. There are many variations to the Recipe of the Pancakes.
        The one discussed here is a great recipe that I found in my Grandma's recipe book. 
        This one takes you down the memory lane childhood days by just the smell of this delicious pancake.
        Judging from the weathered look of this recipe card, this was a family favorite
        </p>
        <h2>Ingredients</h2>
        <ul>
            <li>1 ½ cups all-purpose flour</li>
            <li>3 ½ teaspoons baking powder</li>
            <li>¼ teaspoon salt, or more to taste</li>
            <li>1 tablespoon white sugar</li>
            <li>1 ¼ cups milk</li>
            <li>1 egg</li>
            <li>3 tablespoons butter, melted</li>
        </ul>
        <h2>Directions</h2>
        <h3>Step 1</h3>
        <p>In a large bowl, sift together the flour, baking powder, salt and sugar. Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.</p>
        <h3>Step 2</h3>
        <p>Heat a lightly oiled griddle or frying pan over medium-high heat. Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.</p>
    </div><br/><UserCom/> <br/>
    </body>
  )
}

export default PFoodNews