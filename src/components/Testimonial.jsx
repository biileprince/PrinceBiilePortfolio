import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { testimonialsData } from "../data/testimonialsData";
import Title from "./Title";
import { animations } from "../utils/animations";

const Testimonial = () => {
  const [dotActive, setDotActive] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
    beforeChange: (prev, next) => setDotActive(next),
    appendDots: (dots) => (
      <div className="pb-8 pt-4">
        <ul className="flex gap-2 justify-center">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
          i === dotActive ? "bg-blue-500 scale-125" : "bg-slate-500"
        }`}
      />
    ),
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b border-slate-700/50 bg-slate-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Title
          title="Client Testimonials"
          des="What People Say"
          align="center"
        />

        <motion.div
          initial={animations.fadeIn.initial}
          whileInView={animations.fadeIn.animate}
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          <div className="slider-container">
            <Slider {...settings}>
              {testimonialsData.map((testimonial, index) => (
                <div key={index} className="px-2 focus:outline-none">
                  <TestimonialCard testimonial={testimonial} />
                </div>
              ))}
            </Slider>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ testimonial }) => (
  <motion.div
    {...animations.scrollSlideUp}
    className="bg-slate-800/70 backdrop-blur-lg rounded-xl border border-slate-700/50 p-6 mx-2 h-full"
  >
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Client Image Section */}
      <div className="flex-shrink-0 flex flex-col items-center text-center lg:text-left">
        <motion.img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-24 h-24 rounded-full object-cover mb-4 border-2 border-blue-400/30"
          whileHover={animations.hoverScale}
        />
        <div className="space-y-1">
          <h3 className="text-lg font-semibold text-slate-200">
            {testimonial.name}
          </h3>
          <p className="text-sm text-slate-400">{testimonial.role}</p>
          <div className="flex justify-center lg:justify-start gap-1 text-blue-400">
            {[...Array(5)].map((_, i) => (
              <RiStarFill key={i} className="text-md" />
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="relative">
          <div className="text-5xl absolute -top-4 -left-2 text-blue-400/10">
            &ldquo;
          </div>
          <p className="text-slate-400 leading-relaxed pl-6">
            {testimonial.quote}
          </p>
        </div>
        <div className="mt-6 pt-4 border-t border-slate-700/50">
          <p className="text-sm text-slate-300">
            <span className="font-medium">{testimonial.project.title}</span>
            <span className="mx-2 text-slate-500">•</span>
            <span className="text-slate-400">
              {testimonial.project.platform}
            </span>
          </p>
        </div>
      </div>
    </div>
  </motion.div>
);

// Custom Arrows
const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden lg:block absolute top-1/2 -right-14 transform -translate-y-1/2 w-10 h-10 bg-slate-800/50 hover:bg-slate-700/50 rounded-full border border-slate-700/50 flex items-center justify-center cursor-pointer transition-colors focus:outline-none"
    aria-label="Next testimonial"
  >
    <HiArrowRight className="text-xl text-slate-400 hover:text-blue-400 transition-colors" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden lg:block absolute top-1/2 -left-14 transform -translate-y-1/2 w-10 h-10 bg-slate-800/50 hover:bg-slate-700/50 rounded-full border border-slate-700/50 flex items-center justify-center cursor-pointer transition-colors focus:outline-none"
    aria-label="Previous testimonial"
  >
    <HiArrowLeft className="text-xl text-slate-400 hover:text-blue-400 transition-colors" />
  </button>
);

export default Testimonial;
