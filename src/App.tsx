import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import Rating from "./components/rating";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	type CarouselApi,
} from "./components/ui/carousel";

const links = ["Home", "Web Solutions", "Reviews", "Contact"];

function App() {
	const [api, setApi] = useState<CarouselApi>();

	const handleNext = () => api?.scrollNext();
	const handlePrev = () => api?.scrollPrev();

	return (
		<section className="bg-[#F9F9F9]">
			<section className="w-full min-h-screen bg-white pt-[72px] flex flex-col items-center">
				<nav className="bg-transaparent absolute top-0 w-full z-10 flex justify-between p-4 px-16">
					<div className="flex items-center gap-x-1">
						<img
							className="size-9"
							src="/assets/logo.png"
							alt=""
						/>
						<span className="text-lg text-white font-bold">Elixir Visuals</span>
					</div>
					<div className="flex gap-x-4">
						{links.map((link) => (
							<a
								href="#"
								className="text-white p-2 capitalize"
							>
								{link}
							</a>
						))}
					</div>
					<button
						type="button"
						className="text-[#5300E4] font-bold px-7 py-2 bg-white rounded-sm"
					>
						Hire us
					</button>
				</nav>
				<header className="relative z-10 text-center text-white pt-[60px] flex flex-col items-center gap-y-8 w-fit">
					<h1 className="font-bold text-[70px] leading-[97%]">
						Your Business’ Website. <br /> Revolutionised
					</h1>
					<p className="text-[17px] leading-[150%]">
						At Elixir visuals, we’re dedicated to tailoring websites that help
						<br /> your business get the most out of the internet.
					</p>
					<button
						type="button"
						className="text-[#5300E4] font-bold px-7 py-2 bg-white rounded-sm w-fit"
					>
						Learn More
					</button>
					<img
						className="absolute top-[33px] right-[30px]"
						src="/assets/emphasis.png"
						alt=""
					/>
				</header>

				<img
					className="relative z-10 object-cover aspect-auto mt-auto mb-7 animate-slow-hover"
					src="/assets/mouse.png"
					alt=""
				/>

				<img
					className="absolute z-0 object-cover w-full h-full top-0 bottom-0"
					src="/assets/hero-bg.png"
					alt=""
				/>
			</section>
			<section className="min-h-screen pt-11 px-16 pb-[162px] relative">
				<header className="text-center font-bold text-4xl leading-[95%] w-fit mx-auto relative">
					<span>
						You don’t just need “a”{" "}
						<span className="text-[#9747FF]">Website</span>
					</span>
					<br />
					<span className="inline-block mt-3 text-[#999999]">
						You need a platform that{" "}
						<span className="text-[#9747FF]">grows</span> your business
					</span>
					<img
						className="absolute bottom-[11px] right-[-19px]"
						src="/assets/surprise.svg"
						alt=""
					/>
				</header>
				<div className="mt-[60px] grid xl:grid-cols-2 gap-5">
					<div className="bg-[#E5E5E5] rounded-[20px] h-[477px]"></div>
					<div className="grid grid-cols-2 grid-rows-2 gap-5 h-[477px]">
						<div className="bg-[#E5E5E5] rounded-[20px] w-full h-full"></div>
						<div className="bg-[#E5E5E5] rounded-[20px] w-full h-full"></div>
						<div className="bg-[#E5E5E5] rounded-[20px] w-full h-full"></div>
						<div className="bg-[#E5E5E5] rounded-[20px] w-full h-full"></div>
					</div>
				</div>
				<div className="absolute bottom-0 left-0 z-10">
					<img
						className="object-cover h-full w-full"
						src="/assets/curved-arrow.svg"
						alt=""
					/>
				</div>
			</section>
			<section className="mx-16 relative rounded-[20px] bg-white py-11 px-6">
				<header className="flex">
					<h2 className="text-[#484848] font-bold text-[40px] leading-[107%]">
						Don’t just take it from us, <br /> hear what our customers <br />{" "}
						have to say!
					</h2>
					<div className="ml-auto flex item-center gap-x-1.5">
						<button
							onClick={handlePrev}
							className="flex items-center rounded-full justify-center bg-[#EAEAEA] size-[57px]"
						>
							<ArrowLeft stroke="#484848" />
						</button>
						<button
							onClick={handleNext}
							className="flex items-center rounded-full justify-center bg-black size-[57px]"
						>
							<ArrowRight stroke="#ffffff" />
						</button>
					</div>
				</header>
				<Carousel
					opts={{
						align: "start",
						loop: true,
					}}
					setApi={setApi}
					className="w-full"
				>
					<CarouselContent className="mt-[51px] gap-x-5">
						{Array.from({ length: 10 }).map((_, index) => (
							<CarouselItem
								key={index}
								className="h-[287px] max-w-[414px] bg-[#F9F9F9] py-10.5 px-11 rounded-2xl"
							>
								<div className="flex items-center">
									<div className="flex gap-x-1.5">
										<Avatar className="size-[61px]">
											<AvatarImage src="https://github.com/shadcn.png" />
											<AvatarFallback>CN</AvatarFallback>
										</Avatar>
										<div>
											<span className="font-semibold text-2xl">David Ola</span>
											<Rating rate={5} />
										</div>
									</div>
									<img
										className="w-10.5 h-6 ml-auto"
										src="/assets/nigerian-flag.svg"
										alt=""
									/>
								</div>
								<p className="mt-8.5 text-[#525252] font-medium">
									A professional website is one that would help in the
									development of things like this and aid in the credibility and
									trust of your
								</p>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</section>
			<section className="min-h-screen px-16 pt-[138px] relative">
				<h2 className="text-center text-[#484848] font-bold text-[50px] leading-[107%]">
					Gallery
				</h2>
				<div className="flex gap-x-9.5">
					<div className="bg-[#E5E5E5] rounded-[20px] h-[548px] max-w-[408px] w-full"></div>
					<div className="bg-[#E5E5E5] rounded-[20px] h-[548px] max-w-[408px] w-full mt-[101px]"></div>
					<div className="bg-[#E5E5E5] rounded-[20px] h-[548px] max-w-[408px] w-full"></div>
				</div>
			</section>
		</section>
	);
}

export default App;
