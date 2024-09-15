import React from "react";

const Landing = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="w-full min-h-screen flex flex-col bg-[#F5EDED]">
        <main className="flex-1">
          <div
            className="flex justify-center items-center h-screen bg-cover md:bg-cover lg:bg-contain xl:bg-contain  bg-center mt-[20px] lg:overflow-hidden md:overflow-hidden sm:overflow-hidden"
            style={{ backgroundImage: "url(/j.webp)" }}
          >
            <h1 className="text-[#A54A69] mt-42 sm:mt-[800px] md:mt-48 text-5xl sm:text-7xl lg:text-[14vw] lg:mt-80 md:text-8xl font-bold tracking-widest z-10">
              CAKE DILIM
            </h1>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Landing;
