import React from "react";

const ExperienceSection = () => {
  return (
    <section className="pt-[3.75rem] md:pt-[6.875rem] pb-[4.375rem] md:pb-[7.25rem] px-[1.375rem] bg-cover bg-center bg-[url('https://estudiougaz.com/core/wp-content/themes/ugaz-zegarra/img/home/experience/bg-experience-movil.jpg')] xs:bg-[url('https://estudiougaz.com/core/wp-content/themes/ugaz-zegarra/img/home/experience/bg-experience.jpg')] relative">
      <div className="max-w-[75rem] mx-auto z-10 relative">
        <div className="max-w-xs lg:max-w-[23.3125rem] text-white mx-auto lg:ml-auto lg:mr-0 ">
          <div className="text-center mb-10">
            <p className="text-[#73bdb8] font-black mb-2 text-xs lg:text-base">
              - SOMOS EXPERTOS EN LO QUE HACEMOS -
            </p>
            <h2 className="text-[1.8125rem] md:text-[2.1875rem] lg:text-5xl font-black leading-none">
              Experiencia comprobada
            </h2>
          </div>

          <div className="flex flex-wrap">
            <div className="text-center w-1/2 p-6 lg:p-8 border-b-[1px] border-r-[1px]">
              <h3
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-offset="220"
                className="text-[1.8125rem] font-black "
              >
                84 %
              </h3>
              <p
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-offset="220"
                className="text-sm text-[0.9375rem] font-bold"
              >
                Casos de éxito
              </p>
            </div>
            <div className="text-center w-1/2 p-6 lg:p-8 border-b-[1px]">
              <h3
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-offset="220"
                className="text-[1.8125rem] font-black"
              >
                20
              </h3>
              <p
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-offset="220"
                className="text-sm text-[0.9375rem] font-bold"
              >
                Años de experiencia
              </p>
            </div>
            <div className="text-center w-1/2 p-6 lg:p-8 border-r-[1px]">
              <h3
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-offset="150"
                className="text-[1.8125rem] font-black"
              >
                92 %
              </h3>
              <p
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-offset="150"
                className="text-sm text-[0.9375rem] font-bold"
              >
                Índice de confianza
              </p>
            </div>
            <div className="text-center w-1/2 p-6 lg:p-8">
              <h3
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-offset="150"
                className="text-[1.8125rem] font-black"
              >
                50 %
              </h3>
              <p
                data-aos="fade-up"
                data-aos-once="true"
                data-aos-duration="1000"
                data-aos-offset="150"
                className="text-sm text-[0.9375rem] font-bold"
              >
                Crecimiento anual de clientes
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-[#152129]"></div>
    </section>
  );
};

export default ExperienceSection;
