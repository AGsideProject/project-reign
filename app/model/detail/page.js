"use client"
import {
	motion,
	useScroll,
	useVelocity,
	useTransform,
	useSpring,
} from "framer-motion";
import React, { useRef } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'styles/swiper.css';
//modules
import { Pagination, Navigation } from 'swiper/modules'
import Image from "next/image";


export default function ModelDetail({ _params }) {
	// console.log(_params, "_params")

	const router = useRouter();
	const paramas = useParams();
	// const searchParams = useSearchParams()

	// const url = searchParams.get("item")

	// console.log(url, "< url")
	return (
		<>
			{/* <div className="my-[30px] flex justify-center">
				<div className="w-[85%] h-[65vh] bg-black">
				<img alt='model' src={url} className="w-full h-full object-cover" />
				</div>
			</div> */}

			<div className="flex flex-col justify-center items-center mb-1 mt-14 ">
				<div className="mb-6 ">
					<p className="text-3xl font-medium">Caitlin N</p>
				</div>

				<div className="hidden sm:block">
					<div className="flex flex-col gap-2 justify-center items-center w-[85vw] sm:w-[95vw] lg:w-[70vw] sm:flex-row sm:items-center sm:justify-around sm:flex-wrap sm:h-[50px] lg:gap-0 text-sm">

						<div className="">
							<p> <span className="font-medium">HEIGHT</span>: 181 CM</p>
						</div>
						<div className="">
							<p> <span className="font-medium">BUST</span>: 81 CM</p>
						</div>
						<div className="">
							<p> <span className="font-medium">WAIST</span>: 62 CM</p>
						</div>
						<div className="">
							<p> <span className="font-medium">HIPS</span>: 91 CM</p>
						</div>
						<div className="">
							<p> <span className="font-medium">SHOE</span>: 8 US</p>
						</div>
						<div className="">
							<p> <span className="font-medium ">HAIR</span>: DARK BROWN</p>
						</div>
						<div className="">
							<p> <span className="font-medium ">EYES</span>: BLUE</p>
						</div>
					</div>
				</div>
			</div>


			{/* //! showcase carousell */}
			<Swiper
				slidesPerView={1}
				navigation={true}
				pagination={{
					clickable: true,
					dynamicBullets: true,
				}}
				scrollbar={{ draggable: true }}
				loop={true}
				modules={[Pagination, Navigation,]}

				breakpoints={{
					640: { // 640px is the default width for 'sm' in Tailwind CSS
						slidesPerView: 2, // Show 2 slides on screens 640px or wider
						slidesPerGroup: 2,
					},
				}}
				className="w-[90vw] md:w-[70vw] bg-black"
			>
				<SwiperSlide >
					<div className="aspect-[3/4] bg-yellow-100">
						<img
							src={"/image/p1.JPG"}
							alt="mode"
							className="object-cover w-full h-full"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide >
					<div className="aspect-[3/4] bg-yellow-100">
						<img
							src={"/image/p2.JPG"}
							alt="mode"
							className="object-cover w-full h-full"
						/>
					</div>
				</SwiperSlide>
				{/* //! LANDSCAPE */}
				<SwiperSlide
					style={{
						flex: "0 0 100%",
					}}
				>
					<div className="aspect-[16/10.65] bg-yellow-200">
						<img
							src={"/image/l1.JPG"}
							alt="special mode"
							className="object-cover w-full h-full"
						/>
					</div>
				</SwiperSlide>
				{/* //! LANDSCAPE */}
				<SwiperSlide >
					<div className="aspect-[3/4] bg-yellow-100">
						<img
							src={"/image/p3.JPG"}
							alt="mode"
							className="object-cover w-full h-full"
						/>
					</div>
				</SwiperSlide>
			</Swiper>
			{/* //! showcase carousell */}

			<div className="flex flex-col justify-center items-center my-10 md:hidden">

				<div className="flex flex-col gap-3 justify-center items-center  text-sm">

					<div className="">
						<p> <span className="font-medium">HEIGHT</span>: 181 CM</p>
					</div>
					<div className="bg-black h-[0.5px] w-full"></div>
					<div className="">
						<p> <span className="font-medium">BUST</span>: 81 CM</p>
					</div>
					<div className="bg-black h-[0.5px] w-full"></div>

					<div className="">
						<p> <span className="font-medium">WAIST</span>: 62 CM</p>
					</div>
					<div className="bg-black h-[0.5px] w-full"></div>

					<div className="">
						<p> <span className="font-medium">HIPS</span>: 91 CM</p>
					</div>
					<div className="bg-black h-[0.5px] w-full"></div>

					<div className="">
						<p> <span className="font-medium">SHOE</span>: 8 US</p>
					</div>
					<div className="bg-black h-[0.5px] w-full"></div>

					<div className="">
						<p> <span className="font-medium ">EYES</span>: BLUE</p>
					</div>
					<div className="bg-black h-[0.5px] w-full"></div>

					<div className="">
						<p> <span className="font-medium ">HAIR</span>: DARK BROWN</p>
					</div>
					<div className="bg-black h-[0.5px] w-full"></div>

				</div>
			</div>

			<div className="flex justify-center text-white bg-[#1b1919] md:bg-white md:text-black" >
				<div className="w-[70vw] h-[100px] flex justify-center items-center md:justify-start lg:h-[180px]">
					<div className="mt-auto mb-11">
						<p className="text-xl font-medium md:text-2xl">POLAROIDS</p>
						{/* <div className="w-full bg-black h-[1px]"></div> */}
					</div>

				</div>
			</div>

			{/* <VelocityText /> */}
			{/* <div className="w-full h-32 bg-red-300"></div> */}
			<div className="grid grid-cols-1 gap-2 w-[100vw] p-2 mx-auto md:hidden">
				<div className="aspect-[3/4] bg-blue-400">
					<img
						src={"/image/p1.JPG"}
						alt="mode"
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="aspect-[3/4] bg-blue-400">
					<img
						src={"/image/p2.JPG"}
						alt="mode"
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="aspect-[3/4] bg-blue-400">
					<img
						src={"/image/p3.JPG"}
						alt="mode"
						className="object-cover w-full h-full"
					/>
				</div>

			</div>
			{/* <div className="w-full h-32 bg-red-300"></div> */}

			<div className="hidden sm:block bg-black mb-10 ">
				<Swiper
					spaceBetween={0} //! gap between photo
					slidesPerView={1}
					navigation={false}
					pagination={{
						clickable: true,
						dynamicBullets: true,
					}}
					scrollbar={{ draggable: true }}
					loop={true}
					modules={[Pagination, Navigation]}
					breakpoints={{
						// 640: { // 640px is the default width for 'sm' in Tailwind CSS
						//   slidesPerView: 5, // Show 2 slides on screens 640px or wider
						//   spaceBetween: 80
						// },
						640: { // 640px is the default width for 'sm' in Tailwind CSS
							slidesPerView: 5, // Show 2 slides on screens 640px or wider
							spaceBetween: 2
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 3
						},
						1440: {
							slidesPerView: 5, // Show 2 slides on screens 640px or wider
							spaceBetween: 3
						},
						1500: {
							slidesPerView: 5, // Show 2 slides on screens 640px or wider
							spaceBetween: 3
						}

					}}
				>
					{/* <SwiperSlide>
						<div className="aspect-[3/4] bg-blue-400">
							<img
								src={url}
								alt="mode"
								className="object-cover w-full h-full"
							/>
						</div>
					</SwiperSlide> */}
					<SwiperSlide>
						<div className="aspect-[3/4] bg-blue-400">
							<img
								src={"/image/p1.JPG"}
								alt="mode"
								className="object-cover w-full h-full"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="aspect-[3/4] bg-blue-400">
							<img
								src={"/image/p2.JPG"}
								alt="mode"
								className="object-cover w-full h-full"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="aspect-[3/4] bg-blue-400">
							<img
								src={"/image/p3.JPG"}
								alt="mode"
								className="object-cover w-full h-full"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="aspect-[3/4] bg-blue-400">
							<img
								src={"/image/l1.JPG"}
								alt="mode"
								className="object-cover w-full h-full"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="aspect-[3/4] bg-blue-400">
							<img
								src={"/image/5.jpg"}
								alt="mode"
								className="object-cover w-full h-full"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="aspect-[3/4] bg-blue-400">
							<img
								src={"/image/6.jpg"}
								alt="mode"
								className="object-cover w-full h-full"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="aspect-[3/4] bg-blue-400">
							<img
								src={"/image/7.JPG"}
								alt="mode"
								className="object-cover w-full h-full"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="aspect-[3/4] bg-blue-400">
							<img
								src={"/image/8.JPEG"}
								alt="mode"
								className="object-cover w-full h-full"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="aspect-[3/4] bg-blue-400">
							<img
								src={"/image/9.JPEG"}
								alt="mode"
								className="object-cover w-full h-full"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="aspect-[3/4] bg-blue-400">
							<img
								src={"/image/10.JPG"}
								alt="mode"
								className="object-cover w-full h-full"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="aspect-[3/4] bg-blue-400">
							<img
								src={"/image/11.JPG"}
								alt="mode"
								className="object-cover w-full h-full"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="aspect-[3/4] bg-blue-400">
							<img
								src={"/image/home.JPEG"}
								alt="mode"
								className="object-cover w-full h-full"
							/>
						</div>
					</SwiperSlide>



				</Swiper>
			</div>




			<div className="h-[10vh]"></div>
		</>
	)
}

const VelocityText = () => {
	const targetRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: targetRef,
		offset: ["start start", "end start"],
	});

	const scrollVelocity = useVelocity(scrollYProgress);

	const skewXRaw = useTransform(
		scrollVelocity,
		[-0.5, 0.5],
		["45deg", "-45deg"]
	);
	const skewX = useSpring(skewXRaw, { mass: 3, stiffness: 400, damping: 50 });

	const xRaw = useTransform(scrollYProgress, [0, 1], [0, -4000]);
	const x = useSpring(xRaw, { mass: 3, stiffness: 400, damping: 50 });

	return (
		<section
			ref={targetRef}
			className="h-[200vh] bg-white text-neutral-950"
		>
			<div className="sticky top-0 flex h-screen items-center overflow-hidden">
				<motion.p
					style={{ skewX, x }}
					className="origin-bottom-left whitespace-nowrap text-5xl font-black uppercase leading-[0.85] md:text-7xl md:leading-[0.85]"
				>
					Reign models - Reign models - Reign models - Reign models - Reign models - Reign models -
				</motion.p>
			</div>
		</section>
	);
};