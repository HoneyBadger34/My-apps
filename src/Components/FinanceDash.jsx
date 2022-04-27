import React from 'react'
import {
    Routes,
    Route,
    Link,
    Outlet,
  } from "react-router-dom";

import Coin from './Finance/Coin'

import Currency from './Finance/Currency'
import Todo from './Todo';

import {FaBtc} from 'react-icons/fa'
import {AiFillEuroCircle} from 'react-icons/ai'





const FinanceDash = () => {
  return (
    
    <div>
    <div className='flex flex-1 items-center gap-20 justify-center'>
            <div className=""> <Link to="/finance/coin"><FaBtc /></Link></div>
            <div className=""> <Link to="/finance/currency"><AiFillEuroCircle /></Link></div>
            
    </div>

    <div >
       
    </div>
  </div>
        
    
  )
}




export default FinanceDash
