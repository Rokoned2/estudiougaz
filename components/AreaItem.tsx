import Image from "next/image";
import React from "react";

interface AreaItemProps {
  iconFront: string;
  iconBack: string;
  image: string;
  title: string;
  description: string;
  link: string;
}

const AreaItem: React.FC<AreaItemProps> = ({
  iconFront,
  iconBack,
  image,
  title,
  description,
  link,
}) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="1000"
      className="relative md:w-1/2 lg:w-1/3 py-10 md:px-2.5 lg:px-5"
    >
      <div className="group">
        <div className="hidden p-5 bg-white group-hover:bg-[#004169] md:block rounded-full absolute top-0 left-12 z-20 transition-colors duration-500 ">
          <img
            className="h-10 w-10 group-hover:hidden"
            src={iconFront}
            alt=""
          />
          <img
            className="h-10 w-10 hidden group-hover:block"
            src={iconBack}
            alt=""
          />
        </div>

        <a href={link}>
          <div className="h-[21.25rem] overflow-hidden rounded-lg relative">
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
            <div className="p-[1.875rem] py-[3.125rem] px-[2.1875rem] flex flex-col  w-full h-full absolute top-0 left-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-[1.4375rem] text-[#004169] pb-3 font-bold mt-auto">
                {title}
              </h3>
              <p className="pb-3 text-[#354652]">{description}</p>
              <span className="flex items-center">
                <p className="text-[#e9511d] font-bold text-[1.0625rem] underline underline-offset-4">
                  Ver detalle
                </p>
                <img
                  // objectFit="cover"
                  className="w-5 h-5 ml-2"
                  // objectPosition="center"
                  src="https://estudiougaz.com/core/wp-content/themes/ugaz-zegarra/img/svg/icon-arrow-flecha-orange-right.svg"
                  alt=""
                />
              </span>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default AreaItem;
