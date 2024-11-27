
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const cards = [
    {
      url: "/image/5.jpg",
      title: "Title 1",
      id: 1,
    },
    {
      url: "/image/6.jpg",
      title: "Title 2",
      id: 2,
    },
    {
      url: "/image/7.JPG",
      title: "Title 3",
      id: 3,
    },
    {
      url: "/image/8.JPEG",
      title: "Title 4",
      id: 4,
    },
    {
      url: "/image/9.JPEG",
      title: "Title 5",
      id: 5,
    },
    {
      url: "/image/10.JPG",
      title: "Title 6",
      id: 6,
    },
    {
      url: "/image/11.JPG",
      title: "Title 7",
      id: 7,
    },
    {
      url: "/image/12.JPG",
      title: "Title 7",
      id: 8,
    },
    {
      url: "/image/13.JPG",
      title: "Title 7",
      id: 9,
    },
    {
      url: "/image/14.JPG",
      title: "Title 7",
      id: 10,
    },
    {
      url: "/image/15.jpg",
      title: "Title 7",
      id: 11,
    },
    {
      url: "/image/16.JPEG",
      title: "Title 7",
      id: 12,
    },
];
const ParallaxCarousel = () => {
    return (
      <div className="bg-neutral-800">
          {/* <div className="flex h-48 items-center justify-center">
            <span className="font-semibold uppercase text-neutral-500">
              POLAROIDS
            </span>
          </div> */}
          <HorizontalScrollCarousel />
          {/* <div className="flex h-48 items-center justify-center">
            <span className="font-semibold uppercase text-neutral-500">
              Scroll up
            </span>
          </div> */}
        </div>
    )
  };
const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section ref={targetRef} className="relative h-[300vh] bg-white">
        {/* <AnimatedCard/> */}
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            <motion.div style={{ x }} className="flex gap-4">
            {cards.map((card) => {
                return <Card card={card} key={card.id} />;
            })}
            </motion.div>
        </div>
    </section>
);
};

const Card = ({ card }) => {
return (
    <div
        key={card.id}
        className="group relative h-[450px] w-[450px] overflow-hidden"
    >
    <div
        style={{
            backgroundImage: `url(${card.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
    ></div>
    {/* <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
        {card.title}
        </p>
    </div> */}
    </div>
);
};

export default ParallaxCarousel;