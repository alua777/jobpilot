import React, { useEffect, useState } from 'react'
import './Featured.scss'
import axios from 'axios'
import JobCard from '../JobCard/JobCard';

export default function Featured() {
  
  const [jobs, setJobs] = useState([]);

  useEffect(() => { axios.get('http://localhost:3000/jobs')
    .then(function(res) {
      setJobs(res.data);
    })
    .catch(function(error){
      console.log(error);
    })
    .finally(function(){

    })
  }, []);

  return (
    <div className='block_white'>
      <div className='block_container'>
        <div className='block_header'>
          <div className='block_title'> Featured job</div>
          <button className='button button-secondary'>View All</button>
        </div>
        
        <div className='findjob_joblist'>
          {jobs.map(job => (
            <JobCard key={job.id} job={job}/>
          ))}
        </div>
        <div className='block_header'>
          <div className='block_title'> Top companies</div>
        </div>
      </div>
    </div>
  )
}












