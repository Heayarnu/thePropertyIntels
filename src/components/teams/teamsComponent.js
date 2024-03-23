import React from "react";
import Image from "next/image";
import Link from "next/link";

function TeamsComponent() {

const images = [
        { src: "/assets/images/teams/teams.png", alt: "Team 1", name: "Yomi Shokan", role: "Ceo & Founder" },
        { src: "/assets/images/teams/teams.png", alt: "Team 2", name: "Jane Smith", role: "CTO" },
        { src: "/assets/images/teams/teams.png", alt: "Team 3", name: "Alex Johnson", role: "Product Manager" },
        { src: "/assets/images/teams/teams.png", alt: "Team 4", name: "Emily Brown", role: "Backend Developer" },
        { src: "/assets/images/teams/teams.png", alt: "Team 5", name: "Jayden Lee", role: "Frontend Developer" },
        { src: "/assets/images/teams/teams.png", alt: "Team 6", name: "Graphics OJ", role: "Graphic Designer" }
      ];

  return (
    <section id="teams" className="pb-[6.44rem]">
        <div className="pb-[3rem]"> 
         <h1 className=" text-center text-[1.5rem] md:text-[2.375rem] text-main_heading">
          Our Teams
        </h1>
        </div>
        <div> 
       <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-x-7 gap-y-9 max-w-4xl mx-auto">
        {images.map((image, index) => (
          <div key={index} className="rounded-3xl relative">
            <img src={image.src} alt={image.alt} className="w-full rounded-3xl" />
            <div className="absolute bottom-0 left-0 right-0 p-3 bg-gray-200">
              <p className="text-sm font-light">{image.name}</p>
              <p className="text-xs font-light text-gray-500">{image.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
       </div>
    </section>
  );
}

export default TeamsComponent;
