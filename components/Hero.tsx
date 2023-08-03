import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faStars } from "@fortawesome/pro-solid-svg-icons";

const skills = [
  'TypeScript/JavaScript',
  'ReactJS',
  'CSS/SCSS',
  'React Native',
  'Electron',
  'PostgresSQL/MySQL',
  'Ionic Framework/CapacitorJS',
  'Golang'
]

const Hero = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4 md:px-8">
        <Navbar />
        <div className="lg:flex justify-between items-center">
          <div className="max-w-xl py-8 lg:py-32">
            <h1 className="text-xl mb-4">
              Hi, I'm Adam Abbas 
            </h1>
            <h5 className="text-2xl  font-bold mb-6">
              Dedicated and self-taught web developer, honing my craft in the tech
              industry and constantly pushing the boundaries of web innovation.
            </h5>
          </div>

          <div className="max-w-md max-h-96 h-64 flex items-center relative">
            <div className="bg-green-400/20 rounded-2xl p-8 absolute hover:rotate-12 transition-all rotate-6 w-full h-full top-0 left-0"></div>
            <div
              className="from-green-700 to-green-900 bg-gradient-to-b z-10 rounded-2xl hover:-rotate-2 transition-all p-8 w-full h-full"
            >
              <h3 className="text-xl font-bold mb-2">Key Skills <FontAwesomeIcon icon={faStars}  /></h3>
              <div className="grid grid-cols-2 gap-2">
                {skills.map((skill) => (
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <p className="text-sm">{skill}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <a href="#story" className="text-white hover:text-gray-400">
            <FontAwesomeIcon icon={faChevronDown} width="20px" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
