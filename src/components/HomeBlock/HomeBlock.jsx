import React from 'react'
import './HomeBlock.scss'
import guy from './pic.svg'
import Card from '../Card/Card'

export default function HomeBlock() {
  return (
    <div className='homeBlock'>
      <div className='homeBlock_search'>
        <div className='homeBlock_search_left'>
          <div className='homeBlock_search_left_title'>
            Find a job that suits your interest & skills.
          </div>
          <div className='homeBlock_search_left_description'>
          Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in scelerisque leo, eget sollicitudin velit bestibulum.
          </div>
          <div className='homeBlock_search_left_search'>
            <div className='homeBlock_search_left_search_container'>
              <input className='homeBlock_search_left_search_container_job' placeholder='Job title, Keyword...'></input>
              <input className='homeBlock_search_left_search_container_search' placeholder='Your Location'></input>
              <button className='button button-primary'>Find Job</button>
            </div>
          </div> 
          <div className='homeBlock_search_left_suggestion'>
            Suggestion: 
          </div>
        </div>

        <div className='homeBlock_search_left'>
          <img src={guy}></img>
        </div>
      </div>
      <div className='homeBlock_cards'>
        <Card title='1,75,324' description='Live Job'/>
        <Card title='1,75,324' description='Live Job'/>
        <Card title='1,75,324' description='Live Job'/>
        <Card title='1,75,324' description='Live Job'/>
      </div>
    </div>
  )
}