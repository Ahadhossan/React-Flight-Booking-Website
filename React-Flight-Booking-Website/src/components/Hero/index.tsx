import plane from "../../assets/images/plane.png";

const Hero = () => {
	return (
		<div className="hero z-[1] w-full h-[120vh] grid place-items-center bg-[#141b2b] relative">
			<div className="flex md:flex-row flex-col items-center w-full md:px-[60px] px-6 justify-between md:gap-0 gap-28">
				<div className="flex flex-col w-full gap-3 left-animation">
					<span className="text-blue-400 text-[28px] font-medium">
						Welcome To Our Website!
					</span>
					<span className="text-white font-medium md:text-[60px] text-[45px]">
						Luxury Experience <br /> With Our Services.
					</span>
					<span className="text-white font-medium text-[60px]"></span>
					<span className="text-white leading-7 max-w-[500px] text-justify">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam nulla ipsa unde
						inventore minus commodi saepe? Eos cumque aliquam consequatur id optio dolorum
						modi quod?
					</span>
					<div className="flex items-center mt-5 gap-7">
						<button className="px-6 py-3 font-semibold text-gray-900 bg-blue-400 rounded-full">
							Book Flight
						</button>
						<button className="border-[2px] border-blue-400 px-6 py-3 text-white font-semibold rounded-full">
							Contact Us
						</button>
					</div>
				</div>
				<img
					src={plane}
					className="md:w-[53%] w-full right-animation"
					alt=""
				/>
			</div>
		</div>
	);
};

export default Hero;
