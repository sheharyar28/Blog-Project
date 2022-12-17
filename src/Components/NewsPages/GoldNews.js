import React from 'react'
import news2Gold from '../Images/WebImages/news2Gold.jpg'
import UserCom from '../Navigation/UserCom'
const GoldNews = () => {
  return (
    <body className='newspage'>
    <div>
      <img src={news2Gold} alt='Gold Image' width='100%'/>
      <h1>Price of Gold goes down after Rupee improvement</h1>
      <p>Gold pared some losses on Thursday after Pakistani rupee continued to register significant gains against the US dollars some investors unwound safe-haven positions.
        Data released by All Sindh Sarafa and Jewellers Association (ASSJA) showed that the price of gold plunged by Rs2,100 per tola and Rs1,800 per 10 grams to settle at Rs143,200 and Rs112,540 in the local market. 
        The gold hit an all-time high of Rs162,500 per tola on July 28. 
        Gold scaled to new peaks earlier as the risk-averse sentiment in the market underpinned bullion, often seen as an alternative investment during times of political and financial uncertainty.
        However, the dealers had anticipated the market to undergo a correction after touching new peaks.
        A significant recovery of the Pakistani rupee of nearly 2% against the US dollar dimmed the shine of the yellow metal. 
        Cumulatively, the price of gold plummeted by Rs16,400 per tola in the last four sessions (Monday-Thursday). 
        It should be noted that the gold price is standing below cost. Gold is cheaper by Rs2,000 per tola compared to its price in Dubai.
        The latest price for local markets was determined to keep in view the prices at which trades took place among buyers and sellers.
        In the international market, bullion prices surged by $21 per ounce to settle at $1,787 as a pullback in the dollar and US Treasury yields provided support ahead of a key US jobs report that could influence the Federal Reserve’s policy stance.
        Meanwhile, silver prices in the domestic market remained unchanged at Rs1,620 per tola and Rs1,388.88 per 10 grams today.</p>
    </div><br/><UserCom/> <br/>
    </body>
  )
}

export default GoldNews