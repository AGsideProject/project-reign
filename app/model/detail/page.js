"use client"

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
	const searchParams = useSearchParams()

	const url = searchParams.get("item")

	console.log(url, "< url")
	return (
		<>
			{/* <div className="my-[30px] flex justify-center">
				<div className="w-[85%] h-[65vh] bg-black">
				<img alt='model' src={url} className="w-full h-full object-cover" />
				</div>
			</div> */}

			<div className="flex flex-col justify-center items-center mb-1 mt-14 ">
				<div className="mb-6 animate-fade-right animate-once animate-duration-[3000ms] animate-ease-in-out">
					<p className="text-3xl font-medium">Model Name</p>
				</div>

				<div className="flex flex-col gap-2 justify-center items-center w-[85vw] sm:w-[95vw] lg:w-[70vw] sm:flex-row sm:items-center sm:justify-around sm:flex-wrap sm:h-[50px] lg:gap-0 text-sm">

					<div className="animate-fade-right animate-once animate-duration-[3000ms] animate-ease-in-out">
						<p> <span className="font-medium">HEIGHT</span>: 181 CM</p>
					</div>
					<div className="animate-fade-right animate-once animate-duration-[3000ms] animate-ease-in-out">
						<p> <span className="font-medium">BUST</span>: 81 CM</p>
					</div>
					<div className="animate-fade-right animate-once animate-duration-[3000ms] animate-ease-in-out">
						<p> <span className="font-medium">WAIST</span>: 62 CM</p>
					</div>
					<div className="animate-fade-right animate-once animate-duration-[3000ms] animate-ease-in-out">
						<p> <span className="font-medium">HIPS</span>: 91 CM</p>
					</div>
					<div className="animate-fade-right animate-once animate-duration-[3000ms] animate-ease-in-out">
						<p> <span className="font-medium">SHOE</span>: 8 US</p>
					</div>
					<div className="animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out">
						<p> <span className="font-medium ">HAIR</span>: DARK BROWN</p>
					</div>
					<div className="animate-fade-right animate-once animate-duration-[1000ms] animate-ease-in-out">
						<p> <span className="font-medium ">EYES</span>: BLUE</p>
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
					slidesPerGroup: 1,
				},
			}}
			className="w-[70vw] bg-black"
		>


		<SwiperSlide >
			<div className="aspect-[3/4] bg-yellow-100">
			<img
				src={"/image/p1.jpg"}
				alt="mode"
				className="object-cover w-full h-full"
			/>
			</div>
		</SwiperSlide>

		<SwiperSlide >
			<div className="aspect-[3/4] bg-yellow-100">
			<img
				src={"/image/p2.jpg"}
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
				src={"/image/l1.jpg"}
				alt="special mode"
				className="object-cover w-full h-full"
			/>
			</div>
		</SwiperSlide>
		{/* //! LANDSCAPE */}
		<SwiperSlide >
			<div className="aspect-[3/4] bg-yellow-100">
			<img
				src={"/image/p3.jpg"}
				alt="mode"
				className="object-cover w-full h-full"
			/>
			</div>
		</SwiperSlide>
		</Swiper>
		{/* //! showcase carousell */}


		<div className="flex justify-center animate-fade-right animate-once animate-duration-[3000ms] animate-ease-in-out">
			<div className="w-[70vw] h-[100px] flex justify-center items-center md:justify-start lg:h-[200px]">
				<div>
					<p className="text-xl font-medium ">POLAROIDS</p>
				</div>
			</div>
		</div>

		{/* //! fix phto mobile verison */}
		<div className="bg-black flex justify-center items-center flex-wrap gap-1 py-1 mb-[200px] md:hidden">
			<div className="w-[100vw] lg:w-[300px] md:w-[300px] h-[380px] mx-1 bg-blue-300">
			<img alt='model' src={url} className="w-full h-full object-cover" />
			</div>
			<div className="w-[100vw] lg:w-[300px] md:w-[300px] h-[380px] mx-1 bg-blue-300">
			<img alt='model' src={url} className="w-full h-full object-cover" />
			</div>
			<div className="w-[100vw] lg:w-[300px] md:w-[300px] h-[380px] mx-1 bg-blue-300">
			<img alt='model' src={url} className="w-full h-full object-cover" />
			</div>
			<div className="w-[100vw] lg:w-[300px] md:w-[300px] h-[380px] mx-1 bg-blue-300">
			<img alt='model' src={url} className="w-full h-full object-cover" />
			</div>
			<div className="w-[100vw] lg:w-[300px] md:w-[300px] h-[380px] mx-1 bg-blue-300">
			<img alt='model' src={url} className="w-full h-full object-cover" />
			</div>
		</div>
		{/* //! fix phto mobile verison */}

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
					1500:{
						slidesPerView: 5, // Show 2 slides on screens 640px or wider
						spaceBetween: 3
					}
					
				}}
			>
				<SwiperSlide>
					<div className="aspect-[3/4] bg-blue-400">
						<img
							src={"/image/p1.jpg"}
							alt="mode"
							className="object-cover w-full h-full"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="aspect-[3/4] bg-blue-400">
						<img
							src={"/image/p2.jpg"}
							alt="mode"
							className="object-cover w-full h-full"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="aspect-[3/4] bg-blue-400">
						<img
						src={"/image/p3.jpg"}
						alt="mode"
						className="object-cover w-full h-full"
						/>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="aspect-[3/4] bg-blue-400">
						<img
						src={"/image/p1.jpg"}
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