import React from "react";
import { SwiperSlide } from "swiper/react";

const RecentPubItem = ({ tagContent, date, title, image, link }) => {
  return (
    <a href={link}>
      <div className="relative h-[100vw] sm:h-[25rem] overflow-hidden rounded-lg sm:rounded-none">
        {/* <div className="bg-cover bg-center bg-[url('https://estudiougaz.com/core/wp-content/uploads/RAA-nuevo-socio-Lexlatin-1.jpg')] h-full "></div> */}
        <img
          className="object-cover object-center w-full h-full"
          src={image}
          alt=""
        />
        <div className="p-[1.875rem] w-full h-full absolute top-0 left-0 flex bg-gradient-to-b from-[#1521294d] to-[#152129ed] "></div>
        <div className="text-white font-bold p-[1.8125rem] sm:px-[2rem] sm:py-[3.25rem] w-full h-full absolute top-0 left-0 flex flex-col justify-between text-left">
          <b>{tagContent}</b>
          <div>
            <p className="pb-3">{date}</p>
            <h4 className=" text-[1.1875rem] leading-[1.375rem] sm:line-clamp-2 sm:group-hover:line-clamp-none ">
              {title}
            </h4>
            <div className="flex sm:group-hover:h-[2.34375rem] sm:group-hover:pt-3 pt-3 sm:p-0 sm:h-0 transition-all duration-500 overflow-hidden ">
              <p className="text-[1.0625rem] text-[#73bdb8] underline underline-offset-4">
                Ver detalle
              </p>
              <img
                className="ml-2 max-w-[1.3125rem]"
                src="https://estudiougaz.com/core/wp-content/themes/ugaz-zegarra/img/svg/icon-arrow-flecha-green-right.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default RecentPubItem;
