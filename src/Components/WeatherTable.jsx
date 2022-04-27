import React from 'react'

const WeatherTable = ({city}) => {
  
    return (

        <div className='bg-red-400 w-full h-40 mt-5 p-5 flex flex-col justify-between items-center'> 
            
        {city.name} 
          {city.weather[0].main}
          {city.main.temp}°
            
            
        
        </div>
    
  )
}

export default WeatherTable