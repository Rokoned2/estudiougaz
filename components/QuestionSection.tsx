import React from "react";

const QuestionSection = () => {
  return (
    <section className="bg-[#eff1f4] w-full relative mt-48">
      <div
        data-aos="fade-right"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-offset="200"
        className="hidden lg:block lg:absolute lg:-left-48 xxl:left-0 lg:bottom-0 max-w-[36.25rem] h-[130%]"
      >
        <img
          className="object-cover w-full h-full"
          src="https://estudiougaz.com/core/wp-content/themes/ugaz-zegarra/img/our-areas/support-person-our-areas.png"
          alt=""
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-once="true"
        data-aos-duration="1000"
        data-aos-offset="200"
        className="w-full px-[1.375rem] pt-[4.75rem] pb-[4.4375rem] sm:pb-[5.375rem] sm:pt-[5.875rem]"
      >
        <div className="max-w-[29.6875rem] flex flex-col items-center ml-auto mr-auto lg:mr-[6.25rem] xxl:mr-[9.5rem]">
          <h3 className="text-[1.625rem] md:text-[2.0625rem] text-center font-bold leading-[1.6875rem] sm:leading-[2.3rem] text-[#354652] xxl:text-[1.875] ">
            Te brindamos asesoría legal en todas las áreas
          </h3>
          <a href="https://estudiougaz.com/contacto/">
            <button className=" py-[0.6rem] px-8 mt-10 text-[1.125rem] duration-500 text-white bg-[#004169] sm:hover:bg-[#73BDB8] font-bold rounded-3xl transition-colors">
              Solicitar asesoría
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default QuestionSection;
