import React from "react";
import "swiper/css";
import "swiper/css/pagination";

import { Swiper, SwiperSlide } from "swiper/react";
import RecentPubItem from "./RecentPubItem";
import { Pagination } from "swiper";

const publications = [
  {
    tagContent: "Jurisprudencias",
    date: "10 de Marzo",
    title: "CORTE SUPREMA DE JUSTICIA DE LA REPÚBLICA",
    image:
      "https://estudiougaz.com/core/wp-content/uploads/RAA-nuevo-socio-Lexlatin-1.jpg",
    link: "https://estudiougaz.com/publicaciones/corte-suprema-de-justicia-de-la-republica/",
  },
  {
    tagContent: "Blog Legal",
    date: "10 de Marzo",
    title:
      "¿Procede tutela de derechos para proteger el derecho de presunción de inocencia?",
    image:
      "https://estudiougaz.com/core/wp-content/uploads/derecho-presuncion-inocencia-min-768x512.jpg",
    link: "https://estudiougaz.com/publicaciones/procede-tutela-de-derechos-para-proteger-el-derecho-de-presuncion-de-inocencia/",
  },
  {
    tagContent: "Blog Legal",
    date: "18 de Mayo",
    title: "Aspectos fundamentales del cese de prisión preventiva",
    image:
      "https://estudiougaz.com/core/wp-content/uploads/cese-prision-preventiva-min-768x512.jpg",
    link: "https://estudiougaz.com/publicaciones/aspectos-fundamentales-del-cese-de-prision-preventiva/",
  },
  {
    tagContent: "Blog Legal",
    date: "11 de Mayo",
    title:
      "Comentarios ley Nº 31146 – Trata de personas y tráfico ilícito de migrantes",
    image:
      "https://estudiougaz.com/core/wp-content/uploads/trata-personas-min-768x513.jpg",
    link: "https://estudiougaz.com/publicaciones/comentarios-ley-no-31146-trata-de-personas-y-trafico-ilicito-de-migrantes/",
  },
  {
    tagContent: "Blog Legal",
    date: "30 de Abril",
    title: "Vulneración del derecho de autor en las tesis de grado",
    image:
      "https://estudiougaz.com/core/wp-content/uploads/vulneracion-derecho-autor-min-768x512.jpeg",
    link: "https://estudiougaz.com/publicaciones/vulneracion-del-derecho-de-autor-en-las-tesis-de-grado/",
  },
  {
    tagContent: "Blog Legal",
    date: "05 de Marzo",
    title:
      "El arraigo como presupuesto del peligro de fuga: análisis de la casación 631 – 2015",
    image:
      "https://estudiougaz.com/core/wp-content/uploads/arraigo-presupuesto-peligro-fuga-min-768x509.jpeg",
    link: "https://estudiougaz.com/publicaciones/el-arraigo-como-presupuesto-del-peligro-de-fuga-analisis-de-la-casacion-631-2015/",
  },
];

const RecentPubsSection = () => {
  return (
    <section className="py-28">
      <div className="text-center mb-10 sm:px-[1.375rem] xxl:px-0 sm:max-w-[75rem] sm:mx-auto">
        <div className="mb-[3.75rem]">
          <p
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-offset="220"
            className="text-[#E9511D] font-black mb-2 text-xs lg:text-base"
          >
            - ANÁLISIS Y OPINION -
          </p>
          <h2
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="1000"
            data-aos-offset="220"
            className="text-[#004169] text-[1.8125rem] md:text-[2.1875rem] lg:text-5xl font-bold "
          >
            Publicaciones Recientes
          </h2>
        </div>
        <Swiper
          data-aos="fade-up"
          data-aos-once="true"
          data-aos-duration="1000"
          data-aos-offset="220"
          className="!pb-20"
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          pagination={{
            dynamicBullets: true,
          }}
          breakpoints={{
            960: {
              centeredSlides: false,
              slidesPerView: 4,
            },
          }}
          modules={[Pagination]}
        >
          {publications.map(
            ({ tagContent, date, title, image, link }, index) => (
              <SwiperSlide
                key={index}
                className="relative mx-[0.4rem] sm:mx-0 !w-[78vw] sm:!w-1/3 lg:!w-1/4 h-[100vw] sm:h-[25rem] overflow-hidden rounded-lg sm:rounded-none sm:grayscale sm:hover:grayscale-0 transition-all duration-500 group"
              >
                <RecentPubItem
                  key={index}
                  tagContent={tagContent}
                  date={date}
                  title={title}
                  image={image}
                  link={link}
                />
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </section>
  );
};

export default RecentPubsSection;
