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
    <section className="py-24 bg-gray-50 relative">
      <div className="container w-5/6 mx-auto px-6 md:px-12 text-center relative">
        {/* Heading Section */}
        <div className="mb-12 w-5/6 mx-auto md:mx-0 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
            <h2 className="text-sm uppercase tracking-widest text-[var(--foreground)]/70">
              OUR PARTNERS
            </h2>
            <div className="border-b-2 border-[var(--foreground)]/70 w-20"></div>
          </div>

          <h3 className="text-3xl md:text-4xl font-light leading-tight text-[var(--foreground)]">
            Discover our flagship lounges across India — where comfort, design,
            and technology converge.
          </h3>
        </div>

        {/* Swiper */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={5}
            navigation={{
              prevEl: ".custom-swiper-prev",
              nextEl: ".custom-swiper-next",
            }}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
          >
            {partners.map((partner, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center p-6">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={120}
                    height={120}
                    className="object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation buttons on left and right */}
          <div className="custom-swiper-prev absolute top-1/2 -left-8 transform -translate-y-1/2 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center cursor-pointer shadow-lg z-10">
            &#10094;
          </div>
          <div className="custom-swiper-next absolute top-1/2 -right-8 transform -translate-y-1/2 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center cursor-pointer shadow-lg z-10">
            &#10095;
          </div>
        </div>
      </div>
    </section>
  );
}
