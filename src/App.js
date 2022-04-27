import React, { useState } from "react";
import {
	BrowserRouter as Router,
	Route, Routes, Link 
  } from "react-router-dom";

import Home from "./components/Home";
import AppWindow from './components/calculator/Window'
import Weather from "./components/Weather";
import DigClock from "./components/Clock";
import Todo from "./components/Todo";
import Calendar from "./components/Calendar";
import FinanceDash from "./components/FinanceDash";

import {BsClock} from 'react-icons/bs'
import {AiFillHome, AiOutlineLineChart  } from 'react-icons/ai'
import { HiCalculator } from 'react-icons/hi'
import {TiWeatherPartlySunny} from 'react-icons/ti'
import {RiCalendarTodoFill} from 'react-icons/ri'
import Coin from "./components/Finance/Coin";
import Currency from "./components/Finance/Currency";

// imma add finance page as well


const App = () => {
	
	const [close , setClose ] = useState(true);

	
	
	return (
		<div className="h-screen flex flex-wrap justify-between flex-col">
			
			
			<div className="flex flex-1 h-[90%] items-center justify-center ">
			<div className="w-[80%] h-[90%] flex items-start justify-center rounded">
			<Routes>
      			<Route path="/" element={<Home />}/>
				<Route path="/calc" element={<AppWindow />}/>
				<Route path="/weather" element={<Weather />}/>
				<Route path="/calendar" element={<Calendar />}/>
				<Route path="/clock" element={<DigClock />}/>
				<Route path="/todo" element={<Todo />}/>
				<Route path="/finance" element={<FinanceDash />}/>
				
				

				<Route path="/finance/coin" element={<Coin />}/>
				<Route path="/finance/currency" element={<Currency />}/>
				
			
			</Routes>
			</div>
			
			</div>
			

			<div className="h-14 w-full flex justify-center items-center bg-aLightGray">
				<div className="bg-aLightGray hover:bg-aGray hover:bg-opacity-10 transitionn  w-12 h-12 rounded-full text-2xl flex justify-center items-center"> <Link to="/"><AiFillHome /></Link>   </div>
				<div  className="bg-aLightGray hover:bg-aGray hover:bg-opacity-10 transitionn  w-12 h-12 rounded-full text-2xl flex justify-center items-center"> <Link to="/calc"><HiCalculator /></Link>  </div>
				<div  className="bg-aLightGray hover:bg-aGray hover:bg-opacity-10 transitionn  w-12 h-12 rounded-full text-2xl flex justify-center items-center"> <Link to="/weather"><TiWeatherPartlySunny /></Link> </div>
				<div  className="bg-aLightGray hover:bg-aGray hover:bg-opacity-10 transitionn  w-12 h-12 rounded-full text-2xl flex justify-center items-center"> <Link to="/clock"><BsClock /></Link> </div>
				<div  className="bg-aLightGray hover:bg-aGray hover:bg-opacity-10 transitionn  w-12 h-12 rounded-full text-2xl flex justify-center items-center"> <Link to="/todo"><RiCalendarTodoFill /></Link> </div>
				<div  className="bg-aLightGray hover:bg-aGray hover:bg-opacity-10 transitionn  w-12 h-12 rounded-full text-2xl flex justify-center items-center"> <Link to="/finance/"><AiOutlineLineChart /></Link> </div>
			</div>
		</div>
	);
};

export default App;
