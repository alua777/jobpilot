import React from 'react'
import { useLocation } from 'react-router-dom'
import Button from '../../components/Button/Button'
import './JobDetails.scss'
import Icon from '../../components/Icon/Icon';


export default function JobDetails() {
  const location = useLocation();
  const { job } = location.state || {}; 
  
  return (
    <>
    <div className='findjob_header'>Job Details</div>
      <div className='body'>
        <div className='jobDetails_header'>
          <div className='jobDetails_header_info'>
            <div className='jobDetails_header_info_logo'>
            <Icon name='logo'/>
            </div>
            <div className='jobDetails_header_info_details'>
              <div className='jobDetails_header_info_details_title'>
                {job.title}
              </div>
              <div className='jobDetails_header_info_details_under'>
                <div className='jobDetails_header_info_details_under_company'>
                  at {job.company}
                </div>
                <div className='jobDetails_header_info_details_under_type'>
                  {job.type}
                </div>
              </div>
            </div>
          </div>
          
          <div className='jobDetails_header_buttons'>
            <Button className="button button-square button-secondary"/>
            <Button text="Apply now" className="button button-long button-primary"/>
          </div>
        </div>

        <div className='jobDetails_body'>
         
          <div className='jobDetails_body_left'>
            <div className='jobDetails_body_left_description'>
              <p> Job Description</p>
              {job.description}
            </div>
            <div className='jobDetails_body_left_part'>
              <p>Requirements:</p>
              <ul>
                {job.requirements.map(requirement => (
                  <li key={requirement}>{requirement}</li>
                ))}
              </ul>
            </div>
            <div className='jobDetails_body_left_part'>
              <p>Desirable:</p>
              <ul>
                {job.requirements.map(requirement => (
                  <li key={requirement}>{requirement}</li>
                ))}
              </ul>
            </div>
            <div className='jobDetails_body_left_part'>
            <p>Benefits:</p>
            <ul>
              {job.requirements.map(requirement => (
                <li key={requirement}>{requirement}</li>
              ))}
            </ul>
            </div>
          </div>


          
          <div className='jobDetails_body_right'>
            <div className='jobDetails_body_right_card'>
              <div className='jobDetails_body_right_card_salary'>
                <div className='jobDetails_body_right_card_salary_title'>
                    Salary (USD)
                </div> 
                <div className='jobDetails_body_right_card_salary_number'>
                  {job.salary}
                </div> 
                <div className='jobDetails_body_right_card_salary_type'>
                    Yearly Salary
                </div> 
              </div>
              <div className='jobDetails_body_right_card_location'>
                <div className='jobDetails_body_right_card_location_map'>
                  <Icon name='map'/>
                </div>
                <div className='jobDetails_body_right_card_salary_title'>
                  Job Location
                </div>
                <div className='jobDetails_body_right_card_location_country'>
                    {job.country}
                </div> 


              </div>
            </div>

            <div className='jobDetails_body_right_bigcard'>
              <div className='jobDetails_body_right_bigcard_container'>
                <div className='jobDetails_body_right_bigcard_container_title'>
                  Job Overview
                </div>
                <div className='jobDetails_body_right_bigcard_container_grid'>
                  <div className='jobDetails_body_right_bigcard_container_grid_piece'>
                  <Icon name='date'/>
                    <p>JOB POSTED:</p>
                    <div>14 Jun, 2021</div>
                  </div>
                  <div className='jobDetails_body_right_bigcard_container_grid_piece'>
                  <Icon name='timer'/>
                    <p>JOB EXPIRE IN:</p>
                    <div>14 Jun, 2021</div>
                  </div>
                  <div className='jobDetails_body_right_bigcard_container_grid_piece'>
                  <Icon name='level'/>
                    <p>JOB LEVEL:</p>
                    <div>Entry Level</div>
                  </div>
                  <div className='jobDetails_body_right_bigcard_container_grid_piece'>
                  <Icon name='wallet'/>
                    <p>EXPERIENCE</p>
                    <div>14 Jun, 2021</div>
                  </div>
                  <div className='jobDetails_body_right_bigcard_container_grid_piece'>
                  <Icon name='suitcase'/>
                    <p>EDUCATION</p>
                    <div>Graduation</div>
                  </div>
                </div>
                <div className='jobDetails_body_right_bigcard_container_share'>
                  <p>Share this job</p>

                  <div className='jobDetails_body_right_bigcard_container_share_links'>
                    <Button className="button-square button-secondary"/>
                    <Button className="button-square button-secondary"/>
                    <Button className="button-square button-secondary"/>
                    <Button className="button-square button-secondary"/>
                    <Button className="button-square button-secondary"/>
                  </div>

                </div>

              </div>
              

            </div>
          </div>
        </div>

      </div>
    </>
  )
}
