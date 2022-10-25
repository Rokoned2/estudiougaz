import "swiper/css";
import "swiper/css/navigation";

import React, { useState } from "react";
import { Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const BannerSection = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  return (
    <section className="relative max-h-[40.625rem]">
      <Swiper
        loop={true}
        speed={1000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={{ prevEl, nextEl }}
        className="h-[36rem] md:h-screen max-h-[40.625rem]  w-full relative"
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide className="h-[36rem] md:h-screen max-h-[40.625rem] overflow-hidden">
          <div className="h-[36rem] md:h-screen max-h-[40.625rem]">
            <div className="w-full h-full">
              <img
                className="object-cover object-right h-full w-full"
                src="https://estudiougaz.com/core/wp-content/uploads/d.portada-1-min-1680x945.jpg"
                alt=""
              />
            </div>
            <div className="pb-[4.375rem] sm:pb-[5rem] sm:px-[4.5rem] xxl:pl-20  text-center md:text-left mb-10 absolute top-0 left-0 w-full h-full z-40">
              <div className="max-w-[65rem] h-full mx-auto flex">
                <div className="max-w-[33.75rem] flex flex-col w-full mt-auto ">
                  <p
                    data-aos="fade-up"
                    data-aos-once="true"
                    data-aos-duration="1000"
                    className="text-[#73bdb8] text-[0.8125rem] font-black mb-5 text-xs lg:text-base uppercase"
                  >
                    Estudio Ugaz Zegarra
                  </p>
                  <div className="mb-[1.9375rem] md:mb-0 px-[3.375rem] md:px-0  text-white ">
                    <h2
                      data-aos="fade-up"
                      data-aos-once="true"
                      data-aos-duration="1000"
                      className=" text-[1.8125rem] md:text-[2.1875rem] lg:text-5xl font-bold leading-none"
                    >
                      Nuestros patrocinados son nuestra prioridad
                    </h2>
                    <p
                      data-aos="fade-up"
                      data-aos-once="true"
                      data-aos-duration="1000"
                      data-aos-offset="220"
                      className=" mt-7 text-lg leading-[1.4375rem] hidden md:block font-bold"
                    >
                      Creemos en la necesidad de ofrecer un servicio de la más
                      alta calidad, ejerciendo la defensa de cada caso con
                      disciplina, el rigor de la especialización académica y la
                      experticia de la profesión.
                    </p>
                  </div>
                  <a href="https://estudiougaz.com/areas/">
                    <button className="border-[#73bdb8] md:hidden py-3 px-8 border-2 text-[#73bdb8] text-[1.0625rem] font-bold rounded-3xl">
                      Ver áreas
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-[#1e272d54] z-30 "></div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-[36rem] md:h-screen w-full overflow-hidden">
          <div className="h-[36rem] md:h-screen md w-full">
            <div className="absolute top-0 left-0 h-full w-full  overflow-hidden">
              <iframe
                className="absolute w-[69.1675rem] md:w-[130vw] md:h-[130vh] left-[50%] -translate-x-[50%] h-full"
                // className="absolute -translate-x-16 h-full w-[56.44375rem] object-cover object-center"
                src="https://www.youtube.com/embed/ImGr3CaVJhA?autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&fs=0&iv_load_policy=3&rel=0&disablekb=1&showinfo=0&start=0&enablejsapi=1&&widgetid=3&playsinline=1&allowfullscreen=false&playlist=ImGr3CaVJhA"
                // src="https://www.youtube.com/embed/ImGr3CaVJhA?allowfullscreen=false&controls=0&enablejsapi=1&disablekb=1&fs=0&iv_load_policy=3&modestbranding=1&origin=https%3A%2F%2Festudiougaz.com&playsinline=1&rel=0&showinfo=0&start=0&autoplay=1&playlist=ImGr3CaVJhA&loop=1&widgetid=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-[#1e272d54] z-30 "></div>

            <div className="pb-[4.375rem] sm:pb-[5rem] sm:px-[4.5rem] xxl:pl-20  text-center md:text-left mb-10 absolute top-0 left-0 w-full h-full z-40">
              <div className="max-w-[65rem] h-full mx-auto flex">
                <div className="max-w-[33.75rem] flex flex-col w-full mt-auto ">
                  <p className="text-[#73bdb8] text-[0.8125rem] font-black mb-5 text-xs lg:text-base uppercase">
                    Estudio Ugaz Zegarra
                  </p>
                  <div className="mb-[1.9375rem] md:mb-0 px-[3.375rem] md:px-0  text-white ">
                    <h2 className=" text-[1.8125rem] md:text-[2.1875rem] lg:text-5xl font-bold leading-none">
                      Somos el estudio que necesitas
                    </h2>
                    <p className=" mt-7 text-lg leading-[1.4375rem] hidden md:block font-bold">
                      Nuestros más de 20 años de experiencia profesional y
                      académica nos respaldan.
                    </p>
                  </div>
                  <a href="https://estudiougaz.com/areas/">
                    <button className="border-[#73bdb8] md:hidden py-3 px-8 border-2 text-[#73bdb8] text-[1.0625rem] font-bold rounded-3xl">
                      Ver áreas
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="h-[36rem] md:h-screen w-full overflow-hidden">
          <div className="h-[36rem] md:h-screen md w-full">
            <div className="absolute top-0 left-0 h-full w-full  overflow-hidden">
              <iframe
                className="absolute w-[69.1675rem] md:w-[130vw] md:h-[130vh] left-[50%] -translate-x-[50%] h-full"
                // className="absolute -translate-x-16 h-full w-[56.44375rem] object-cover object-center"
                src="https://www.youtube.com/embed/11t4yDgZ3Ng?autoplay=1&controls=0&mute=1&loop=1&modestbranding=0&showinfo=0&start=0&enablejsapi=1&&widgetid=3&allowfullscreen=false&playlist=11t4yDgZ3Ng"
                // src="https://www.youtube.com/embed/ImGr3CaVJhA?allowfullscreen=false&controls=0&enablejsapi=1&disablekb=1&fs=0&iv_load_policy=3&modestbranding=1&origin=https%3A%2F%2Festudiougaz.com&playsinline=1&rel=0&showinfo=0&start=0&autoplay=1&playlist=ImGr3CaVJhA&loop=1&widgetid=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-[#1e272d54] z-30 "></div>

            <div className="pb-[4.375rem] sm:pb-[5rem] sm:px-[4.5rem] xxl:pl-20  text-center md:text-left mb-10 absolute top-0 left-0 w-full h-full z-40">
              <div className="max-w-[65rem] h-full mx-auto flex">
                <div className="max-w-[33.75rem] flex flex-col w-full mt-auto ">
                  <p className="text-[#73bdb8] text-[0.8125rem] font-black mb-5 text-xs lg:text-base uppercase">
                    Estudio Ugaz Zegarra
                  </p>
                  <div className="mb-[1.9375rem] md:mb-0 px-[3.375rem] md:px-0  text-white ">
                    <h2 className=" text-[1.8125rem] md:text-[2.1875rem] lg:text-5xl font-bold leading-none">
                      Nuestro equipo nos representa
                    </h2>
                    <p className=" mt-7 text-lg leading-[1.4375rem] hidden md:block font-bold">
                      Apostamos por un balance entre jóvenes talentos y
                      especialistas experimentados. Trabajando juntos, somos más
                      fuertes.
                    </p>
                  </div>
                  <a href="https://estudiougaz.com/areas/">
                    <button className="border-[#73bdb8] md:hidden py-3 px-8 border-2 text-[#73bdb8] text-[1.0625rem] font-bold rounded-3xl">
                      Ver áreas
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="h-[36rem] md:h-screen overflow-hidden">
          <div className="h-[36rem] md:h-screen">
            <div className="w-full h-full">
              <img
                className="object-cover object-center h-full w-full"
                src="https://estudiougaz.com/core/wp-content/uploads/d.portada-2-1680x945.jpg"
                alt=""
              />
            </div>
            <div className="pb-[4.375rem] sm:pb-[5rem] sm:px-[4.5rem] xxl:pl-20  text-center md:text-left mb-10 absolute top-0 left-0 w-full h-full z-40">
              <div className="max-w-[65rem] h-full mx-auto flex">
                <div className="max-w-[33.75rem] flex flex-col w-full mt-auto ">
                  <p className="text-[#73bdb8] text-[0.8125rem] font-black mb-5 text-xs lg:text-base uppercase">
                    Estudio Ugaz Zegarra
                  </p>
                  <div className="mb-[1.9375rem] md:mb-0 px-[3.375rem] md:px-0  text-white ">
                    <h2 className=" text-[1.8125rem] md:text-[2.1875rem] lg:text-5xl font-bold leading-none">
                      Nuestros patrocinados son nuestra prioridad
                    </h2>
                    <p className=" mt-7 text-lg leading-[1.4375rem] hidden md:block font-bold">
                      Creemos en la necesidad de ofrecer un servicio de la más
                      alta calidad, ejerciendo la defensa de cada caso con
                      disciplina, el rigor de la especialización académica y la
                      experticia de la profesión.
                    </p>
                  </div>
                  <a href="https://estudiougaz.com/areas/">
                    <button className="border-[#73bdb8] md:hidden py-3 px-8 border-2 text-[#73bdb8] text-[1.0625rem] font-bold rounded-3xl">
                      Ver áreas
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute top-0 left-0 w-full h-full bg-[#1e272d54] z-30 "></div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div
        className="absolute bottom-[30%] left-5 xxl:left-[5%]  sm:-translate-y-1/2 z-20 w-[0.9rem] sm:w-[1.1rem] flex items-center justify-center cursor-pointer"
        ref={(node) => setPrevEl(node)}
      >
        <img
          className="object-cover"
          src="https://estudiougaz.com/core/wp-content/themes/ugaz-zegarra/img/svg/icon-arrow-white-left.svg"
          alt=""
        />
        {/* <IoIosArrowBack className="text-2xl text-[#b0191c] stroke-[20] stroke-[#b0191c]" /> */}
      </div>
      <div
        className="absolute bottom-[30%] right-5 xxl:right-[5%] sm:-translate-y-1/2 z-20 w-[0.9rem] sm:w-[1.1rem] flex items-center justify-center cursor-pointer"
        ref={(node) => setNextEl(node)}
      >
        <img
          className="object-cover"
          src="https://estudiougaz.com/core/wp-content/themes/ugaz-zegarra/img/svg/icon-arrow-white-right.svg"
          alt=""
        />
      </div>
    </section>
  );
};

export default BannerSection;
