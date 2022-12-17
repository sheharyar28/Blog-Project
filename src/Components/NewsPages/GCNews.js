import React from 'react'
import tech from '../Images/WebImages/tech.jpg'
import UserCom from '../Navigation/UserCom'
const GCNews = () => {
  return (
    <body className='newspage'>
      <div>
        <img src={tech} alt='Graphics Cards Tech' width='100%'/>
        <h1>Nvidia RTX 4070 GPU could be faster than RTX 3090 Ti</h1>
        <p>RTX 4070 graphics card may be a good deal more powerful than previously believed.
        Nvidia’s RTX 4070 graphics card may run with more CUDA Cores and video memory than the rumor mill previously believed, according to the latest from the GPU grapevine.
        The source for this is well-known hardware leaker Kopite7kimi, who shared the revised speculation for the RTX 4070 via Twitter.
        So, the theory now, and this is still just a theoretical incarnation of the RTX 4070, of course, and we can’t be sure Nvidia has settled on this configuration – is that Team Green has decided to up the CUDA Core count to 7,680 (compared to the previously rumored 7,168).
        That’s a fair jump, and there’s another upgrade supposedly applied in that the graphics card is set to use 12GB of VRAM (21Gbps GDDR6X), rather than the 10GB loadout which has been long rumored.
        Kopite7kimi further asserts that the RTX 4070 will chug 300W in terms of power usage, a figure that actually hasn’t changed from the previous leakage we’ve been drawing comparisons with – good news in theory, seeing as the rumored specs are more powerful now.
        </p>
        </div><br/><UserCom/> <br/>
      </body>
  )
}

export default GCNews