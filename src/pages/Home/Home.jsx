import React, { useEffect, useState } from 'react'
import HomeBlock from '../../components/HomeBlock/HomeBlock'
import Popular from '../../components/Popular/Popular'
import MostPopular from '../../components/MostPopular/MostPopular'
import HowWorks from '../../components/HowWorks/HowWorks'
import Featured from '../../components/Featured/Featured'
import Top from '../../components/Top/Top'
import axios from 'axios'


export default function Home() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {axios.get('http://localhost:3000/jobs')
    .then(function(response) {
      setJobs(response.data);
    })
    .catch(function(error){
      console.log(error);
    })
    .finally(function() {
    });}, []);

  return (
    <div className='home'>
      <HomeBlock/>
      <MostPopular jobs={jobs}/>
      <HowWorks/>
      <Popular jobs={jobs}/>
      <Featured/>
    </div>
  )
}
