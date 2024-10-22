import React, { useState, useEffect } from 'react';
import './SearchBar.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';

export default function SearchBar() {

  const [jobs, setJobs] = useState([])

  useEffect(() => {axios.get('http://localhost:3000/jobs')
  .then(function (response) {
    setJobs(response.data);
    // console.log(response.data[0])
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });}, []);

  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/findjob/${inputValue}`)
  }

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <div className="searchBar">
        <div className='searchBar_countries'>
          <div className="searchBar_countries_select">
          </div>
        </div>
        <form onSubmit={handleSearch} className='searchBar_search'>
          <input 
            type='text' 
            placeholder="Job title, keyword, company" 
            value={inputValue}
            onChange={handleInputChange}
          />
        </form>
      </div>
    </div>
  )
}
