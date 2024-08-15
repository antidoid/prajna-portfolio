import AboutPP from "../assets/about.png";

function About() {
  return (
    <div className="font-Inter">
      <div className="text-center mt-16 font-normal">
        <h2 className="text-4xl mb-16">
          Know more about <span className="font-Bounce font-normal">Me</span>
        </h2>
      </div>
      <div className="flex justify-center">
        <div className="px-[3px] py-[1px] flex items-center bg-gradient-to-r from-blue-450 via-pink-450 to-yellow-450 rounded-xl">
          <img className="size-[440px] rounded-xl" src={AboutPP} />
        </div>
        <p className="w-2/5 ml-8 text-2xl leading-7 font-extralight">
          My passion for design started young when I was in kindergarten and
          participated in a drawing competition. I thrived in art
          competitions, often taking the prize home but when I entered 11th
          grade, the focus shifted to studies, later in 12th I shifted back to
          home due to pandemic where online classes couldn't hold my attention
          but <span className="font-normal underline">doodling</span> on paper
          could. I turned to Instagram. The app's design with its new Reels
          feature, sparked a deeper interest. Further, I stumbled upon{" "}
          <span className="text-yellow-450">UI/UX</span> and{" "}
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
