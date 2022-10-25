import React from "react";

const AreaCarouselItem = ({ image, link, title }) => {
  return (
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
  );
};

export default AreaCarouselItem;
