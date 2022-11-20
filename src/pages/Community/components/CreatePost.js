import React, { useState, useEffect } from "react";

import TestData from "./TestData";

//Create Post
const CreatePost = () => {
  return (
    <div className="container mx-auto px-10 py-10 rounded-xl drop-shadow-md bg-white-100 font-body">
      <div className="flex flex-col">
        {/* Create Post */}
        <h1 className="py-4 text-primary-80 font-bold text-2xl md:text-3xl">
          สร้างโพสต์
        </h1>
        {/* Title */}
        <div className="mt-4 mb-2 text-lg md:text-xl text-black">
          <label className="block">
            <span className="py-2 block text-xl md:text-2xl font-semibold text-black">
              หัวข้อ
            </span>
            <input
              type="text"
              placeholder="กรุณากรอกหัวข้อ..."
              className="mt-1 w-full px-3 py-2 bg-white-100 border border-slate-300 rounded-md text-base md:text-lg shadow-sm placeholder-slate-400
      focus:outline-none focus:border-primary-80 focus:ring-1 focus:ring-primary-80
      invalid:border-[#FF3358] invalid:text-[#FF3358]
      focus:invalid:border-[#FF3358] focus:invalid:ring-[#FF3358]
    "
            />
          </label>
        </div>
        {/* Content */}
        <div className="my-4 text-lg md:text-xl text-black">
          <label className="block">
            <span className="py-2 block text-xl md:text-2xl font-semibold text-black">
              รายละเอียด
            </span>
            <textarea
              type="text"
              placeholder="กรุณากรอกรายละเอียด..."
              className="mt-1 w-full h-[200px] px-3 py-2 bg-white-100 border border-slate-300 rounded-md text-base md:text-lg shadow-sm placeholder-slate-400
      focus:outline-none focus:border-primary-80 focus:ring-1 focus:ring-primary-80
      invalid:border-[#FF3358] invalid:text-[#FF3358]
      focus:invalid:border-[#FF3358] focus:invalid:ring-[#FF3358]
    "
            />
          </label>
        </div>
        {/* button click */}
        <button className="mt-4 px-6 py-3.5 font-bold text-2xl md:text-3xl rounded-2xl bg-primary-80 text-white-100 hover:bg-primary-100">
          โพสต์
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
