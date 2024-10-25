import React from 'react'
import './HowWorks.scss'
import HowWorksCard from '../HowWorksCard/HowWorksCard'
import Icon from '../Icon/Icon'

export default function HowWorks() {
  
  const cards = [
    ["Create account", "Aliquam facilisis egestas sapien, nec tempor leo tristique at."],
    ["Upload CV/Resume", "Aliquam facilisis egestas sapien, nec tempor leo tristique at."],
    ["Find suitable job", "Aliquam facilisis egestas sapien, nec tempor leo tristique at."],
    ["Apply job", "Aliquam facilisis egestas sapien, nec tempor leo tristique at."]              
  ];
  
  return (
  <div className='block_grey'>
    <div className='block_container'>
      <div className='block_title'>How Job Pilot Works</div>
      <div className='block_cards'>
        <HowWorksCard title={cards[0][0]} description={cards[0][1]} icon="person"/>
        <HowWorksCard title={cards[1][0]} description={cards[1][1]} icon="cloud"/>
        <HowWorksCard title={cards[2][0]} description={cards[2][1]} icon="person"/>
        <HowWorksCard title={cards[3][0]} description={cards[3][1]} icon="person"/>
      </div>
      
      {/* <div className='block_arrows'>
        <div className='block_arrows_up'>
          <Icon name="arrow"/>
          <Icon name="arrow"/>
        </div>  
          <Icon name="arrow_down"/>
        </div> */}
    </div>
  </div>
  )
}












