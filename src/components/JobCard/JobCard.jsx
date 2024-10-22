import React from 'react';
import './JobCard.scss';
import { useNavigate } from 'react-router-dom';
import Icon from '../Icon/Icon';

export default function JobCard({job}) {
  const navigate = useNavigate();
  const handleClick = () =>{
    navigate(`/findjob/job/${job.id}`, { state: { job: job } });
  }

  return (
    <div className={job.marked ? 'jobCard gold' : 'jobCard'}>
      <div className='jobCard_card'>
        <div className='jobCard_card_title' onClick={handleClick}>{job.title}</div>
        <div className='jobCard_card_job'>
          <div className='jobCard_card_job_type'>{job.type}</div>
          <div className='jobCard_card_job_salary'>Salary: {job.salary}</div>
        </div>  
        <div className='jobCard_card_company'>
          <div className='jobCard_card_company_logo'>
            <Icon name='google'/>
          </div>
          <div>
            <div className='jobCard_card_company_name'>{job.company}</div>
            <div className='jobCard_card_company_location'>
            <Icon name='location'/>
              {job.country}
            </div>
          </div>
        </div>
      </div>
      <div className='jobCard_bookmark'>
        <div>
        <Icon name='bookmark'/>
        </div>
      </div>
    </div>
  )
}