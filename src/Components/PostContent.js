import tech from './Images/WebImages/tech.jpg'
import cars from './Images/carsMW.jpg'
import mobile from './Images/WebImages/techMobile.jpg'
import food from './Images/WebImages/food.jpg'
import gold from './Images/WebImages/news2Gold.jpg'
import NDMA from './Images/WebImages/NDMA.jpg'
import game from './Images/WebImages/game.jpg'
import pancake from './Images/WebImages/pancake.jpg'
import sandwich from './Images/WebImages/sandwichnews8.jpeg'

const PostContent = [{
  name:'CarsNews',
  title:'Cars Prices Drastic Increase After Dollar Hike',
  category:'CurrentAffairs',
  date:'25-08-2022',
  author:'Sheharyar',
  imgsrc:`${cars}`,
  imgdes:'News of Cars',
  content:['Prices of Cars have inreased drasctically in few days.',
  'All popular Car Makers including Suzuki, Honda, Toyota and KIA are among the Companies that have increased the prices....'],
},
{
  name:'MobileNews',
  title:'Samsung Galaxy S23 Ultra’s 200MP Camera',
  category:'Technology',
  date:'23-08-2022',
  author:'Adeel',
  imgsrc:`${mobile}`,
  imgdes:'News of Mobile',
  content:['Samsung Galaxy S23 Ultra’s 200MP Camera is Reportedly an Unreleased ISOCELL HP2 Sensor. ', 
  'Samsung currently manufactures HP1 & HP3 sensors could be considered for the S23 Ultra....'
],
},
{
  name:'KarachiFood',
  title:'7 Yummiest food points in Karachi',
  category:'Eatries',
  date:'23-08-2022',
  author:'Hamza',
  imgsrc:`${food}`,
  imgdes:'Karachi Food Points',
  content:['Every city in the world is known for its delicacies, the city of lights Karachi has its own.', 
  'Karachi, bustling metropolis, has a unique and vibrant food sense so the tastes are just amazing....'
],
},
{
  name:'GoldNews',
  title:'Price of Gold goes down after Rupee improvement',
  category:'CurrentAffairs',
  date:'11-08-2022',
  author:'Abdullah',
  imgsrc:`${gold}`,
  imgdes:'Gold Prices News',
  content:['Gold pared some losses on Thursday after Pakistani rupee continued to register significant gains against', 
    'the US dollars some investors unwound safe-haven positions....'
],
},
{
  name:'FloodsNews',
  title:'Nestlé Pakistan Donates 60,000 Liters of Water for Flood Relief Efforts',
  category:'CurrentAffairs',
  date:'20-05-2022',
  author:'Majeed',
  imgsrc:`${NDMA}`,
  imgdes:'Nestle Donating in Flood Areas',
  content:['Nestlé Pakistan has donated 60,000 liters of Nestlé Pure Life water to NDMA ', 
  'to facilitate their relief activities across flood-affected areas....'
],
},
{
  name:'GCNews',
  title:'Nvidia RTX 4070 GPU could be faster than RTX 3090 Ti',
  category:'Technology',
  date:'06-06-2022',
  author:'Hassan',
  imgsrc:`${tech}`,
  imgdes:'Graphics Card News',
  content:['RTX 4070 graphics card may be a good deal more powerful than previously believed.', 
  'Nvidia’s RTX 4070 graphics card may run with more CUDA Cores and video memory than the rumor mill previously believed....'
],
},
{
  name:'GACNews',
  title:'Assassin’s Creed Infinity: everything we know so far',
  category:'Technology',
  date:'11-06-2022',
  author:'Sheharyar Hassan',
  imgsrc:`${game}`,
  imgdes:'Video Game News',
  content:['Assassin’s Creed Infinity marks a huge step for Ubisoft’s franchise. ', 
  'Historically, it’s never been afraid of evolution, whether that’s jumping through time periods or',
  'transitioning from a stealth action game to more of an RPG.....'
],
},
{
  name:'PFoodNews',
  title:'Good Old Fashioned Pancakes',
  category:'Eatries',
  date:'06-07-2022',
  author:'Hafeez',
  imgsrc:`${pancake}`,
  imgdes:'Pancake Recipe',
  content:['Every city in the world is known for its delicacies, the city of lights Karachi has its own.', 
  'Karachi, bustling metropolis, has a unique and vibrant food sense so the tastes are just amazing....'
],
},
{
  name:'SFoodNews',
  title:'Chicken Sandwich Variations',
  category:'Eatries',
  date:'08-07-2022',
  author:'Hussain',
  imgsrc:`${sandwich}`,
  imgdes:'Sandwich Variations',
  content:['Classic version of a Chicken sandwich is a unique combination of soft bread, tender Chicken, sliced cucumber, tomatoes, mayonnaise, ketchup, and some spices.', 
  'But, are you craving something different and a little spiced up? Well, then you need to try out these amazing and delicious Chicken sandwich variations.....  '
],
},


]

 
export default PostContent