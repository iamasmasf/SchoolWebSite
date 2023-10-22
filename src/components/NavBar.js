import React , {useEffect} from 'react'
import { HiArrowCircleDown, HiArrowDown, HiArrowRight, HiArrowSmDown } from 'react-icons/hi'
import {
    Collapse,
    Dropdown,
    initTE,
  } from "tw-elements";
const NavBar = () => {
    // Initialization for ES Users
    
    useEffect(() => {
        initTE({ Collapse, Dropdown});
      }, []);
  
  return (
    <div>
        <div class="m-6">
        <a class="fixed flex items-center justify-center h-8 pr-2 pl-1  top-0 left-0 mt-10 ml-4" >
	<img  src={require('../assets/logo.jpg')}  style={{ width: '150px'}} />
</a>
	<div class="flex items-center justify-center w-full ">
		<a class="flex items-center h-16 mr-8 text-xl rounded-md p-3  cursor-pointer transition duration-500 ease-in-out  hover:text-blue-600" href="#">About Us</a>
		<a class="flex items-center h-16 mr-8 text-xl rounded-md p-3  cursor-pointer transition duration-500 ease-in-out  hover:text-blue-600" href="#">Formations</a>

		<button class="relative flex flex-col items-center group focus:outline-none">
			<div class="flex items-center h-16 text-xl rounded-md p-3  cursor-pointer transition duration-500 ease-in-out  hover:text-blue-600">
				Services
                
                   
				<svg class="w-4 h-4 mt-px ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
					<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
				</svg>
			</div>
			<div class="absolute top-0 hidden w-screen max-w-3xl mt-16 bg-white border border-black shadow-lg group-focus:visible">
				<div class="grid grid-cols-2 gap-10 p-8">
					<a class="flex" href="#">
						<span class="flex-shrink-0 w-12 h-12 bg-gray-300"></span>
						<div class="flex flex-col ml-4">
							<span class="text-left font-medium leading-none">Heading</span>
							<span class="text-left mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
						</div>
					</a>
					<a class="flex" href="#">
						<span class="flex-shrink-0 w-12 h-12 bg-gray-300"></span>
						<div class="flex flex-col ml-4">
							<span class="text-left font-medium leading-none">Heading</span>
							<span class="text-left mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing
								elit.</span>
						</div>
					</a>
					<a class="flex" href="#">
						<span class="flex-shrink-0 w-12 h-12 bg-gray-300"></span>
						<div class="flex flex-col ml-4">
							<span class="text-left font-medium leading-none">Heading</span>
							<span class="text-left mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing
								elit.</span>
						</div>
					</a>
					<a class="flex" href="#">
						<span class="flex-shrink-0 w-12 h-12 bg-gray-300"></span>
						<div class="flex flex-col ml-4">
							<span class="text-left font-medium leading-none">Heading</span>
							<span class="text-left mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing
								elit.</span>
						</div>
					</a>
				</div>
				<div class="flex items-center justify-between col-span-2 px-8 py-4 border-t border-black" href="#">
					<div class="flex flex-col">
						<span class="text-left font-medium leading-none">Heading</span>
						<span class="text-left mt-1 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
					</div>
					<a href="#" class="flex items-center h-10 px-3 bg-gray-200 ">Button</a>
				</div>
			</div>
		</button>
	</div>
</div>


    </div>
  );
};

export default NavBar;