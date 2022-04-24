const Section2 = () => {
  return (
    <div className="block md:flex md:justify-center">
      <div className="bg-no-repeat pt-[500px] bg-[url('/src/images/mobile/image-graphic-design.jpg')] md:bg-[url('/src/images/desktop/image-graphic-design.jpg')] md:bg-cover bg-center md:bg-center md:w-[50%] bg-full bg-cover">
        {/* <img
          className="w-full md:hidden"
          src="/src/images/mobile/image-graphic-design.jpg"
          alt="graphic-design"
        /> */}
        <p className="text-4xl text-Dark-desaturated-cyan font-bold font-fraunces text-center w-full">
          Graphic Design
        </p>
        <p className="mt-10 pb-20 px-5 text-[18px] font-barlow w-full text-Dark-desaturated-cyan m-auto text-center block">
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.
        </p>
      </div>

      <div className="bg-no-repeat pt-[500px] bg-[url('/src/images/mobile/image-photography.jpg')] md:bg-[url('/src/images/desktop/image-photography.jpg')] md:bg-cover bg-center md:bg-center md:w-[50%] bg-cover">
        {/* <img
          className="hidden"
          src="/src/images/desktop/image-photography.jpg"
          alt="graphic-design"
        /> */}
        <p className="text-4xl text-Dark-desaturated-cyan font-bold font-fraunces text-center w-full">
          Photography
        </p>
        <p className="mt-10 pb-20 px-5 text-[18px] font-barlow w-full text-Dark-desaturated-cyan m-auto text-center block">
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </div>
    </div>
  );
};

export default Section2;
