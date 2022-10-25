import "swiper/css";
import "swiper/css/free-mode";
import AOS from "aos";
import "aos/dist/aos.css";

import React, { useEffect } from "react";
import AreaCarouselItem from "./AreaCarouselItem";
import AreaItem from "./AreaItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

const areas = [
  {
    iconFront:
      "https://estudiougaz.com/core/wp-content/uploads/derecho-penal.svg",
    iconBack:
      "https://estudiougaz.com/core/wp-content/uploads/derecho-penal1.svg",
    image:
      "https://estudiougaz.com/core/wp-content/uploads/derecho-penal-6-768x768.jpg",
    title: "Derecho Penal",
    description:
      "Asumimos la defensa desde las diligencias preliminares y hacemos un acompañamiento al proceso, realizando un efectivo “análisis de caso” para proponer la mejor estrategia de defensa.",
    link: "https://estudiougaz.com/areas/derecho-penal/",
  },

  {
    iconFront: "https://estudiougaz.com/core/wp-content/uploads/ligitacion.svg",
    iconBack: "https://estudiougaz.com/core/wp-content/uploads/ligitacion1.svg",
    image:
      "https://estudiougaz.com/core/wp-content/uploads/litigación-nuevo.png",
    title: "Litigación",
    description:
      "Dirección y defensa letrada en procedimientos judiciales ante la Jurisdicción Civil y Penal.",
    link: "https://estudiougaz.com/areas/litigacion/",
  },
  {
    iconFront:
      "https://estudiougaz.com/core/wp-content/uploads/criminal-compliance.svg",
    iconBack:
      "https://estudiougaz.com/core/wp-content/uploads/criminal-compliance1.svg",
    image:
      "https://estudiougaz.com/core/wp-content/uploads/criminal-compliance-4-768x768.jpg",
    title: "Derecho Penal",
    description:
      "Asumimos la defensa desde las diligencias preliminares y hacemos un acompañamiento al proceso, realizando un efectivo “análisis de caso” para proponer la mejor estrategia de defensa.",
    link: "https://estudiougaz.com/areas/criminal-compliance/",
  },
  {
    iconFront:
      "https://estudiougaz.com/core/wp-content/uploads/negociacion-penal.svg",
    iconBack:
      "https://estudiougaz.com/core/wp-content/uploads/negociacion-penal1.svg",
    image:
      "https://estudiougaz.com/core/wp-content/uploads/negociacio%CC%81n-penal-768x768.jpg",
    title: "Negociación Penal",
    description:
      "Brindamos el servicio de negociación penal con el objetivo de poner fin a conflictos jurídicos mediante un acuerdo entre ambas partes.",
    link: "https://estudiougaz.com/areas/negociacion-penal/",
  },
  {
    iconFront:
      "https://estudiougaz.com/core/wp-content/uploads/empresarial-corporativo.svg",
    iconBack:
      "https://estudiougaz.com/core/wp-content/uploads/empresarial-corporativo1.svg",
    image:
      "https://estudiougaz.com/core/wp-content/uploads/empresarial-y-corporativo-5-768x768.jpg",
    title: "Derecho Empresarial y Corporativo",
    description:
      "Ofrecemos el servicio de asesoramiento legal a empresas con el fin de consolidarlas como organizaciones eficientes, rentables y con una cultura ética de cumplimiento normativo.",
    link: "https://estudiougaz.com/areas/empresarial-y-corporativo/",
  },
  {
    iconFront:
      "https://estudiougaz.com/core/wp-content/uploads/derecho-constitucional.svg",
    iconBack:
      "https://estudiougaz.com/core/wp-content/uploads/derecho-constitucional1.svg",
    image:
      "https://estudiougaz.com/core/wp-content/uploads/Constitucional-768x768.jpg",
    title: "Derecho Constitucional",
    description:
      "Brindamos asesoría sobre temas constitucionales tanto a entidades públicas como privadas absolviendo todas sus consultas jurídicas y acompañándolos en el proceso.",
    link: "https://estudiougaz.com/areas/empresarial-y-corporativo-copy/",
  },
];

const AreasSection = () => {
  useEffect(() => {
    AOS.init({
      disable: "mobile",
    });
    AOS.refresh();
  }, []);

  return (
    <section className="bg-white py-20">
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once="true"
        className="text-center mb-10"
      >
        <p className="text-[#E9511D] font-black mb-2 text-xs lg:text-base">
          - ESPECIALISTAS EN CADA ÁREA LEGAL -
        </p>
        <h2 className="text-[#004169] text-[1.8125rem] md:text-[2.1875rem] lg:text-5xl font-bold ">
          Nuestras Áreas
        </h2>
      </div>

      <div className="md:hidden">
        <Swiper
          freeMode={{ momentum: false }}
          grabCursor={true}
          loopFillGroupWithBlank={true}
          modules={[FreeMode]}
        >
          {areas.map(({ image, title, link }, index) => (
            <SwiperSlide
              key={index}
              className="relative !w-[65vw] h-[15.1875rem] overflow-hidden rounded-lg px-[1.6rem]"
            >
              <a href={link}>
                <div className="relative w-[65vw] h-[15.1875rem] overflow-hidden rounded-lg">
                  <img
                    src={image}
                    className="object-cover object-center w-full h-full"
                  ></img>
                  <div className="p-[1.875rem] w-full h-full absolute top-0 left-0 flex bg-gradient-to-b from-[transparent] to-[#152129c4]">
                    <div className="mt-auto flex w-full">
                      <h3 className=" text-white text-[1.4375rem] font-bold leading-2">
                        {title}
                      </h3>
                      <img
                        className="w-[1.5625rem] inline ml-auto"
                        src="https://estudiougaz.com/core/wp-content/themes/ugaz-zegarra/img/svg/icon-arrow-flecha-white-right.svg"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="hidden md:block">
        <div className="flex flex-wrap max-w-[77.5rem] mx-auto">
          {areas.map(
            (
              { iconFront, iconBack, image, title, description, link },
              index
            ) => (
              <AreaItem
                key={index}
                iconFront={iconFront}
                iconBack={iconBack}
                image={image}
                title={title}
                description={description}
                link={link}
              />
            )
          )}
          <div></div>
          <a className="mx-auto " href="https://estudiougaz.com/areas/">
            <button
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
              className=" py-[0.6rem] px-8 mt-5 text-[1.125rem] sm:!duration-500 text-white bg-[#004169] sm:hover:bg-[#73BDB8] font-bold rounded-3xl sm:!transition-all "
            >
              Ver más áreas
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AreasSection;
