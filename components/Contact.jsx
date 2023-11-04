import React from "react";

const Contact = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4  wrap w-full">
      <a
        href="https://www.linkedin.com/in/mateusz-marek-b81272247/"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <div className="flex items-center justify-center  h-20 bg-[#0E76A8] text-2xl">
          <p className="text-3xl font-semibold text-slate-200">Linkedin</p>
        </div>
      </a>
      <a
        href="https://twitter.com/rozprogramowany"
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex items-center justify-center  h-20 bg-[#6E5494] text-2xl">
          <p className="text-3xl font-semibold text-slate-200">Twitter</p>
        </div>
      </a>
      <a href="https://github.com/MateuszEM88" target="_blank" rel="noreferrer">
        <div className="flex items-center justify-center  h-20 bg-[#1DA1F2] text-2xl">
          <p className="text-3xl font-semibold text-slate-200">Github</p>
        </div>
      </a>
      <a href="mailto:mateuszEM1988@gmail.com" target="_blank" rel="noreferrer">
        <div className="flex items-center justify-center  h-20 bg-indigo-500 ">
          <p className="text-3xl font-semibold text-slate-200">Email</p>
        </div>
      </a>
    </div>
  );
};

export default Contact;
