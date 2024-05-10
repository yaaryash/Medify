import React from 'react'
import './Content.css'

export default function Content() {
  return (
    <div className='content'>
        <div className='content-info'>
           <div>Skip the travel! Find Online</div>
           <div><span className='content-medical'>Medical</span> <span className='content-centers'>Centers</span></div>
           <div className='content-span-info'><span className='content-span'>Connect instantly with a 24x7 specialist or choose to </span>
           <span className='content-span'> video visit a particular doctor.</span></div> 
           <button className='content-button'>Find Centers</button>
        </div>
        <img />
    </div>
  )
}
