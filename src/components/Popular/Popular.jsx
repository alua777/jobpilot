import React from 'react'
import './Popular.scss'
import Card from '../Card/Card'

export default function Popular(props) {
  
    
  return (
    <div className='block_white popular'>
      <div className='block_container'>
        <div className='block_header'>
          <div className='block_title'>
            Popular Category
          </div>
          <button className='button button-secondary'>View All</button>
        </div>
        <div className='block_body_grid'>
          {props.jobs.map(job => (
            <Card key={job.id} title={job.job_type} description={job.title} type="popular"/>
          ))}
        </div>
      </div>
    </div>
  )
}
