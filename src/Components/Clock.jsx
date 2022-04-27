import React, { useState } from 'react';
import moment from 'moment';
import Clock from 'react-live-clock';

import {BsFillSunFill, BsMoonStarsFill} from 'react-icons/bs'

const DigClock = () => {
  
  const [light, setLight] = useState('false')

  return (
    
    <div className='flex flex-col items-center justify-center'>
      <button onClick={() => setLight(!light)} className='py-[3px] pt-1 px-3 text-xs bg-aDarkGray rounded-t-lg font-turret'>{light ? <BsFillSunFill className='text-yellow-300'/> : <BsMoonStarsFill className='text-yellow-50'/> }</button>
      <div className='w-44 h-40 bg-aDarkGray rounded-3xl flex flex-col justify-center items-center'>
        
        <div className='w-40 h-36 bg-night rounded-2xl flex flex-col justify-around items-center' >
          <span className='text-white cursor-pointer font-exo'>C A S I O</span>
          <div className={light ? 'w-36 h-24 bg-night text-green-400 rounded-lg flex justify-center items-center  flex-wrap' : 'w-36 h-24 bg-green-400 rounded-lg flex justify-center items-center  flex-wrap'}>
            <span className='h-6  w-1/2 flex justify-center items-center text-lg  font-watchMono'>{moment().format('dd')}</span>
            <span className='h-6  w-1/2  flex justify-center items-center text-lg font-watchMono'>{moment().format('D')}</span>
            <span className='h-10 w-full  flex justify-center items-center text-2xl  font-watchMono  	 border-2 border-night m-1 rounded-lg'><Clock format={'HH:mm:ss'} ticking={true} timezone={'UTC +3'} /></span>
          </div>
        </div>
      </div>
    </div>

  )
}

export default DigClock