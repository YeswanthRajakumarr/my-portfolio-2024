import React from "react";

const talksData = [
  { Topic: "One Day World on Rust", Place: "SRIT", Year: "2023" },
  { Topic: "Masterclass on Rust", Place: "SRIT", Year: "2023" },
  { Topic: "Rust for Automotive", Place: "Rust India", Year: "2023" },
  { Topic: "Dynamic Programming in Action", Place: "KCT", Year: "2023" },
  { Topic: "Elevate your Resume", Place: "KCT", Year: "2023" },
  { Topic: "How to Git ?", Place: "KCT", Year: "2022" },
];
export const Talks = () => {
  return (
    <div className="mt-10">
      <h1 className="w-[410 px] text-black text-[35px] not-italic font-bold leading-[37px] tracking-[-1.2px]">
        Talks & Workshops
      </h1>
      <ul className="mt-4 px-2">
        {talksData.map((talk, index) => {
          return (
            <li key={talk}>
              <div>
                <p className="text-[#444] text-base not-italic font-normal leading-6">
                  <span className="font-medium text-[#333]">{index + 1}. </span>
                  {talk.Topic} @ <span>{talk.Place}</span>
                  <span className="border border-black bg-gray-700 rounded p-1 text-sm inline-flex items-center leading-4 text-white no-underline ml-2">
                    {talk.Year}
                  </span>
                </p>
                <hr className="h-[1px] my-3 border-0 bg-[#4444]"></hr>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
