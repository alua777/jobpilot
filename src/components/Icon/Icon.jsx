import React from 'react'
import './Icon.scss'
import icons from './icons.json'

export default function Icon({name, className}) {
  return (
    <div 
      className={className}
      dangerouslySetInnerHTML={{ __html: icons[name] }}/>
  )
}












