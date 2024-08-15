type ProjectProps = {
  name: string;
  description: string;
  projectSrc: string;
  imageSrc: string;
};

// enum Shape {
//   "square",
//   "circle",
//   "polygon",
// }

function Project({ name, description, projectSrc, imageSrc }: ProjectProps) {
  return (
    <div className="p-[1px] bg-gradient-to-r from-blue-450 via-pink-450 to-yellow-450 rounded-3xl">
      <div className="bg-black grid grid-cols-2 rounded-3xl py-10 px-10">
        <div className="font-Inter flex flex-col gap-10 pt-9 px-8">
          <h2 className="font-normal text-4xl">{name}</h2>
          <p className="font-extralight text-2xl w-4/5">{description}</p>
          <a href={projectSrc} className="font-Bounce text-2xl">
            View Project
            <span className="bg-gradient-to-r from-blue-450 via-pink-450 to-yellow-450 text-transparent bg-clip-text">
              {" - - - >"}
            </span>
          </a>
        </div>
        <div className="h-96 w-auto">
          <img className="rounded-3xl h-full w-full" src={imageSrc} />
        </div>
      </div>
    </div>
  );
}

export default Project;
