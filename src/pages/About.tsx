import Avatar from "../assets/images/avatar.png";

const About: React.FC = () => {
  return (
    <section className="h-[200vh] flex items-center text-white p-8" id="about">
      <div className="mx-[10%]">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-extralight text-2xl">About me</h2>
            <h3 className="font-black text-6xl mt-3">Hi! I'm</h3>
            <h3 className="font-black text-6xl -mt-3">Guido Mantegna</h3>
          </div>

          <img alt="GM Pic" src={Avatar} className="h-[140px]" />
        </div>
        <div className="mt-12 font-extralight text-sm leading-7 text-justify">
          <p className="">
            <span className="font-medium">Senior Frontend Developer</span> with
            a thorough understanding of
            <span className="font-medium"> React</span> and its core principles,
            experienced in its most popular workflows, design patterns and
            libraries. Proficiency in developing
            <span className="font-medium"> end-to-end</span> applications using
            the <span className="font-medium">MERN</span> stack.
          </p>
          <p className="mt-4">
            Driven by a passion for{" "}
            <span className="font-medium">
              building intuitive and high-quality applications
            </span>
            , I prioritize{" "}
            <span className="font-medium">
              clean code practices and attention to UX/UI details
            </span>
            . Strong organizational skills, efficiently managing tasks and
            collaborating effectively with cross-functional teams thanks to
            cultivated interpersonal and communication abilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
