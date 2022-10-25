import React from "react";

interface NewsItemProps {
  image: string;
  title: string;
  date: string;
  link: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ image, title, date, link }) => {
  return (
    <div className="shadow-2xl bg-[#ffffff] mb-[0.3rem]">
      <div className="w-full h-full">
        <img className="w-full" src={image} alt="" />
      </div>
      <div className="px-[2.3125rem] pt-[2.375rem] pb-12 text-[1.0625rem] text-center font-black">
        <p className="mb-4 text-[#e9511d]">Informativos</p>
        <h3 className="mb-4 text-[#354652] line-clamp-3 leading-5 lg:text-[1.125rem]">
          {title}
        </h3>
        <p className="mb-4 text-base font-normal text-[#354652]">{date}</p>
        <a href={link} className="flex justify-center">
          <img
            className="mr-2 w-[1.6875rem]"
            src="https://estudiougaz.com/core/wp-content/themes/ugaz-zegarra/img/svg/icon-pdf.svg"
            alt=""
          />
          <p className="text-[#004169]">Descargar</p>
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
