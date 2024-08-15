import Project from "./Project";
import CookbooksImg from "../assets/cookbooks.png";
import RH from "../assets/rh.png";
import StockStreet from "../assets/stockstreet.png";

function Projects() {
  return (
    <div className="flex flex-col gap-10">
      <div className="relative flex justify-end items-center">
        <p className="font-Inter font-medium text-[40px] leading-10">
          My Work<span className="text-pink-450">.</span>
        </p>
        <div className="h-[1px] grow bg-white self-end mb-5 md:ml-10"></div>
      </div>
      <Project
        name="COOKBOOK"
        description="Make mealtime magical again! Share your creations, connect and meet like-minded cooks, and turn every dinner into a delightful social experience."
        projectSrc="https://www.figma.com/design/SXZuA3NfHpXpyulrhqGqdO/cookbook-2.0-(Community)?node-id=0-1&t=H5i7tVlUdkwRWCg6-1"
        imageSrc={CookbooksImg}
      />
      <Project
        name="REVA HACK </> 2023"
        description="A user-friendly and engaging website and mobile app for RevaHack</> 2023, the largest tech event at Reva University. The goal was to create a digital experience that would attract potential participants, sponsors, and judges, while also providing them with all the necessary information about the event."
        projectSrc="https://www.figma.com/design/8PXsz1XaM0k0eCfY8V2iKO/revahack-ui?node-id=0-1&t=rpNWmuCqRjgbsvmu-1"
        imageSrc={RH}
      />
      <Project
        name="STOCKSTREET"
        description="A user-friendly website design to check stocks and learn about stock market."
        projectSrc="https://www.figma.com/design/NCY1Oti3jTJDMLMjwJnD9W/stockstreet-design?node-id=51-1732&t=6bEeerA2t5VHGBCy-1"
        imageSrc={StockStreet}
      />
    </div>
  );
}

export default Projects;
