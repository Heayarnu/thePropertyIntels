import React from "react";
import Image from "next/image";

function AboutComponent() {
  return (
    <section id="about" className="py-[6.44rem]">
      <div className="lg:flex items-center gap-[3.31rem]">
        <div>
          <h2 className="text-[0.875rem] leading-[1.8125rem] tracking-[-0.0175rem] text-sub_heading">
            WONDERING WHO WE ARE ?
          </h2>
          <h3 className="mt-[.94rem] mb-[.62rem] text-[1.5rem] md:text-[2.375rem] tracking-[-0.0475rem] font-bold text-main_heading">
            About ThePropertyIntels
          </h3>
          <p className="text-[0.875rem] md:text-[1.125rem] tracking-[-0.0225rem] leading-[1.75rem] md:leading-[2rem] font-normal text-sub_heading">
            Mattis semper sed mauris a amet dui tempus. Nascetur nisl eu vitae
            sollicitudin id condimentum dignissim. Ac cras ornare ut interdum.
            Tempus ac viverra tempor tempor dui adipiscing pulvinar. Auctor
            pellentesque in leo elit lectus duis. Mauris diam eleifend vitae
            gravida quam augue. Id consectetur proin purus fringilla dui nullam
            elementum egestas. Non sed enim cras hendrerit fringilla consectetur
            vitae. Ultrices in p
          </p>

          <button className="w-[11.3125rem] rounded-[6.25rem] p-[0.625rem] border-[rgba(255,255,255,0.91)] text-base md:text-[1.125rem] tracking-[-0.0225rem] mt-[2.5rem] text-white font-semibold bg-primary border border-solid">
            Learn more
          </button>
        </div>
        <div className="mt-[3.44rem] relative h-[35.375rem] w-full">
          <Image
            className=""
            // width={3840}
            // height={2160}
            fill
            src={"/assets/images/hero/about.jpg"}
            alt="hero"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutComponent;
