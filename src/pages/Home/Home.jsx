import React from 'react'
import HomeBlock from '../../components/HomeBlock/HomeBlock'
import Popular from '../../components/Popular/Popular'
import MostPopular from '../../components/MostPopular/MostPopular'
import HowWorks from '../../components/HowWorks/HowWorks'
import Featured from '../../components/Featured/Featured'
import Top from '../../components/Top/Top'

export default function Home() {
  return (
    <div className='home'>
      <HomeBlock/>
      <MostPopular/>
      <HowWorks/>
      <Popular/>
      <Featured/>
    </div>
  )
}
