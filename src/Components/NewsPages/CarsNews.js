import React from 'react'
import news1cars from '../Images/WebImages/news1cars.jpg'
import UserCom from '../Navigation/UserCom'
const CarsNews = () => {
  return (
    <body className='newspage'>
    <div>
      <img src={news1cars} alt='Cars News' width='100%'/>
      <h1>Popular Cars get a massive hike in Prices</h1>
      <p>2022 is proving to be a tumultuous year for the Pakistani car industry with the local currency rate on a continuous nosedive.
        The steep depreciation began on July 18, when the dollar went from Rs. 209 to Rs. 216 within hours. 
        From there, the devaluation continued till the dollar rate reached Rs. 240 and remained there.
        Such a drastic dip in local currency value has forced nearly all carmakers to increase the prices of their cars massively. 
        The new prices of all popular sedan cars are as follows:</p>
        <table className='carsTable'>
        <tr>
          <th>Variants</th>
          <th>Old Price (Rs.)</th>
          <th>Revised Price (Rs.)</th>
        </tr>
        <tr>
          <td></td>
          <td><b>Toyota Yaris</b></td>
        </tr>
        <tr>
          <td>1.3 Gli M/T</td>
          <td>3,039,000</td>
          <td>3,799,000</td>
        </tr> 
        <tr>
          <td>1.3 Gli CVT</td>
          <td>3,249,000</td>
          <td>4,039,000</td>
          </tr>
          <tr>
          <td>1.5 ATIV X M/T</td>
          <td>3,449,000</td>
          <td>4,309,000</td>
          </tr>
          <tr>
          <td>1.5 ATIV X CVT</td>
          <td>3,659,000</td>
          <td>4,569,000</td>
        </tr>
        <tr>
          <td></td>
          <td><b>Honda</b></td>
        </tr>
        <tr>
          <td>City 1.2L MT</td>
          <td>3,264,000</td>
          <td>4,049,000</td>
        </tr> 
        <tr>
          <td>City 1.2L CVT</td>
          <td>3,389,000</td>
          <td>4,199,000</td>
          </tr>
          <tr>
          <td>1.5 L Aspire MT</td>
          <td>3,729,000</td>
          <td>4,609,000</td>
          </tr>
          <tr>
          <td>1.5 L Aspire CVT	</td>
          <td>3,899,000	</td>
          <td>4,799,000</td>
        </tr>
        <tr>
          <td>Civic Oriel 1.5T M-CVT</td>
          <td>5,799,000</td>
          <td>7,099,000</td>
        </tr>
        <tr>
          <td>Civic 1.5T RS LL-CVT</td>
          <td>6,649,000</td>
          <td>8,099,000</td>
        </tr>
        <tr>
          <td></td>
          <td>
            <b>Hyundia Nishat</b>
          </td>
        </tr>
        <tr>
          <td>Elantra GL 1.6</td>
          <td>4,341,990</td>
          <td>5,099,000</td>
          </tr>
          <tr>
          <td>Elantra GLS 2.0</td>
          <td>4,998,490</td>
          <td>5,499,000</td>
          </tr>
          <tr>
          <td>Sonata 2.0</td>
          <td>7,068,990	</td>
          <td>7,899,000</td>
        </tr>
        <tr>
          <td>Sonata 2.5</td>
          <td>7,927,490</td>
          <td>8,499,000</td>
        </tr>
        <tr>
          <td></td>
          <td>
           <b>Changan and Proton</b> 
          </td>
        </tr>
        <tr>
          <td>Alsvin 1.37 Comfort M/T</td>
          <td>2,894,000</td>
          <td>3,394,000</td>
          </tr>
          <tr>
          <td>Alsvin 1.5 Comfort DCT</td>
          <td>3,149,000</td>
          <td>3,659,000</td>
          </tr>
          <tr>
          <td>Alsvin 1.5 Lumiere DCT</td>
          <td>3,344,000	</td>
          <td>3,844,000</td>
        </tr>
        <tr>
          <td>Proton Saga Standard M/T</td>
          <td>2,349,000</td>
          <td>2,579,000</td>
        </tr>
        <tr>
          <td>Proton Saga Standard A/T</td>
          <td>2,499,000</td>
          <td>2,729,000</td>
        </tr>
        <tr>
          <td>Proton Saga ACE A/T</td>
          <td>2,619,000</td>
          <td>2,849,000</td>
        </tr>
        </table>
        <br/>
        <UserCom/> <br/>
      </div>
    </body>
  )
}

export default CarsNews