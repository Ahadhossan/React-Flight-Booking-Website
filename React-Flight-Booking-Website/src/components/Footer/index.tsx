const Footer = () => {
	return (
		<div className="flex flex-col items-center justify-between w-full gap-8 px-10 py-8 border-t border-dashed md:flex-row md:gap-0 border-slate-300">
			<span className="font-medium text-slate-700">
				Copyright © 2024 Ahad Hossain . All rights reserved.
			</span>
			<div className="flex items-center gap-8">
				<a
					href="#"
					className="font-medium whitespace-nowrap md:text-[15px] text-[10.5px] text-gray-600 hover:text-blue-600"
				>
					Terms and conditions
				</a>
				<a
					href="#"
					className="font-medium whitespace-nowrap md:text-[15px] text-[10.5px] text-gray-600 hover:text-blue-600"
				>
					Long Term Contracts
				</a>
				<a
					href="#"
					className="font-medium whitespace-nowrap md:text-[15px] text-[10.5px] text-gray-600 hover:text-blue-600"
				>
					Copyright Policy
				</a>
				<a
					href="#"
					className="font-medium whitespace-nowrap md:text-[15px] text-[10.5px] text-gray-600 hover:text-blue-600"
				>
					Customer Support
				</a>
			</div>
		</div>
	);
};

export default Footer;
