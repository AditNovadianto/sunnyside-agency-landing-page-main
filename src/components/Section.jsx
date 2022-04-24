const Section = ({ img, title, description, color, flex }) => {
  const underLineColor =
    color == "yellow"
      ? "bg-yellow-200 group-hover:bg-yellow-300"
      : "bg-pink-200 group-hover:bg-pink-300";

  // const hoverUnderLine =
  //   color == "yellow" ? "hover:bg-yellow-500" : "hover:bg-pink-500";

  const sectionFlex = flex == "reverse" ? "flex-row-reverse" : "";

  return (
    <div className={`lg:flex justify-center items-center ${sectionFlex}`}>
      <img className="w-full lg:w-[50%]" src={img} alt="image-transform" />

      <div className="p-10 m-auto lg:w-[50%] w-[100%]">
        <h1 className="lg:text-left mt-5 text-center text-4xl font-bold font-fraunces">
          {title}
        </h1>

        <p className="lg:text-left text-center mt-10 font-barlow text-[18px] text-Dark-grayish-blue">
          {description}
        </p>

        <a
          className="lg:ml-0 group text-center block m-auto w-max mt-10"
          href="#"
        >
          <span className="p-1 uppercase text-[18px] font-bold font-fraunces">
            learn more
          </span>
          <div className={`${underLineColor} h-2.5 rounded -mt-3`}></div>
        </a>
      </div>
    </div>
  );
};

export default Section;
