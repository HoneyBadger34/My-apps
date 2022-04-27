import React, {useEffect , useState} from 'react'
import axios from 'axios'


import {FaBtc} from 'react-icons/fa'
import {AiFillEuroCircle} from 'react-icons/ai'

import {
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";


const Coin = () => {
  
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState(``)

  const link = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false`
  
  useEffect(() => {
    axios.get(link)
    .then(res =>
      {
      setCoins(res.data);
      console.log(res.data);
      }).catch(error => {
        alert('There is an error please check console.')
        console.log(error)
      })
    }, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }  

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase()) ||coin.symbol.toLowerCase().includes(search.toLowerCase())
    )
  


  return (
    <div className=''>
    <div className='flex flex-1 items-center  gap-20 justify-center overflow-auto'>
            <div className="pb-3"> <Link to="/finance/coin"><FaBtc /></Link></div>
            <div className="opacity-50"> <Link to="/finance/currency"><AiFillEuroCircle /></Link></div>
            
    </div>

    <div className=''>
      <div>
        <form className='flex justify-center items-center mt-2'>
          <input 
          type="search"
          placeholder="Type a coin"
          className=''
          onChange={handleChange}
          />
        </form>
      </div>    
      <div className=' flex flex-col w-[550px] h-[450px] bg-aLightGray rounded-lg mt-3 flex-1 overflow-x-auto scroll'>
      
      {filteredCoins.map(coin => {
       return(
        
            
      <div className='p-2 flex justify-between rounded-full my-2 cursor-pointer mx-3 trans hover:bg-aDarkGray hover:bg-opacity-5'>
      
        <div className='flex gap-1'>
            <div>{coin.market_cap_rank}</div>
              <div>
                <img alt='Coin Logo' className='w-5 h-5' src={coin.image}/>
              </div>
            <div>{coin.name}</div>
        </div>        
        <div className='text-sm flex justify-center w-20 items-center gap-2'>
          {coin.symbol}
        </div>
        <div className='flex justify-end items-center gap-4'>
            <div>${coin.current_price}</div>
            <div>${coin.market_cap}</div> 
        </div>


        
              
      </div>    
     

        
        
        )})}
      
      </div>  
      
    </div>
    
  </div>
  )
}

export default Coin