import PP from "../assets/pp.png";

function Hero() {
  return (
    <main className="grid grid-cols-2 py-20">
      <div className="h-full font-Inter flex flex-col items-start justify-center">
        <div className="font-thin pb-8">
          <h1 className="text-5xl leading-[58px]">
            Hey, I’m
            <span className="ml-4 font-medium">
              Prajna R Patil<span className="text-blue-450">.</span>
            </span>
          </h1>
          <h2 className="text-4xl ml-2">I’m a designer.</h2>
        </div>
        <div className="ml-8 flex flex-col items-center">
          <div className="p-[1px] bg-gradient-to-r from-blue-450 via-pink-450 to-yellow-450 rounded-xl">
            <button className="bg-black px-12 py-3 rounded-xl">
              <a className="font-extralight text-[20px] leading-6">
                Download Me.
              </a>
            </button>
          </div>
          <span className="font-extralight italic mt-1 text-gray-400">
            Yes, that’s my resume.
          </span>
        </div>
      </div>
      <div className="p-12 w-full h-full">
        <img src={PP} />
      </div>
    </main>
  );
}

export default Hero;
