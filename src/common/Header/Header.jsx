import React from 'react'
import './Header.scss'
import { useNavigate } from 'react-router-dom'
export default function Header() {
    const navigate = useNavigate();
    const tabs = ['Home', 'Find Job', 'Employers', 'Candidates', 'Pricing Plans', 'Customer Supports']
    const handleClick = (tab) => {
        switch (tab) {
            case 'Home': 
                navigate('/');
                break;
            case 'Find Job':
                navigate('/findjob');
                break;
            default:
                navigate('fhgfhgf')
        }
    }
  return (
    <div className='header container'>
    {/* <div className="header"> */}
        <div className="header_tabs">
            {tabs.map(tab => (
                <div className='header_tabs_tab' key={tab} onClick={()=>handleClick(tab)} style={{cursor: "pointer"}}>{tab}</div>
            ))}
        </div>
        <div className="header_number">
            <div className="header_number-number">+1-202-555-0178</div>
            
        </div>
    {/* </div> */}
    </div>
  )
}
