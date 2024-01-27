import React from "react";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="flex mt-10 gap-2 max-[505px]:flex-col-reverse">
      <div>
        <div className="">
          <p className="text-black text-5xl font-bold leading-[37px] tracking-[-1.2px] max-[585px]:text-4xl">
            Yeswanth Rajakumar
          </p>
          <p className="font-normal text-base leading-6 mt-3">
            Software Engineer @{" "}
            <span className="font-medium text-[#333]">Thoughtworks</span>
          </p>
        </div>
        <div className=" mt-3">
          <p className="text-[#444] text-base not-italic font-normal leading-6">
            XP practitioner, helping developers to craft scalable apps 🚀. I
            talk about software development, interview readiness, and enhancing
            professional profiles.
          </p>
        </div>
      </div>
      <div className="">
        <Image
          className="rounded-full"
          src="/yeswanth.png"
          width={180}
          height={180}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
};
