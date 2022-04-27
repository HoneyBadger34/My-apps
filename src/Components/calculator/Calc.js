import {
	CgMathPercent,
	CgMathDivide,
	CgMathPlus,
	CgMathEqual,
} from "react-icons/cg";
import { BsDot } from "react-icons/bs";
import { RiSubtractFill, RiCloseLine, RiDeleteBack2Line } from "react-icons/ri";
import React from "react";
import { useState } from "react";

const Calc = () => {
	
	const [calcul, setCalcul] = useState('');
	const [result, setResult] = useState('');
	
	const ops = ['/','*','+','-','.'];

	const updateCalc = value => {
		if (
			ops.includes(value) && calcul === '' || 
			ops.includes(value) && ops.includes(calcul.slice(-1))	
		){
			return;
		}
		
		setCalcul(calcul + value);


		

		if (
			!ops.includes(value)
		) {
			setResult(eval(calcul + value).toString());
		}


		
	}
	
	const calculator = () => {
		setCalcul(eval(calcul).toString());
	  }
	

	const deleteLast = () => {
	  if (
		  calcul == ''
	  ){
		  return;
	  }
	  const  value = calcul.slice(0, -1);
	  
	  setCalcul(value);
	  setResult(value);
	}

	const deleteAll = () => {
		if (
			calcul == ''
		){
			return;
		}
		const  value = ''
		setCalcul(value);
		setResult(value);
	}


	
	return (
		<div className='flex'>
			<div className=' w-[200px] '>
				<div className='flex flex-col'>
					<div className='bg-aBlack  h-20 justify-end break-all  text-right text-base flex items-center px-2 text-white'>{result ? <span className="text-gray-300 text-opacity-60 text-xs mr-1">({result})</span> : ''}{calcul || 0}</div>
					<div className='h-[240px]  flex content-start flex-wrap '>
						<button onClick={deleteAll} className='bg-aLightGray border border-aBlack bold  text-black w-1/4 h-12 '>
							C
						</button>
						<button className='bg-aLightGray  text-black border border-aBlack  w-1/4 h-12 flex justify-center items-center'>
							<CgMathPercent />
						</button>
						<button onClick={deleteLast} className='bg-aLightGray text-black border border-aBlack  w-1/4 h-12 flex justify-center items-center'>
							<RiDeleteBack2Line />	
						</button>
						<button onClick={() => updateCalc('/')} className='bg-aOrange w-1/4 h-12 border border-aBlack flex justify-center items-center'>
							<CgMathDivide />
						</button>
						<button onClick={() => updateCalc('7')} className='bg-aLightGray w-1/4 h-12 border border-aBlack'>
							7
						</button>
						<button onClick={() => updateCalc('8')} className='bg-aLightGray w-1/4 h-12 border border-aBlack'>
							8
						</button>
						<button onClick={() => updateCalc('9')} className='bg-aLightGray w-1/4 h-12 border border-aBlack'>
							9
						</button>
						<button onClick={() => updateCalc('*')} className='bg-aOrange w-1/4 h-12 border border-aBlack flex justify-center items-center'>
							<RiCloseLine />
						</button>
						<button onClick={() => updateCalc('4')} className='bg-aLightGray w-1/4 h-12 border border-aBlack'>
							4
						</button>
						<button onClick={() => updateCalc('5')} className='bg-aLightGray w-1/4 h-12 border border-aBlack'>
							5
						</button>
						<button onClick={() => updateCalc('6')} className='bg-aLightGray w-1/4 h-12 border border-aBlack'>
							6
						</button>
						<button onClick={() => updateCalc('-')} className='bg-aOrange w-1/4 h-12 border border-aBlack flex justify-center items-center'>
							<RiSubtractFill />
						</button>
						<button  onClick={() => updateCalc('1')} className='bg-aLightGray w-1/4 h-12 border border-aBlack'>
							1
						</button>
						<button onClick={() => updateCalc('2')} className='bg-aLightGray w-1/4 h-12 border border-aBlack'>
							2
						</button>
						<button onClick={() => updateCalc('3')} className='bg-aLightGray w-1/4 h-12 border border-aBlack'>
							3
						</button>
						<button onClick={() => updateCalc('+')} className='bg-aOrange w-1/4 h-12 border border-aBlack flex justify-center items-center'>
							<CgMathPlus />
						</button>
						<button onClick={() => updateCalc('0')} className='bg-aLightGray w-1/2 h-12 border border-aBlack rounded-bl-md'>
							0
						</button>
						<button onClick={() => updateCalc('.')} className='bg-aLightGray w-3/12 h-12 border border-aBlack flex justify-center items-center'>
							<BsDot />
						</button>
						<button onClick={calculator} className='bg-aOrange w-3/12 h-12 border border-aBlack flex justify-center items-center rounded-br-md'>
							<CgMathEqual />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Calc;
