const Testimonials = () => {
  return (
    <div>
      <p className="uppercase text-center mb-12 mt-20 text-[18px] font-bold tracking-[3px] text-Grayish-blue font-fraunces">
        client testimonials
      </p>

      <div className="lg:flex lg:justify-evenly items-center">
        <div className="lg:w-[30%]">
          <img
            className="rounded-full w-20 m-auto mt-10"
            src="/src/images/image-emily.jpg"
            alt="emily"
          />

          <p className="font-[18px] text-Very-dark-grayish-blue font-bold w-full p-5 text-center">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>

          <p className="text-2xl font-bold font-fraunces text-center mt-5 text-Very-dark-desaturated-blue">
            Emily R.
          </p>

          <p className="font-barlow text-Grayish-blue mt-2 text-center">
            Marketing Director
          </p>
        </div>

        <div className="lg:w-[30%]">
          <img
            className="rounded-full w-20 m-auto mt-10"
            src="/src/images/image-thomas.jpg"
            alt="thomas"
          />

          <p className="font-[18px] text-Very-dark-grayish-blue font-bold w-full p-5 text-center">
            Sunnyside’s enthusiasm coupled with their keen interest in our
            brand’s success made it a satisfying and enjoyable experience.
          </p>

          <p className="text-2xl font-bold font-fraunces text-center mt-5 text-Very-dark-desaturated-blue">
            Thomas S.
          </p>

          <p className="font-barlow text-Grayish-blue mt-2 text-center">
            Chief Operating Officer
          </p>
        </div>

        <div className="lg:w-[30%]">
          <img
            className="rounded-full w-20 m-auto mt-10"
            src="/src/images/image-jennie.jpg"
            alt="jennie"
          />

          <p className="font-[18px] text-Very-dark-grayish-blue font-bold w-full p-5 text-center">
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>

          <p className="text-2xl font-bold font-fraunces text-center mt-5 text-Very-dark-desaturated-blue">
            Jennie F.
          </p>

          <p className="font-barlow text-Grayish-blue mt-2 text-center">
            Bussiness Owner
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
