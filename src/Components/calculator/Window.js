import Calc from "./Calc";

const AppWindow = () => {
	

	
	return (
		<div className='w-full h-full flex items-center justify-center'>
			<div className='shadow-lg w-auto flex items-start justify-start flex-col bg-aBlack rounded-lg'>
				<div className='w-full flex items-center justify-start relative p-1 border-b '>
					<div className=' flex items-center justify-center pl-1 py-[2px] gap-2 bg-aBlack'>
						<div className='bg-red-500 w-3 h-3 rounded-full cursor-pointer flex justify-center items-center text-white text-xs' ></div>
						<div className='bg-yellow-500 w-3 h-3 rounded-full cursor-pointer' />
						<div className='bg-green-500 w-3 h-3 rounded-full cursor-pointer' />
					</div>
				</div>
				<div className=''>
					<div className='flex justify-center'>
						<div className='m-[2px]'>
							<Calc />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppWindow;
