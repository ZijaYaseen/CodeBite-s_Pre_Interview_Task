"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import type { Swiper as SwiperCore } from "swiper";
import { StoryCards, StoryOtherCard } from "@/data/main";


export function StoryCarousel() {
  const swiperRef = useRef<SwiperCore | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <section className="relative mx-auto max-w-screen-xl py-6 px-4">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="w-full"
      >
        {StoryCards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="bg-white overflow-hidden rounded-[10px] shadow-lg border border-blueGray-300">
              <div className="relative h-56 w-full">
                <Image
                  src={card.imgSrc}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4 flex items-center">
                {/* Author image on left */}
                <div className="relative h-12 w-12 flex-shrink-0 mr-2 rounded-full overflow-hidden">
                  <Image
                    src={card.imgAuthor}
                    alt={`Author of ${card.title}`}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="font-normal">
                  <h3 className="text-base text-blueGray-900">{card.title}</h3>
                  <p className="text-sm text-blueGray-600">{card.subtitle}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation */}
      {!isBeginning && (
        <button
          onClick={handlePrev}
          className="absolute left-1 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <FaChevronLeft size={20} />
        </button>
      )}
      {!isEnd && (
        <button
          onClick={handleNext}
          className="absolute right-1 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <FaChevronRight size={20} />
        </button>
      )}
    </section>
  );
}

export function HorizontalCarouselOtherStories() {
  const swiperRef = useRef<SwiperCore | null>(null)
  const [isBeginning, setIsBeginning] = useState(true)
  const [isEnd, setIsEnd] = useState(false)

  const handlePrev = () => swiperRef.current?.slidePrev()
  const handleNext = () => swiperRef.current?.slideNext()

  return (
    <>
    <section className="relative mx-auto max-w-screen-md py-5 px-4">
      
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper
          setIsBeginning(swiper.isBeginning)
          setIsEnd(swiper.isEnd)
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning)
          setIsEnd(swiper.isEnd)
        }}
        slidesPerView={1}
        spaceBetween={20}
        slidesPerGroup={1}
        loop={false}
        className="w-full"
      >
        {StoryOtherCard.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white flex flex-col md:gap-6 gap-4 max-w-2xl mx-auto text-center md:p-12 px-4 py-6 rounded-[10px] border shadow-lg">
              <h3 className="font-bold md:text-[32px] text-2xl text-blueGray-900">
                {item.title}
              </h3>
              <p className="text-blueGray-600 md:text-xl text-base font-normal">
                {item.text}
              </p>
              <div className="items-center flex flex-col">
                <div className="h-12 w-12 flex-shrink-0 rounded-full mb-4">
                  <Image
                    src={item.image}
                    alt={`Author of ${item.author}`}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div className="font-normal">
                  <h3 className="text-base text-blueGray-900">{item.author}</h3>
                  <p className="text-sm text-blueGray-600">{item.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation */}
      {!isBeginning && (
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <FaChevronLeft size={20} />
        </button>
      )}
      {!isEnd && (
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow hover:bg-gray-100"
        >
          <FaChevronRight size={20} />
        </button>
      )}
    </section>
    </>
  )
}

