import Project from "./Project";
import CookbooksImg from "../assets/cookbooks.png";
import RH from "../assets/rh.png";
import IRCTCImg from "../assets/irctc.png";

function Projects() {
  return (
    <div className="flex flex-col gap-10 max-w-screen-xl mx-auto">
      <div className="relative flex justify-end items-center">
        <p className="font-Inter font-medium text-[40px] leading-10">
          My Work<span className="text-pink-450">.</span>
        </p>
        <div className="h-[1px] grow bg-white self-end mb-5 md:ml-10"></div>
      </div>
      <Project
        name="COOKBOOK"
        description="Make mealtime magical again! Share your creations, connect and meet like-minded cooks, and turn every dinner into a delightful social experience."
        projectSrc="https://www.behance.net/gallery/206576151/Cookbook"
        imageSrc={CookbooksImg}
        direction="normal"
        shape="circle"
      />
      <Project
        name="REVA HACK </> 2023"
        description="A user-friendly and engaging website and mobile app for RevaHack</> 2023, the largest tech event at Reva University. The goal was to create a digital experience that would attract potential participants, sponsors, and judges, while also providing them with all the necessary information about the event."
        projectSrc="https://www.behance.net/gallery/206677121/HACKATHON-UI"
        imageSrc={RH}
        direction="reverse"
        shape="triangle"
      />
      <Project
        name="IRCTC RE-DESIGN"
        description="Simple redesign of the IRCTC mobile application, as it is important to be honest. The current configuration, which includes a multitude of screens, outdated aesthetics, and an overwhelming number of CAPTCHA prompts during login, is akin to navigating through a complex maze."
        projectSrc="https://www.behance.net/gallery/206683485/IRCTC-RE-DESIGN"
        imageSrc={IRCTCImg}
        direction="normal"
        shape="square"
      />
    </div>
  );
}

export default Projects;
