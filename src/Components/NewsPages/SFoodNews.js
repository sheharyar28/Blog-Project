import React from 'react'
import sandwich from '../Images/WebImages/sandwichnews8.jpeg'
import psandwich from '../Images/WebImages/psandwich.jpeg'
import wsandwich from '../Images/WebImages/wsandwich.jpeg'
import UserCom from '../Navigation/UserCom'

const SFoodNews = () => {
  return (
    <body className='newspage'>
    <div>
        <img src={sandwich} width='100%' alt='Chicken Sandwich'/>
        <h1>Chicken Sandwich Variations</h1>
    
    <p>
    Chicken is an all-time star and a versatile ingredient. The aromatic, though a little bland, white meat goes perfectly well with almost every recipe. 
    It is a flexible, nutritious, easy-to-use, and quick ingredient that regularly saves the day for a majority of chefs. Using Chicken, you can make curries, rice dishes, stews, soups, and whatnot.
    However, perhaps, the highlight dish composed using this much-loved ingredient is the one and only, Chicken Sandwich. 
    It is a unique combination of soft bread, tender Chicken, sliced cucumber, tomatoes, mayonnaise, ketchup, and some spices.
    Right now, I have described you the classic version of a Chicken sandwich that you would have eaten a lot of times. But, are you craving something different and a little spiced up?
    Well, then you need to try out these amazing and delicious Chicken sandwich variations!  
</p>
<h2>Buffalo Chicken Sandwich</h2>
<p>
Buffalo chicken sandwich features an unrivaled blend of paprika, red pepper flakes, cayenne pepper, garlic powder, butter, red hot sauce, tomatoes, flour, and iceberg lettuce. 
All ingredients coat the major ingredients and serve as spicy fillers.It’s preferable to fry the coated patty and sandwich in olive oil. 
It takes merely about 20 minutes to prepare the heavy and fulfilling buffalo sandwich.The major ingredient in this sandwich happens to chicken meat. 
Be it, chicken breasts or wings. It only has to be in a heavy quantity than usual. Let’s say, for one sandwich; you will need about five chicken wings. 
You can, of course, adjust the quantity as per your appetite. But originally, it’s supposed to be heavy.
</p>
<h2>Chicken Parmesan Sliders</h2>
<p>
Sliders, also called mini burgers, refers to sandwiches made with 2-inches small buns. A plateful of Sliders is an idealistic choice for get-together parties, weekend dinners, and, most importantly, snacking.
Although Sliders tend to be generally tasty, these Chicken Parmesan Sliders give you an out-of-the-world, heavenly experience. The combination of Parmesan cheese and Chicken makes this variation delicious.
To make Chicken Cheese Sliders, you need sweet bun rolls/ dinner rolls, Parmesan, sauce of any choice (marinara sauce, ketchup, mayonnaise, etc.) Breaded Chicken. 
In a square glass pan, assemble all the ingredients and bake to melt the cheese. For added flavor, you can make a paste of melted butter, garlic powder, crushed red pepper flakes, Parmesan, and fresh basil. 
Then, spread this paste on top of the assembled Sliders before baking.
</p>
<img src={psandwich} width='100%' alt='Parmesan Sandwich'/>
<h2>Chicken and Waffle Sandwich</h2>
<p>
Now, here comes one of the crunchiest and time-taking chicken sandwiches. It takes about 48 hours and 15 minutes to prepare one Chicken and waffle sandwich.
It takes time and effort, yes. But let me tell you, the effort’s all worth it. 
The end product is crispy buttermilk chicken with maple syrup and smokey bacon sandwiched in two crispy and crunchy waffles, which get often splattered with honey and butter. 
The actual flavor is much more dreamy and satisfying than the description, I assure you!
</p>
<img src={wsandwich} width='100%' alt='Waffle Sandwich'/>
    </div>
    <br/><UserCom/> <br/>
    </body>
  )
}

export default SFoodNews