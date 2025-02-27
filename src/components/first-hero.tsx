

import Image from "next/image";


import React from "react";
import { FaHamburger, FaCookie, FaWineGlassAlt } from "react-icons/fa";

const Four = () => {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Image Section */}
        <div className="grid grid-cols-2 mt-60 grid-rows-3 gap-4">
          <Image width={500} height={500}
            src="/row1.jpg"
            alt="taco"
            className="rounded-lg object-cover w-full h-60 row-span-2"
          />
          <Image width={300} height={300}
            src="/row2.jpg"
            alt="small"
            className="rounded-lg object-cover mt-20 w-40 h-40"
          />
          <Image width={300} height={300}
            src="/row5.jpg"
            alt="Fast Food"
            className="rounded-lg object-cover ml-20 w-20 h-20"
          />
          <Image width={300} height={300}
            src="/row4.jpg"
            alt="Chicken"
            className="rounded-lg object-cover w-40 -mt-64 h-52"
          />
          <Image width={300} height={300}
            src="/row3.jpg"
            alt="Dinner"
            className="rounded-lg object-cover -ml-24 -mt-64 w-40 h-40"
          />
                    <Image width={300} height={300}
            src="/row6.jpg"
            alt="Fast Food"
            className="rounded-lg object-cover -mt-[410px] ml-[357px] w-20 h-20"
          />
        </div>

        {/* Right Content Section */}
        <div className="flex flex-col justify-center">
          {/* Title */}
          <h3 className="text-yellow-400 text-lg font-semibold mb-2">
            Why Choose us
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-yellow-400">Extraordinary taste</span> <br />
            And Experienced
          </h1>
          <p className="text-gray-300 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus.
          </p>

          {/* Food Categories */}
          <div className="grid grid-cols-3 gap-4 text-center mb-8">
            <div className="flex flex-col items-center">
              <FaHamburger className="text-yellow-400 text-4xl mb-2" />
              <p className="text-lg font-semibold">Fast Food</p>
            </div>
            <div className="flex flex-col items-center">
              <FaCookie className="text-yellow-400 text-4xl mb-2" />
              <p className="text-lg font-semibold">Lunch</p>
            </div>
            <div className="flex flex-col items-center">
              <FaWineGlassAlt className="text-yellow-400 text-4xl mb-2" />
              <p className="text-lg font-semibold">Dinner</p>
            </div>
          </div>

          {/* Years of Experience */}
          <div className="flex items-center gap-4">
            <div className="bg-yellow-400 text-black px-6 py-4 rounded-lg text-center font-bold text-3xl">
              30+
            </div>
            <p className="text-lg font-semibold">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Four;