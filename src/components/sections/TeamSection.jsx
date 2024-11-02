import React from "react";

const teamMembers = [
  {
    name: "Jalapeno Pete",
    position: "Founder",
    image: "/assets/images/team-image-1.jpg",
  },
  {
    name: "Luda",
    position: "Pizza team 2.0",
    image: "/assets/images/team-image-2.png",
  },
  {
    name: "Rain maker",
    position: "Pizza team 2.0",
    image: "/assets/images/team-image-3.jpg",
  },
];

const TeamSection = () => {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="mx-auto max-w-[86rem] px-4 sm:px-10 lg:px-8">
        <div className="mb-20 md:max-w-xl text-center mx-auto">
          <h2 className="text-pretty text-5xl font-title sm:text-7xl bg-gradient-to-r from-[#EF9631] to-[#E96751] bg-clip-text text-transparent">
            Our Team
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img
                className="mb-6 mx-auto rounded-lg duration-300 hover:scale-[1.03]"
                src={member.image}
                alt={`${member.name}'s photo`}
              />
              <span className="inline-block mb-1.5 text-lg font-extrabold uppercase text-gray-100">
                {member.position}
              </span>
              <h3 className="mb-4 font-title text-2xl text-white tracking-3xl capitalize">
                {member.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
