import { GridOutline } from "react-ionicons";
import { Link } from "react-router-dom";

const Navbar = () => {
	const navLinks = [
		{ title: "Home", path: "/", active: true },
		{ title: "How To", path: "/howTo", active: false },
		{ title: "Services", path: "/services", active: false },
		{ title: "Blog", path: "/blog", active: false },
		{ title: "Contact", path: "/contact", active: false },
		{ title: "Newspaper", path: "/newspaper", active: false },
		{ title: "About", path: "/about", active: false },
	];
	return (
		<div className="z-[2] w-full my-auto mx-0 h-16 md:px-[60px] px-8 py-10 flex items-center justify-between absolute top-[20px]">
			<span className="text-white text-[28px] font-semibold">Logo.</span>
			<div className="items-center hidden md:flex gap-7">
				{navLinks.map((navLink) => {
					return (
						<Link
							to={navLink.path}
							key={navLink.title}
						>
							<span
								className={`font-medium ${navLink.active ? "text-blue-400" : "text-white"}`}
							>
								{navLink.title}
							</span>
						</Link>
					);
				})}
				<button className="px-6 py-3 font-semibold text-gray-900 bg-blue-400 rounded-full hover:bg-gray-700 hover:text-white">
					Book Now
				</button>
			</div>
			<div className="block cursor-pointer md:hidden">
				<GridOutline color="#fff" />
			</div>
		</div>
	);
};

export default Navbar;
