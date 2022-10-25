import "swiper/css";
import "swiper/css/effect-coverflow";

import React, { useState } from "react";
import NewsItem from "./NewsItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const news = [
  {
    image:
      "https://estudiougaz.com/core/wp-content/uploads/Modificacion-de-Articulos-300x216.png",
    title:
      "Ley 31583: Ley que modifica diversos artículos del nuevo Código Procesal Constitucional",
    date: "05 de Octubre",
    link: "https://estudiougaz.com/core/wp-content/uploads/2112560-1.pdf",
  },

  {
    image: "https://estudiougaz.com/core/wp-content/uploads/CTS-300x216.png",
    title: "Ley que incorpora incentivo CAFAE al cálculo de CTS",
    date: "19 de Octubre",
    link: "https://estudiougaz.com/core/wp-content/uploads/ley-que-incorpora-el-incentivo-cafae-al-calculo-de-la-compen-ley-n-31585-2116903-1.pdf",
  },
  {
    image:
      "https://estudiougaz.com/core/wp-content/uploads/Reforma-Magisterial-300x216.png",
    title:
      "Modificación de los artículos 84, 114 y 121 del Reglamento de la Ley N.° 29944, Ley de Reforma Magisterial",
    date: "14 de Octubre",
    link: "https://estudiougaz.com/core/wp-content/uploads/decreto-supremo-que-modifica-el-reglamento-de-la-ley-n-2994-decreto-supremo-n-015-2022-minedu-2115442-1.pdf",
  },
  {
    image:
      "https://estudiougaz.com/core/wp-content/uploads/Ley-31556-300x216.png",
    title: "Aprueban Reglamento de la Ley N° 31556",
    date: "14 de Octubre",
    link: "https://estudiougaz.com/core/wp-content/uploads/aprueban-reglamento-de-la-ley-n-31556-ley-que-promueve-med-decreto-supremo-n-237-2022-ef-2115082-3.pdf",
  },
  {
    image:
      "https://estudiougaz.com/core/wp-content/uploads/YapePlin-300x216.png",
    title:
      "El Banco Central de Reserva del Perú (BCRP) publicó el Reglamento de Interoperabilidad de los Servicios de Pago provistos por los Proveedores, Acuerdos y Sistemas de Pagos",
    date: "07 de Octubre",
    link: "https://estudiougaz.com/core/wp-content/uploads/aprueban-el-reglamento-de-interoperabilidad-de-los-servicios-circular-n-0024-2022-bcrp-2113366-1.pdf",
  },
  {
    image:
      "https://estudiougaz.com/core/wp-content/uploads/Contratos-Estado-1-300x216.png",
    title: "Modifican Reglamento de la Ley de Contrataciones del Estado",
    date: "07 de Octubre",
    link: "https://estudiougaz.com/core/wp-content/uploads/2113491-3.pdf",
  },
  {
    image: "https://estudiougaz.com/core/wp-content/uploads/ICAM-300x216.png",
    title:
      "El Dr. Fernando Ugaz Zegarra fue reconocido como miembro honorario del ICAM",
    date: "05 de Octubre",
    link: "https://estudiougaz.com/core/wp-content/uploads/Resolucion-de-nombramiento.pdf",
  },
];

const NewsSection = () => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);
  return (
    <section className="bg-white my-20 mx-[1.375rem]">
      <div className="text-center mb-10">
        <p
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-offset="200"
          className="text-[#E9511D] font-black mb-2 text-xs lg:text-base"
        >
          - TE MANTENEMOS INFORMADO -
        </p>
        <h2
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-offset="200"
          className="text-[#004169] text-[1.8125rem] md:text-[2.1875rem] lg:text-5xl font-bold "
        >
          Nuestras Noticias
        </h2>
      </div>
      <div className="max-w-[75rem] mx-auto  relative pb-20 sm:pb-0">
        <Swiper
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-offset="300"
          className="w-full max-w-[58.625rem] mx-auto"
          effect={"coverflow"}
          navigation={{ prevEl, nextEl }}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          loop={true}
          // loopFillGroupWithBlank={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 110,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          modules={[EffectCoverflow, Navigation]}
        >
          {news.map(({ image, title, date, link }, index) => (
            <SwiperSlide
              className="!w-[16.4375rem] sm:!w-[21.125rem] rounded-lg overflow-hidden"
              key={index}
            >
              <NewsItem image={image} title={title} date={date} link={link} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          className="absolute bottom-0 -translate-x-1/2  left-[calc(50%-2rem)] sm:top-1/2 sm:-translate-y-1/2 sm:left-0 z-20 w-3 sm:w-[1.1rem] flex items-center justify-center cursor-pointer"
          ref={(node) => setNextEl(node)}
        >
          <img
            className="object-cover"
            src="https://estudiougaz.com/core/wp-content/themes/ugaz-zegarra/img/svg/icon-arrow-blue-left.svg"
            alt=""
          />
          {/* <IoIosArrowBack className="text-2xl text-[#b0191c] stroke-[20] stroke-[#b0191c]" /> */}
        </div>
        <div
          className="absolute bottom-0 -translate-x-1/2  right-[calc(50%-2rem)] sm:top-1/2 sm:-translate-y-1/2 sm:right-0 z-20 w-3 sm:w-[1.1rem] flex items-center justify-center cursor-pointer"
          ref={(node) => setPrevEl(node)}
        >
          <img
            className="object-cover"
            src="https://estudiougaz.com/core/wp-content/themes/ugaz-zegarra/img/svg/icon-arrow-blue-right.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
