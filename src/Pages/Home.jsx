import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import HeroSection from "../Home/HeroSection";
import UpcomingEvents from "../Home/UpcomingEvents";
import HowItWorks from "../Home/HowItWorks";
import Testimonials from "../Home/Testimonials";
import CallToAction from "./CallToAction";

const Home = () => {
  return (
    <>
      <div>
        <HeroSection />
        <UpcomingEvents></UpcomingEvents>
        <HowItWorks></HowItWorks>
        <Testimonials></Testimonials>
        <CallToAction></CallToAction>
      </div>
    </>
  );
};

export default Home;