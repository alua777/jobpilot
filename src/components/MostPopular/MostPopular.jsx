import React from 'react'
import { useState, useEffect } from 'react'
import './MostPopular.scss'
import { useNavigate } from 'react-router-dom';

export default function MostPopular(props) {
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const handleClick = (job) => { 
    navigate(`/findjob/job/${job.id}`, { state: { job: job } });
  }

  useEffect(() => {
    if (props.jobs && props.jobs.length > 0) {
      const sortedJobs = [...props.jobs]
      .sort((a, b) => b.views - a.views)
      .slice(0, 12)
      setList(sortedJobs); 
    }
  }, [props.jobs]);


    
  return (
    <div className='block_white'>
      <div className='block_container'>
        <div className='block_header'>
          <div className='block_title'>
            Most Popular Vacancies
          </div>
        </div>
        <div className='block_body_grid'>
          {list.map(job => (
            <div key={job.id} className='block_body_grid_card'>
              <h1 onClick={() => handleClick(job)}>{job.title}</h1>
              <p>{job.views} Views</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}