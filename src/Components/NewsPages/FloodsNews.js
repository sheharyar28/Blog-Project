import React from 'react'
import flood from '../Images/WebImages/NDMA.jpg'
import UserCom from '../Navigation/UserCom'
const FloodsNews = () => {
  return (
    <body className='newspage'>
      <div>
        <img src={flood} alt='Nestlé help with Floods' width='100%'/>
        <h1>Nestlé Pakistan Donates 60,000 Liters of Water for Flood Relief Efforts</h1>
        <p>Nestlé Pakistan has donated 60,000 liters of Nestlé Pure Life water to National Disaster Management Authority (NDMA) to facilitate their relief activities across flood-affected areas following the torrential rains during recent monsoon spells.
        Sharing his thoughts, Waqar Ahmad, Head of Corporate Affairs and Sustainability, Nestlé in Pakistan and Afghanistan, said, “Access to clean drinking water for those affected by flooding across Pakistan has become an issue.”
        He added, “Nestlé has always been at the forefront in responding to the call of the government of Pakistan for climatic and humanitarian disasters to help citizens in need.”
        Nestlé Pakistan and NDMA have worked closely to carry out relief work for the people and the communities affected by natural calamities.
        Nestlé believes it has an essential role to play during times of crisis.</p>
        </div><br/><UserCom/> <br/>
        
    </body>
  )
}

export default FloodsNews