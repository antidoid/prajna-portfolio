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
    <div>
      <p className="font-Bounce text-xl pt-12 pb-4">How it started......</p>
      <div className="grid grid-cols-2 gap-8">
        <div className="col-span-1">
          <div className="grid grid-cols-2 grid-rows-3 gap-8">
            <div className="col-span-1 row-span-2">
              <img src={img1} className="size-full" />
            </div>
            <div className="col-start-2 row-span-1">
              <img src={img3} className="size-full" />
            </div>
            <div className="col-start-1">
              <img src={img2} className="size-full" />
            </div>
            <div className="col-start-2 row-start-2 row-span-2">
              <img src={img4} className="size-full" />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          <img src={img5} className="size-full" />
        </div>
      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-8 mt-8">
        <img src={img6} alt="Image 1" className="size-full" />
        <img src={img7} className="size-full" />
        <img src={img8} className="size-full" />
        <img src={img9} className="size-full" />
      </div>
      <div className="mt-8 grid grid-cols-3 gap-8">
        <img src={img10} className="size-full" />
        <img src={img11} className="size-full" />
        <img src={img12} className="size-full" />
      </div>
      <div className="grid grid-cols-4 grid-rows-2 gap-8 mt-8">
        <img src={img13} className="size-full row-span-2" />
        <img src={img14} className="size-full row-span-2" />
        <img src={img15} className="size-full" />
        <img src={img16} className="size-full row-span-2" />
        <img src={img17} className="size-full row-span-2" />
      </div>
    </div>
  );
}

export default Doodles;

// <img src={img2} className="row-start-2" />
// <img src={img3} className="col-start-2 row-end-1" />
// <img
//   src={img4}
//   className="col-start-2 col-end-2 row-start-1 row-end-1"
// />
