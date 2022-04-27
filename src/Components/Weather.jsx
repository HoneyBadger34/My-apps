import React, { useEffect, useState } from 'react'
import axios from 'axios'

import {AiOutlineSwap} from 'react-icons/ai'



const Weather = () => {

  const apiKey = 'ae1f73842369abe83972f82abb62f5aa'
  
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState('');


  const [changeDegree, setChangeDegree] = useState(true)



  const getWeather = (event) => {
    if (event.key == 'Enter' ){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`).then(
        response => response.json()
        ).then(
          data => {
            setWeatherData(data)
            setCity('')
          }
        )
    }
  }
  
  return (
    <div className='flex flex-col justify-center items-center h-[90%] w-[50%]'>
      <div>
        <input 
        type='text'
        placeholder='Type a city...'
        className='h-[90%] ' 
        onChange={e => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
        />
      </div>
      <div className=' bg-silver rounded-xl flex flex-col justify-between mt-6 p-2 w-4/6 h-3/4'>

        
      {typeof weatherData.main === 'undefined' ? (
          <div> 
          <p className='text-sm text-center mt-10'>Welcome to my Weather App. You can search a city to see weather of.</p>  
          </div>
        ):(
          <div className=' flex flex-col gap-5'> 
          <div className=' bg-red-500 flex rounded-xl justify-around items-center  h-14'>

              <span className='font-ptMono'>
                {weatherData.name} 
              </span> 
              <span className='flex items-center gap-2'>
                <span className='text-xs opacity-70 font-ptMono'>{weatherData.sys.country}</span>
                <img className='w-10 h-6' alt={`${weatherData.sys.country} flag.`} src={`http://purecatamphetamine.github.io/country-flag-icons/1x1/${weatherData.sys.country}.svg`}/>
              </span>  
          </div>   
          <div className='bg-green-500 flex justify-center items-center text-5xl font-roboto rounded-xl h-24'>
            <div className='w-1/2 text-center'>
              {changeDegree ? Math.round(weatherData.main.temp) :
              (Math.round(weatherData.main.temp) * 9/5) +  32 
               } 
            </div>
            <div className='w-1/2 justify-center text-center'>
              <div >{
                changeDegree ? 
                <div className='flex items-center'><span>°C</span><button onClick={() => setChangeDegree(!changeDegree)} className='text-xs ml-2'><AiOutlineSwap /></button><span className='text-xs ml-3'>°F</span></div> : 
                <div className='flex items-center'><span>°F</span><button onClick={() => setChangeDegree(!changeDegree)}  className='text-xs ml-2'><AiOutlineSwap /></button><span className='text-xs ml-3'>°C</span></div>
              }</div>
              
            </div>  

          </div>
          <div className='bg-purple-400 flex h-20 justify-around rounded-xl items-center'> 
            <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} />
            <span className='font-ptMono'>{weatherData.weather[0].main}</span>
          </div> 
           
          </div>
        )}

        <div className='mt-10 flex justify-center'>
        {
          weatherData.cod === '404' ? (
            <p>City not found :(</p> 

          ) : (
            <>
            </>
          )
        }
        </div>
                
      </div>
    </div>  
  )
}

export default Weather