import React from 'react'
import './MostPopular.scss'
import Card from '../Card/Card'
import Button from '../Button/Button'

export default function MostPopular() {

  const categories = [
    ['Graphics & Design', '357'],
    ['Graphics & Design', '357'],
    ['Graphics & Design', '357'],
    ['Graphics & Design', '357'],
    ['Graphics & Design', '357'],
    ['Graphics & Design', '357'],
    ['Graphics & Design', '357'],
    ['Graphics & Design', '357']
  ]
    
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
          {categories.map(category => (
            <div className='block_body_grid_card'>
              <h1>{category[0]}</h1>
              <p>{category[1]} Open Positions</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
