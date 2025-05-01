import React from "react";
import { Link } from "react-router-dom"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
            <p>The only thing we're serious about is food.</p>
          </div>
          <p className="mid">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum
            beatae nam, eius blanditiis at cumque sapiente voluptatum ab
            incidunt necessitatibus, in, reprehenderit fugit repudiandae
            voluptatem numquam nesciunt. Animi, sit incidunt, nobis veritatis
            cupiditate rem ad, ipsum autem ipsa fugiat consequatur beatae
            corporis mollitia repellat placeat expedita eveniet! Vitae,
            doloribus error.
          </p>
          <Link to={"/"}>
          Explore Menu{" "}
          <span>
            <HiOutlineArrowNarrowRight />
          </span>
          </Link>
        </div>
        <div className="banner">
            <img src="/about.png" alt="about" />
        </div>
      </div>
    </section>
  );
};

export default About;
