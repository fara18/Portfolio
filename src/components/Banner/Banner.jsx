import React from "react";
import Image from "../../assets/avatar.svg";
import { FaGithub, FaYoutube, FaDribbble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
export default function Banner() {
  return (
    <section className="section" id="home">
      <div className="container mx-auto">
        <div >
          <div>
						<h1>Faruk <span>Liashchenko</span></h1>
						<div className="mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]">
							<span className=" text-white mr-4">I am a</span>
							<TypeAnimation 
							sequence={[
								'Developer',
								2000,
								'Designer',
								2000,
								'Photographer',
								2000,
							]}
							speed={50}
							className="text-accent"
							wrapper="span"
							repeat={Infinity}
							/>
						</div>
						<p>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio ipsam vitae praesentium labore molestiae iste, sed ea inventore, distinctio qui possimus esse totam! Dolor debitis magnam, voluptate quis sint assumenda.
						</p>
						<div>
							<button className="btn btn-lg">Contact me</button>
							<a href="#" className="text-gradient btn-link">My Portfolio</a>
						</div>
					</div>
          <div><img src={Image} alt="" /></div>
        </div>
      </div>
    </section>
  );
}
