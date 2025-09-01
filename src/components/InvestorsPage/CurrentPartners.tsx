"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Logo from "@/assets/images/Logos/Ten11-LOGO.svg";

export default function CurrentPartners() {
  const partners = Array.from({ length: 10 }).map((_, i) => ({
    name: `Partner ${i + 1}`,
    logo: Logo,
  }));

  return (
    <section className="py-16 sm:py-24 bg-gray-50 relative px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center relative">
        {/* Heading Section */}
        <div className="mb-12 w-full sm:w-5/6 mx-auto md:mx-0 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
            <h2 className="text-xs sm:text-sm md:text-base uppercase tracking-widest text-[var(--foreground)]/70">
              OUR PARTNERS
            </h2>
            <div className="border-b-2 border-[var(--foreground)]/70 w-12 sm:w-16 md:w-20"></div>
          </div>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug sm:leading-tight text-[var(--foreground)]">
            Discover our flagship lounges across India — where comfort, design,
            and technology converge.
          </h3>
        </div>

        {/* Swiper */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={16}
            slidesPerView={1.5}
            navigation={{
              prevEl: ".custom-swiper-prev",
              nextEl: ".custom-swiper-next",
            }}
            breakpoints={{
              480: { slidesPerView: 2, spaceBetween: 20 },
              640: { slidesPerView: 3, spaceBetween: 24 },
              1024: { slidesPerView: 5, spaceBetween: 30 },
            }}
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center p-4 sm:p-6">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    className="object-contain w-20 sm:w-24 md:w-28 lg:w-32 h-auto"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons */}
          <div className="custom-swiper-prev absolute top-1/2 -left-4 sm:-left-6 md:-left-8 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary text-white rounded-full flex items-center justify-center cursor-pointer shadow-lg z-10">
            &#10094;
          </div>
          <div className="custom-swiper-next absolute top-1/2 -right-4 sm:-right-6 md:-right-8 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-primary text-white rounded-full flex items-center justify-center cursor-pointer shadow-lg z-10">
            &#10095;
          </div>
        </div>
      </div>
    </section>
  );
}
