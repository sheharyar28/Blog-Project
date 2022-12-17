import React from 'react'
import mobile from '../Images/WebImages/techMobile.jpg'
import mobile6 from '../Images/WebImages/news6mobile.jpg'
import UserCom from '../Navigation/UserCom'
const MobileNews = () => {
  return (
    <body className='newspage'>
      <div>
        <img src={mobile} alt='Mobile Tech' width='100%' />
        <h1>Samsung Galaxy S23 Ultra's 200MP Camera is Reportedly an Unreleased ISOCELL HP2 Sensor</h1>
        <p>While the upcoming Galaxy Unpacked event is the current talk of the town, leaks, and rumors surrounding the Samsung Galaxy S23 series have also paced up. 
          Especially the Galaxy S23 Ultra is bound to bring some incredible pioneering features to the table. 
          Per the current rumors, the S23 Ultra would feature a 200MP primary shooter. However, the sensor type was still unconfirmed until now.
          <br/>
          <img src={mobile6} alt='Mobile inline Image' className='inlineImg'/>
          <br/>
          Ice Universe, a reliable tipster, took to the internet, revealing that the 200MP sensor in question would be an unreleased ISOCELL HP2. 
          Samsung currently manufactures HP1 and HP3 sensors as well thought of as viable options for the Samsung Galaxy S23 Ultra. 
          However, the Korean giant is preparing a special recipe for its top-of-the-line flagship model.
          Those HP1s and HP3s would be reserved for other Chinese brands and Samsung’s own A-lineup of handsets. More information regarding the primary HP2 sensor will start showing up soon.
          Additionally, the secondary ultra-wide shooter assisting this main lens would be a 12MP capturer. 
          A 3x optical zoom telephoto lens with 10MP resolution and another 10MP periscope camera with 10x optical zoom will also be deployed. 
          The telephoto and periscope cameras will expectedly be the same as the S21 and S22 Ultra.
          As for the front, the ditto 40MP selfie shooter could again make its way to the S23 Ultra as seen on its predecessor. 
          This lens on the new Samsung Ultra mobile is capable of producing sharp 4K videos at 60fps. 
          The Snapdragon 8 Gen 2 could power the S23 Ultra improving the overall performance by 10%.
          The vanilla S23 and S23 Plus could skip some of the camera hardware of their elder brother; however, the overall results are sure to impress. 
          The S23 Ultra is expected to arrive in the first quarter of 2023, where we would experience the camera magic happening in real-time. 
          </p>
        </div><br/><UserCom/> <br/>
    </body>
  )
}

export default MobileNews