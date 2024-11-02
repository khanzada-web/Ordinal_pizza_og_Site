import React from "react";

const HeroSection = () => {
  return (
    <section className="py-16">
      <div className="overflow-hidden">
        <div className="mx-auto max-w-[86rem] px-4 sm:px-10 lg:px-8">
          <div className="mx-auto max-w-2xl gap-x-14 xl:gap-x-20 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h1 className="text-pretty text-5xl font-title sm:text-7xl bg-gradient-to-r from-[#EF9631] to-[#E96751] bg-clip-text text-transparent">
                Ordinal Pizza Og
              </h1>
              <p className="mt-8 text-pretty text-lg font-medium text-primary sm:max-w-md sm:text-xl/8 lg:max-w-none">
              340 Pizzas forever ingrained on the BTC Blockchain commemorating the first ever sale of BTC for a physical item.
              </p>
            </div>
            <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <div className="relative">
                  <img
                    alt=""
                    src="/assets/images/hero-image-1.png"
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg duration-300 hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
              <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                <div className="relative">
                  <img
                    alt=""
                    src="/assets/images/hero-image-2.png"
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg duration-300 hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                  <img
                    alt=""
                    src="/assets/images/hero-image-3.png"
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg duration-300 hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
              <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                <div className="relative">
                  <img
                    alt=""
                    src="/assets/images/hero-image-4.png"
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg duration-300 hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="relative">
                  <img
                    alt=""
                    src="/assets/images/hero-image-5.png"
                    className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg duration-300 hover:scale-[1.03]"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
