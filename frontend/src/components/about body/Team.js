import React from 'react'
import './team.css'
import mem1 from '../head/assets/member1.png';
import mem2 from '../head/assets/member2.png';
import mem3 from '../head/assets/member3.png';
import mem4 from '../head/assets/member4.png';
import mem5 from '../head/assets/member5.png';
import membig from '../head/assets/mem1big.png';
import facebook from '../head/assets/facebook.png';
import twitter from '../head/assets/twitter.png';
import linkdn from '../head/assets/linkedIn.png';


const Team = () => {
  return (
    <div className='aboutpage-team-main'>
      <div>
        <img className='round-team-img' src={mem1} alt='rounded-image' />
        <img className='round-team-img' src={mem2} alt='rounded-image' />
        <img className='round-team-img' src={mem3} alt='rounded-image' />
        <img className='round-team-img' src={mem4} alt='rounded-image' />
        <img className='round-team-img' src={mem5} alt='rounded-image' />
      </div>
      <div>
        <img  className='team-main-img' alt='man-image' src={membig}/>
      </div>
      <div className='team-info'>
        <div className='teams-mem-data'>
        <p className='team-main-name'>Sebastian Bennett</p>
        <p className='team-main-place'>Founder, LEad Photographer, CEO</p>
        <p className='team-main-desc'>Lorem ipsum dolor sit amet, ut dicat euismod invidunt pro, ne his dolorum molestie reprehendunt, quo luptatum evertitur ex. Altera integre suavitate per an, alienum phaedrum te sea. Ex sea causae dolores, nam et doming dicunt feugait. Ea mel scripta aperiri postulant. Ut sed affert audire.</p>
        
        </div>
        <div className='team-mem-social'>
          <img src={facebook} alt='logo' className='icon' />
          <img src={twitter} alt='logo' className='icon' />
          <img src={linkdn} alt='logo' className='icon' />
        </div>
      </div>
    </div>
  )
}

export default Team