import React, {useEffect, useState} from 'react'

import {FaBtc} from 'react-icons/fa'
import {AiFillEuroCircle} from 'react-icons/ai'

import {
	BrowserRouter as Router,
	Route, Routes, Link 
  } from "react-router-dom";
import axios from 'axios';

import {RiArrowDropDownFill} from 'react-icons/ri'



const Currency = () => {
  

  const [rates, setRates] = useState([])


  useEffect(() => {
    axios.get(`http://data.fixer.io/api/latest?access_key=37a0f448b92c3ab3070ca0505fe6a573`).then(response => {
      setRates(response.data.rates)
      
      
    })
  }, [])
  
  
  
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-1 items-center gap-20 justify-center'>
              <div className="opacity-50"> <Link to="/finance/coin"><FaBtc /></Link></div>
              <div className=" pb-3"> <Link to="/finance/currency"><AiFillEuroCircle /></Link></div>
              
      </div>

    <div className='mt-7 bg-aLightGray w-[400px]  flex flex-1 flex-col justify-center rounded-xl p-2'>
      <p className='flex mb-[10px] border-b-[1px] py-2 justify-center items-center'>
        <img className='w-10 h-6 mr-8' alt="Country Flag" src='http://purecatamphetamine.github.io/country-flag-icons/1x1/EU.svg'/> 1€ Equals <RiArrowDropDownFill />
      </p>
      <div className='overflow-x-auto flex flex-col h-[400px] scroll'>
        <div className='flex mb-[10px] border-b-[1px] py-2'>
            <img className='w-10 h-6 mr-8' alt="Country Flag" src='http://purecatamphetamine.github.io/country-flag-icons/1x1/TR.svg'/>     {rates.TRY}       ₺
        </div> 
        <div className='flex mb-[10px] border-b-[1px] py-2'>
            <img className='w-10 h-6 mr-8' alt="Country Flag" src='http://purecatamphetamine.github.io/country-flag-icons/1x1/US.svg'/>     {rates.USD}       $
        </div> 
        <div className='flex mb-[10px] border-b-[1px] py-2'>
            <img className='w-10 h-6 mr-8' alt="Country Flag" src='http://purecatamphetamine.github.io/country-flag-icons/1x1/AU.svg'/>     {rates.AUD}       A$
        </div> 
        <div className='flex mb-[10px] border-b-[1px] py-2'>
            <img className='w-10 h-6 mr-8' alt="Country Flag" src='http://purecatamphetamine.github.io/country-flag-icons/1x1/GB.svg'/>     {rates.GBP}       £
        </div> 
        <div className='flex mb-[10px] border-b-[1px] py-2'>
            <img className='w-10 h-6 mr-8' alt="Country Flag" src='http://purecatamphetamine.github.io/country-flag-icons/1x1/CA.svg'/>     {rates.CAD}       C$
        </div>
        <div className='flex mb-[10px] border-b-[1px] py-2'>
            <img className='w-10 h-6 mr-8' alt="Country Flag" src='http://purecatamphetamine.github.io/country-flag-icons/1x1/IN.svg'/>     {rates.INR}       ₹
        </div> 
        <div className='flex mb-[10px] border-b-[1px] py-2'>
            <img className='w-10 h-6 mr-8' alt="Country Flag" src='http://purecatamphetamine.github.io/country-flag-icons/1x1/JP.svg'/>     {rates.JPY}       ¥
        </div> 
        <div className='flex mb-[10px] border-b-[1px] py-2'>
            <img className='w-10 h-6 mr-8' alt="Country Flag" src='http://purecatamphetamine.github.io/country-flag-icons/1x1/IL.svg'/>     {rates.ILS}       ₪
        </div> 
        <div className='flex mb-[10px] border-b-[1px] py-2'>
            <img className='w-10 h-6 mr-8' alt="Country Flag" src='http://purecatamphetamine.github.io/country-flag-icons/1x1/KR.svg'/>     {rates.KRW}       ₩
        </div> 
        <div className='flex mb-[10px] border-b-[1px] py-2'>
            <img className='w-10 h-6 mr-8' alt="Country Flag" src='http://purecatamphetamine.github.io/country-flag-icons/1x1/CH.svg'/>     {rates.CHF}       CHF
        </div>
        <div className='flex mb-[10px] border-b-[1px] py-2'>
            <img className='w-10 h-6 mr-8' alt="Country Flag" src='http://purecatamphetamine.github.io/country-flag-icons/1x1/RU.svg'/>     {rates.RUB}       ₽
        </div>
        <div className='flex '>
            <img className='w-10 h-6 mr-8' alt="Country Flag" src='http://purecatamphetamine.github.io/country-flag-icons/1x1/CN.svg'/>     {rates.CNY}       ¥
        </div>
      </div>      
    

    </div>
  </div>
  )
}

export default Currency