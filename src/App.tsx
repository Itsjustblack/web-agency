import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import Footer from "./components/footer";
import Rating from "./components/rating";
import { Avatar, AvatarFallback } from "./components/ui/avatar";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	type CarouselApi,
} from "./components/ui/carousel";

const links = ["home", "reviews", "gallery"];

const REVIEWS = [
	{
		name: "David Adeyemi",
		firstName: "David",
		lastName: "Adeyemi",
		country: "Nigeria",
		description:
			"Jason built a seamless gift card platform with excellent Paystack integration. His eye for UI/UX and smooth animations truly elevated the product.",
		rating: 5,
	},
	{
		name: "Chisom Daniels",
		firstName: "Chisom",
		lastName: "Daniels",
		country: "Nigeria",
		description:
			"Jason transformed our designs into a stunning, interactive e-commerce site. His use of Framer Motion gave the platform a modern, premium feel.",
		rating: 5,
	},
	{
		name: "Samuel Ikenna",
		firstName: "Samuel",
		lastName: "Ikenna",
		country: "Nigeria",
		description:
			"Jason improved our site’s performance and user experience with clean code. His collaboration with designers brought great visual polish to the site.",
		rating: 4.7,
	},
];

function App() {
	const [api, setApi] = useState<CarouselApi>();

	const handleNext = () => api?.scrollNext();
	const handlePrev = () => api?.scrollPrev();

	// const { openModal } = useModalContext();

	return (
		<main className="bg-[#F9F9F9]">
			<section
				id="home"
				className="w-full min-h-screen bg-white pt-[72px] flex flex-col items-center"
			>
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
								href={`#${link}`}
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
					<div className="bg-[#E5E5E5] rounded-[20px] h-full min-h-[477px] flex">
						<div className="flex items-center mt-auto p-7 w-full gap-x-6">
							<span className="text-[#484848] font-extrabold text-3xl">
								Here’s why we should make you a for your business
							</span>
							<img
								className="h-9.5 shrink-0 object-cover ml-auto"
								src="/assets/arrow.svg"
								alt=""
							/>
						</div>
					</div>
					<div className="grid grid-cols-2 grid-rows-2 gap-5 min-h-[477px]">
						<div className="relative bg-[#5300E4] rounded-[20px] p-4 text-white">
							<img
								className="size-[57px] object-cover ml-auto"
								src="/assets/24-hours.png"
								alt=""
							/>

							<p className="text-2xl font-extrabold mt-7">
								24/7 Online Presence
							</p>
							<p className="mt-4 text-lg">
								Your business is always accessible even when you’re asleep
							</p>
						</div>
						<div className="relative bg-[#5300E4] rounded-[20px] p-4 text-white">
							<img
								className="size-[57px] object-cover ml-auto"
								src="/assets/speaker.png"
								alt=""
							/>

							<p className="text-2xl font-extrabold mt-7">Better Marketing</p>
							<p className="mt-4 text-lg">
								Showcase your work, get leads, and convert visitors into lasting
								customers
							</p>
						</div>
						<div className="relative bg-[#5300E4] rounded-[20px] p-4 text-white">
							<img
								className="size-[57px] object-cover ml-auto"
								src="/assets/shield.png"
								alt=""
							/>
							<p className="text-2xl font-extrabold mt-7">
								Credibility and Trust
							</p>
							<p className="mt-4 text-lg">
								A professional website builds confidence with potential clients
							</p>
						</div>
						<div className="relative bg-[#5300E4] rounded-[20px] p-4 text-white">
							<img
								className="size-[57px] object-cover ml-auto"
								src="/assets/shield.png"
								alt=""
							/>
							<p className="text-2xl font-extrabold mt-7">
								Credibility and Trust
							</p>
							<p className="mt-4 text-lg">
								A professional website builds confidence with potential clients
							</p>
						</div>
					</div>
				</div>
				<div className="absolute bottom-0 left-0 z-10 lg:size-[200px] xl:size-[220px]">
					<img
						className="object-cover h-full w-full"
						src="/assets/curved-arrow.svg"
						alt=""
					/>
				</div>
				<div className="absolute top-0 right-0 z-10 ">
					<img
						className="object-fill h-full w-full"
						src="/assets/curved-arrow-2.svg"
						alt=""
					/>
				</div>
			</section>
			<section
				id="reviews"
				className="mx-16 relative rounded-[20px] bg-white py-11 px-6"
			>
				<img
					className="w-5 h-5.5 absolute left-2 top-9 shrink-0 object-cover"
					src="/assets/star.svg"
					alt=""
				/>
				<header className="flex">
					<div className="relative">
						<h2 className="text-[#484848] font-bold text-[40px] leading-[107%]">
							Don’t just take it from us, <br /> hear what our customers <br />{" "}
							have to say!
						</h2>
						<img
							className="w-5 h-5.5 absolute -right-4 top-10 object-cover"
							src="/assets/asterisk.svg"
							alt=""
						/>
					</div>
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
						{REVIEWS.map((review, index) => (
							<CarouselItem
								key={index}
								className="h-[287px] max-w-[414px] bg-[#F9F9F9] py-10.5 px-11 rounded-2xl"
							>
								<div className="flex items-center">
									<div className="flex gap-x-1.5">
										<Avatar className="size-[61px]">
											{/* <AvatarImage src="https://github.com/shadcn.png" /> */}
											<AvatarFallback>
												{review.firstName[0] + review.lastName[0]}
											</AvatarFallback>
										</Avatar>
										<div>
											<span className="font-semibold text-2xl">{`${review.firstName} ${review.lastName}`}</span>
											<Rating rate={review.rating} />
										</div>
									</div>
									<img
										className="w-10.5 h-6 ml-auto"
										src="/assets/nigerian-flag.svg"
										alt=""
									/>
								</div>
								<p className="mt-8.5 text-[#525252] font-medium">
									{review.description}
								</p>
							</CarouselItem>
						))}
					</CarouselContent>
				</Carousel>
			</section>
			<section
				id="gallery"
				className="relative min-h-screen px-16 pt-[138px]"
			>
				<h2 className="text-center text-[#484848] font-bold text-[50px] leading-[107%]">
					Gallery
				</h2>
				<div className="grid grid-cols-3 gap-x-9.5 z-5 relative mt-20">
					<a href="https://bellpay.vercel.app/">
						<img
							className="object-cover rounded-lg aspect-video h-[280px]"
							src="/assets/bellpay.jpg"
							alt=""
							loading="eager"
							fetchPriority="high"
						/>
					</a>

					<a href="https://luton-apparel.vercel.app/">
						<img
							className="object-cover rounded-lg aspect-video h-[280px] mt-20"
							src="/assets/luton.jpg"
							alt=""
							loading="eager"
							fetchPriority="high"
						/>
					</a>

					<a href="https://www.omnikado.com/">
						<img
							className="object-cover rounded-lg aspect-video h-[280px]"
							src="/assets/omnikado.jpg"
							alt=""
							loading="eager"
							fetchPriority="high"
						/>
					</a>
				</div>
				<img
					className="absolute z-1 right-0 top-0 object-cover"
					src="/assets/blob.svg"
					alt=""
				/>
				<img
					className="absolute z-1 left-0 bottom-0 object-cover"
					src="/assets/blob-2.svg"
					alt=""
				/>
			</section>
			<Footer />
		</main>
	);
}

export default App;
