import img1 from "../assets/doodles/1.png";
import img2 from "../assets/doodles/2.png";
import img3 from "../assets/doodles/3.png";
import img4 from "../assets/doodles/4.png";
import img5 from "../assets/doodles/5.png";
import img6 from "../assets/doodles/6.png";
import img7 from "../assets/doodles/7.png";
import img8 from "../assets/doodles/8.png";
import img9 from "../assets/doodles/9.png";
import img10 from "../assets/doodles/10.png";
import img11 from "../assets/doodles/11.png";
import img12 from "../assets/doodles/12.png";
import img13 from "../assets/doodles/13.png";
import img14 from "../assets/doodles/14.png";
import img15 from "../assets/doodles/15.png";
import img16 from "../assets/doodles/16.png";
import img17 from "../assets/doodles/17.png";

function Doodles() {
  return (
    <div className="flex flex-col px-12">
      <p className="font-Bounce font-medium text-xl pt-12 pb-4">
        How it started......
      </p>
      <div className="h-[650px] grid grid-cols-2 grid-rows-1 gap-8">
        <div className="col-span-1 row-span-1">
          <div className="h-full grid grid-cols-2 grid-rows-3 gap-8">
            <div className="col-span-1 row-span-2">
              <img src={img1} className="size-full object-fill" />
            </div>
            <div className="col-start-2 row-span-1">
              <img src={img3} className="size-full object-fill" />
            </div>
            <div className="col-start-1">
              <img src={img2} className="size-full object-fill" />
            </div>
            <div className="col-start-2 row-start-2 row-span-2">
              <img src={img4} className="size-full object-fill" />
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-1">
          <img src={img5} className="size-full object-fill" />
        </div>
      </div>
      <div className="h-[1600px] grid grid-cols-2 grid-rows-2 gap-8 mt-8">
        <img src={img6} className="size-full object-fill" />
        <img src={img7} className="size-full object-fill" />
        <img src={img8} className="size-full object-fill" />
        <img src={img9} className="size-full object-fill" />
      </div>
      <div className="h-[360px] mt-8 grid grid-cols-3 grid-rows-1 gap-8">
        <img src={img10} className="row-span-1 size-full object-center" />
        <img src={img11} className="row-span-1 size-full object-center" />
        <img src={img12} className="row-span-1 size-full object-center" />
      </div>
      <div className="h-[460px] grid grid-cols-4 grid-rows-2 gap-8 mt-8">
        <img src={img13} className="size-full row-span-2 object-fill" />
        <img src={img14} className="size-full row-span-2 object-fill" />
        <div className="">
          <img src={img15} className="size-full object-fill mb-8" />
          <img src={img16} className="size-full object-fill" />
        </div>
        <img src={img17} className="size-full row-span-2 object-fill" />
      </div>
    </div>
  );
}

export default Doodles;
