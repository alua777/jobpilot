import React, { useEffect, useState } from 'react'
import './FindJob.scss'
import JobCard from '../../components/JobCard/JobCard'
import axios from 'axios'

export default function FindJob() {

  const [jobs, setJobs] = useState([])


  useEffect(() => {axios.get('http://localhost:3000/jobs')
    .then(function (response) {
      setJobs(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
    .finally(function () {
    });}, []);

  
  
  return (
    <>
    <div className='findjob_header'>Find Job</div>
    <div className='container'>
      <div className='findjob'>
        <div className='findjob_search'>
          
        </div>
        <div className='findjob_joblist'>
          {jobs.map(job => (
            <JobCard key={job.id} job={job}/>
          ))}
        </div>
      </div>
    </div>
    </>
  )
}