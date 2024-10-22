import React from 'react'
import './Card.scss'
import Icon from '../Icon/Icon'

export default function Card(props) {
  
  return (
    <div className='card'>
      <div className='card_container'>
        <div className='card_left'>
          <Icon name='job'/>
        </div>
        <div className='card_right'>
          <div 
            className={props.type === "popular" ? 'card_title_small' : 'card_title'}>
            {props.title}
          </div>
          <div className={props.type === "popular" ? 'card_description_small' : 'card_description'}>
            {props.description} 
          </div>
        </div>
        

      </div>
    </div>
  )
}
