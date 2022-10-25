import React from "react";

const SentenceSection = () => {
  return (
    <section className="flex  w-full overflow-hidden">
      <div
        data-aos="fade-right"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-offset="220"
        className="hidden md:block md:w-[45%]"
      >
        <img
          className="object-cover object-center h-full"
          src={
            "https://estudiougaz.com/core/wp-content/themes/ugaz-zegarra/img/home/sentence/bg-sentence.jpg"
          }
          alt=""
        />
      </div>
      <div
        data-aos="fade-left"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-offset="220"
        className="bg-[#eff1f4cc] w-full md:w-[55%] px-[1.875rem] sm:px-[1.5625rem] py-[7.375rem] md:py-[5rem] md:my-[1.875rem]"
      >
        <div className="relative py-12 sm:px-10 max-w-[29.375rem] mx-auto">
          <img
            className="absolute top-0 left-0 w-[3.75rem]"
            src="https://estudiougaz.com/core/wp-content/themes/ugaz-zegarra/img/svg/icon-quote-top.svg"
            alt=""
          />
          <h3 className="text-[1.8125rem] font-bold leading-[1.875rem] text-[#354652] xxl:text-[1.875]">
            En el Estudio Ugaz Zegarra nos involucramos con cada caso. Nuestro
            compromiso está garantizado.
          </h3>
          <img
            className="absolute bottom-0 right-7 w-[3.75rem]"
            src="https://estudiougaz.com/core/wp-content/themes/ugaz-zegarra/img/svg/icon-quote-bottom.svg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default SentenceSection;
