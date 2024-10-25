import React from 'react'
import { useState, useEffect } from 'react'
import './MostPopular.scss'
import Card from '../Card/Card'
import Button from '../Button/Button'

export default function MostPopular(props) {
  const [list, setList] = useState([]);
  
  useEffect(() => {
    if (props.jobs && props.jobs.length > 0) {
      const sortedJobs = [...props.jobs]
      .sort((a, b) => b.view - a.view)
      .slice(0, 12)
      setList(sortedJobs); 
    }
  }, []);

    
  return (
    <div className='block_white'>
      <div className='block_container'>
        <div className='block_header'>
          <div className='block_title'>
            Most Popular Vacancies
          </div>
          <Button className='button button-secondary'>View All</Button>
        </div>
        <div className='block_body_grid'>
          {list.map(job => (
            <div key={job.id} className='block_body_grid_card'>
              <h1>{job.title}</h1>
              <p>{job.category} Open Positions</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}