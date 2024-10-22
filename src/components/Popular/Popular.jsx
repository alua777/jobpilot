import React from 'react'
import './Popular.scss'
import Card from '../Card/Card'

export default function Popular() {
  const categories = [
    ['Graphics & Design', '357 Open position'],
    ['Graphics & Design', '357 Open position'],
    ['Graphics & Design', '357 Open position'],
    ['Graphics & Design', '357 Open position'],
    ['Graphics & Design', '357 Open position'],
    ['Graphics & Design', '357 Open position'],
    ['Graphics & Design', '357 Open position'],
    ['Graphics & Design', '357 Open position']
  ]
    
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
          {categories.map(category => (
            <Card title={category[0]} description={category[1]} type="popular"/>
          ))}
        </div>
      </div>
    </div>
  )
}
