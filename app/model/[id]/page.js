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

      <div className="flex flex-col justify-center items-center mb-1 mt-14">
        <div className="mb-6 animate-fade-right animate-once animate-duration-[3000ms] animate-ease-in-out">
          <p className="text-3xl font-medium">Model Name</p>
        </div>

        <div className="flex flex-col gap-2 justify-center items-center w-[85vw] sm:w-[95vw] lg:w-[85vw] sm:flex-row sm:items-center sm:justify-around sm:flex-wrap sm:h-[50px] lg:gap-0 text-sm">

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

        {/* <div className="flex items-center justify-around w-[85vw] h-[50px] text-sm">
          <p> <span className="font-medium">HEIGHT</span>: 181 CM</p>
          <p> <span className="font-medium">BUST</span>: 81 CM</p>
          <p> <span className="font-medium">WAIST</span>: 62 CM</p>
          <p> <span className="font-medium">HIPS</span>: 91 CM</p>
          <p> <span className="font-medium">SHOE</span>: 8 US</p>
          <p> <span className="font-medium">HAIR</span>: DARK BROWN</p>
          <p> <span className="font-medium">EYES</span>: BLUE</p>
        </div> */}

      </div>


      {/* //! main carousel */}
      <div className="flex justify-center">

        <div className="w-[85vw] h-[65vh] sm:w-[95vw] lg:w-[85vw] bg-black">
          <Swiper
            // spaceBetween={0} //! gap between photo
            slidesPerView={1}
            // slidespreview={3}
            navigation={false}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            scrollbar={{ draggable: true }}
            // className="mySwiper"
            loop={true}
            modules={[Pagination, Navigation]}
            breakpoints={{
              640: { // 640px is the default width for 'sm' in Tailwind CSS
                slidesPerView: 2, // Show 2 slides on screens 640px or wider
              },
            }}
          >
            <SwiperSlide>
              <div className="w-[100%] h-[65vh] bg-blue-400">
                <img
                  alt="mode"
                  src={url}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[100%] h-[65vh] bg-blue-400">
                <img
                  alt="mode"
                  src={"/image/1.JPG"}
                  className="w-full h-full object-cover "
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[100%] h-[65vh] bg-blue-400">
                <img
                  alt="mode"
                  src={"/image/2.JPG"}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[100%] h-[65vh] bg-blue-400">
                <img
                  alt="mode"
                  src={"/image/3.jpg"}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-[100%] h-[65vh] bg-blue-400">
                <img
                  alt="mode"
                  src={"/image/4.jpg"}
                  className="w-full h-full object-cover"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      {/* //! main carousel */}

      <div className="flex justify-center animate-fade-right animate-once animate-duration-[3000ms] animate-ease-in-out">
        <div className="w-[85vw] h-[150px] sm:w-[95vw] lg:w-[85vw] flex justify-center items-center md:justify-start lg:h-[120px]">
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

      <div className="lg:w-screen lg:h-[400px] hidden sm:block bg-black mb-10 ">
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
              spaceBetween: 3
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 190
            },
            1440: {
              slidesPerView: 5, // Show 2 slides on screens 640px or wider
              spaceBetween: 80
            }
          }}
        >
          <SwiperSlide>
            <div className="lg:w-[300px] lg:h-[400px] bg-blue-400 flex justify-center items-center">
              <img
                alt="mode"
                src={"/image/5.jpg"}
                className="w-full h-full object-cover"
                onClick={() => console.log("test")}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:w-[300px] lg:h-[400px] bg-blue-400">
              <img
                alt="mode"
                src={"/image/6.jpg"}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:w-[300px] lg:h-[400px] bg-blue-400">
              <img
                alt="mode"
                src={"/image/7.JPG"}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:w-[300px] lg:h-[400px] bg-blue-400">
              <img
                alt="mode"
                src={"/image/8.JPEG"}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:w-[300px] lg:h-[400px] bg-blue-400">
              <img
                alt="mode"
                src={"/image/9.JPEG"}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:w-[300px] lg:h-[400px] bg-blue-400">
              <img
                alt="mode"
                src={"/image/10.JPG"}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:w-[300px] lg:h-[400px] bg-blue-400">
              <img
                alt="mode"
                src={"/image/11.JPG"}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:w-[300px] lg:h-[400px] bg-blue-400">
              <img
                alt="mode"
                src={"/image/12.JPG"}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:w-[300px] lg:h-[400px] bg-blue-400">
              <img
                alt="mode"
                src={"/image/13.JPG"}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:w-[300px] lg:h-[400px] bg-blue-400">
              <img
                alt="mode"
                src={"/image/14.JPG"}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:w-[300px] lg:h-[400px] bg-blue-400">
              <img
                alt="mode"
                src={"/image/15.jpg"}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="lg:w-[300px] lg:h-[400px] bg-blue-400">
              <img
                alt="mode"
                src={"/image/16.JPEG"}
                className="w-full h-full object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}