import React from "react";
import Services from "./Services";
import Title from "../../components/Title";

const Home = () => {
  return (
    <div className="p-5">
      <div>
        <Title text={`Hi,I'm Nish`} />
        <p className="text-text-dark text-lg my-5">
          A passionate MERN stack developer with a strong focus on creating
          robust and dynamic web applications. With extensive experience in the
          MERN stack, which includes MongoDB, Express.js, React.js, and Node.js,
          I am dedicated to delivering high-quality solutions that meet the
          unique needs of my clients.
        </p>
      </div>
      <div>
        <h4 className="text-white font-semibold text-xl my-5">My Mission:</h4>
        <p className="text-text-dark text-lg">
          My mission as a MERN stack developer is to leverage the power of
          modern web technologies to build innovative and efficient
          applications. I aim to provide value to businesses and individuals by
          creating intuitive and user-friendly web experiences that enhance
          productivity and drive growth. I constantly strive to stay up-to-date
          with the latest trends and techniques in web development to offer
          cutting-edge solutions.
        </p>
      </div>
      <div>
        <h4 className="text-white font-semibold text-xl my-5">What I Do:</h4>
        <p className="text-text-dark text-lg">
          As a MERN stack developer, I specialize in developing full-stack web
          applications that encompass all stages of the development process.
          From designing the user interface to implementing robust back-end
          functionality, I take a comprehensive approach to ensure seamless
          integration and optimal performance. My expertise lies in building
          scalable and responsive applications that are tailored to meet the
          specific requirements of my clients.
        </p>
      </div>
      <div>
        <h4 className="text-white font-semibold text-xl my-5">
          Services Offered:
        </h4>
        <p className="text-text-dark text-lg">
          <ul className="list-disc pl-5 marker:text-primary">
            <li>Full-stack web application development using the MERN stack</li>
            <li>Custom web development and system integration</li>
            <li>API development and integration</li>
            <li>Database design and management</li>
            <li>Front-end development with React.js</li>
            <li>Back-end development with Node.js and Express.js</li>
            <li>User interface design and optimization</li>
            <li>Testing, debugging, and maintenance</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default Home;
