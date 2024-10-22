import React from 'react'
import HeaderSearchBar from './HeaderSearchBar/HeaderSearchBar'
import './HeaderSearch.scss'
import Button from '../Button/Button'
import Icon from '../Icon/Icon'

export default function HeaderSearch() {
  return (
    <div className="container">
        <div className='headerSearch'>
            <div className='headerSearch_logo'>
            <Icon name="logo"/>
              JobPilot
            </div>
            <HeaderSearchBar/>
        </div>
        <div className='headerSearch_buttons'>
                <Button 
                    text="Sign in"
                    className="button button-secondary"
                />
                <Button 
                    text="Post A Jobs"
                    className="button button-primary"
                />
        </div>

    </div>
  )
}
