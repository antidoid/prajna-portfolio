import PP from "../assets/pp.png";

function Hero() {
  return (
    <main className="grid grid-cols-2 py-20 max-w-screen-xl mx-auto">
      <div className="h-full font-Inter flex flex-col items-start justify-center">
        <div className="font-thin pb-8">
          <h1 className="text-5xl leading-[58px]">
            Hey, I’m
            <span className="ml-4 font-medium">
              Prajna R Patil<span className="text-blue-450">.</span>
            </span>
          </h1>
          <h2 className="text-4xl ml-2">
            I’m a designer<span className="text-yellow-450">.</span>
          </h2>
        </div>
        <div className="ml-8 flex flex-col items-center">
          <div className="p-[1px] bg-gradient-to-r from-blue-450 via-pink-450 to-yellow-450 rounded-xl">
            <button className="bg-black px-12 py-3 rounded-xl hover:tracking-widest duration-200">
              <a
                target="_blank"
                href="https://drive.google.com/file/d/1ZU0O4O-dy2NIsTRr8IocIi9i5YDa7E1n/view?usp=drivesdk"
                className="font-extralight text-[20px] leading-6"
              >
                Download Resume.
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className="p-12 pr-0">
        <div className="px-[1px] py-[1px] flex items-center bg-gradient-to-r from-blue-450 via-pink-450 to-yellow-450 rounded-3xl">
          <img src={PP} className="size-full rounded-3xl" />
        </div>
      </div>
    </main>
  );
}

export default Hero;
