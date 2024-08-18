import AboutPP from "../assets/about.png";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();

  return (
    <div className="font-Inter max-w-screen-xl mx-auto">
      <div className="text-center mt-16 font-normal">
        <h2 className="text-4xl mb-16">
          Know more about <span className="font-Bounce font-normal">Me</span>
        </h2>
      </div>
      <div className="flex">
        <div className="size-[402px] flex justify-center items-center bg-gradient-to-r from-blue-450 via-pink-450 to-yellow-450 rounded-3xl">
          <img className="size-[400px] rounded-3xl" src={AboutPP} />
        </div>
        <p className="flex-1 ml-8 text-2xl leading-10 font-extralight">
          My passion for design started young when I was in kindergarten and
          participated in a drawing competition. I thrived in art
          competitions, often taking the prize home but when I entered 11th
          grade, the focus shifted to studies, later in 12th I shifted back to
          home due to pandemic where online classes couldn't hold my attention
          but{" "}
          <span
            className="font-normal italic text-yellow-450 underline cursor-pointer opacity-70 hover:opacity-100 duration-200"
            onClick={() => navigate("doodles")}
          >
            doodling
          </span>{" "}
          on paper could. I turned to Instagram. The app's design with its new
          Reels feature, sparked a deeper interest. Further, I stumbled upon{" "}
          <span className="text-blue-450">UI/UX</span> and{" "}
          <span className="text-pink-450">product design</span>. After joining
          the university, I dove into Figma. Eager to learn, I participated in
          design contests and joined clubs. My design skills flourished, leading
          me to become a design lead and mentor within a club. Design has become
          my constant companion.
        </p>
      </div>
    </div>
  );
}

export default About;
