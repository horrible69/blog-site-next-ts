import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "../styles/style.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { TrendingDataProps } from "../../pages/api/trending";
import Link from "next/link";

interface SwiperCompType {
  trendingData: TrendingDataProps[];
}
export default function SwiperComp({ trendingData }: SwiperCompType) {
  return (
    <div className="max-w-7xl  mx-auto ">
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        loop={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {trendingData.map((trending) => (
          <SwiperSlide key={trending.id}>
            <div className=" h-[50vh] max-w-[100vw] grid grid-cols-3 gap-12 ">
              <img
                src={trending.imgSrc}
                alt={trending.source}
                className="h-full w-full overflow-hidden rounded-xl"
              />
              <div className="w-full col-span-2 flex gap-y-4 flex-col justify-center">
                <h1 className="text-5xl font-bold text-slate-900 hover:underline ">
                  <Link href={`/${trending.id}`}>
                    <a>{trending.title}</a>
                  </Link>
                </h1>
                <p>{trending.description}</p>
                <div className="flex">
                  <img
                    src={trending.author.img}
                    className="h-12 w-12 rounded-full"
                    alt={trending.author.name}
                  />
                  <div>
                    <h2 className="font-bold">{trending.author.name}</h2>
                    <span className="text-sm text-slate-600">
                      {trending.author.post}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
