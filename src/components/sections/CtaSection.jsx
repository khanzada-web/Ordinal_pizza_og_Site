import Link from "next/link";
import React from "react";

const CtaSection = () => {
  return (
    <section className="pt-8 pb-20">
      <div className="mx-auto max-w-[86rem] px-4 sm:px-10 lg:px-8">
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <h2 className="mb-10 text-pretty text-5xl font-title bg-gradient-to-r from-[#EF9631] to-[#E96751] bg-clip-text text-transparent">
            Discover Our Curated Collections
          </h2>
          <div className="max-w-lg mx-auto">
            <p className="mb-10 font-semibold text-lg lg:text-xl text-gray-200">
              Explore a wide range of handpicked items that reflect your unique
              style. Find the perfect piece to elevate your collection today!
            </p>
            <Link
              className="inline-block text-base mb-4 sm:mb-0 sm:mr-4 py-5 px-12 text-white font-bold bg-primary hover:opacity-80 rounded-full transition duration-200"
              href="/collection"
            >
              Our Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
