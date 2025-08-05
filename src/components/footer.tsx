const Footer = () => {
	return (
		<footer className="w-full bg-black text-white h-[150px]">
			<div className="flex justify-between max-w-[1100px] pt-12 items-center mx-auto">
				<h1 className="text-3xl font-semibold text-white font-playfair italic ml-[52px]">
					Elixir Visuals
				</h1>
				<span className="font-bold">© 2025 Elixir Visuals</span>
				<div className="flex gap-x-5">
					<img
						className="cursor-pointer pointer-events-auto"
						src="/assets/instagram.svg"
						alt=""
					/>
					<img
						className="cursor-pointer pointer-events-auto"
						src="/assets/twitter.svg"
						alt=""
					/>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
