type ProjectProps = {
  name: string;
  description: string;
  projectSrc: string;
  imageSrc: string;
  shape: "square" | "circle" | "triangle";
  direction: "normal" | "reverse";
};

function Project({
  name,
  description,
  projectSrc,
  imageSrc,
  shape,
  direction,
}: ProjectProps) {
  const shapeEl = (() => {
    switch (shape) {
      case "circle":
        return (
          <div
            className={`size-10 bg-blue-450 rounded-full absolute ${direction === "normal" ? "-left-14" : "-right-14"
              }`}
          ></div>
        );
      case "triangle":
        return (
          <div
            className={`w-0 h-0 border-l-[16px] border-r-[16px] border-b-[32px] border-l-transparent border-r-transparent border-b-pink-450 absolute ${direction === "normal" ? "-left-14" : "-right-14"
              }`}
          ></div>
        );
      case "square":
        return (
          <div
            className={`size-10 bg-yellow-450 absolute ${direction === "normal" ? "-left-14" : "-right-14"
              }`}
          ></div>
        );
    }
  })();

  const gradientClass = (() => {
    switch (shape) {
      case "circle":
        return "bg-gradient-to-r from-pink-450 via-blue-450 to-yellow-450";
      case "triangle":
        return "bg-gradient-to-b from-yellow-450 via-blue-450 to-pink-450";
      case "square":
        return "bg-gradient-to-r from-yellow-450 via-blue-450 to-pink-450";
    }
  })();

  return (
    <div className={`p-[1px] ${gradientClass} rounded-3xl`}>
      <div className="bg-black grid grid-cols-2 rounded-3xl py-10 px-10">
        <div
          className={`flex pt-9 ${direction == "reverse" ? "order-2" : "order-1"}`}
        >
          <div
            className={`w-fit font-Inter flex flex-col gap-10 ${direction == "reverse" ? "items-end pr-8" : "items-start pl-8 "}`}
          >
            <div className="w-fit relative">
              {shapeEl}
              <h2 className="font-normal text-4xl">{name}</h2>
            </div>
            <p className="font-extralight text-2xl w-4/5">{description}</p>
            <a href={projectSrc} className="font-Bounce text-2xl">
              View Project
              <span className="bg-gradient-to-r from-blue-450 via-pink-450 to-yellow-450 text-transparent bg-clip-text">
                {" - - - >"}
              </span>
            </a>
          </div>
        </div>
        <div
          className={`h-96 w-auto ${direction == "reverse" ? "order-1" : "order-2"}`}
        >
          <img className="rounded-3xl h-full w-full" src={imageSrc} />
        </div>
      </div>
    </div>
  );
}

export default Project;
