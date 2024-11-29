import React, {useState} from 'react'
import './HowWorksCard.scss'
import Icon from '../Icon/Icon'


export default function HowWorksCard(props) {
  const [mouseOn, setMouseOn] = useState(false);

  const handleHover = (e)=>{
    setMouseOn(true);
  }
  
  const handleLeave = () => {
    setMouseOn(false);
  }
  const color = mouseOn ? 'white' : '';

  return (
    <div onMouseEnter={handleHover} onMouseLeave={handleLeave}
      className={color==='white' ? 'howCard white' : 'howCard'}>
      <div className='howCard_container'>
        <div className={color==='white' ? 'howCard_icon blue' : 'howCard_icon'}>
          <Icon name={props.icon}/>
        </div>
        <div className='howCard_info'>
          <div className='howCard_title'>
            {props.title}
          </div>
          <div className='howCard_description'>
            {props.description}
          </div>
        </div>
      </div>

    </div>
  )
}












