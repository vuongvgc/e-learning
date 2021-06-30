import React from "react";
import Carousel from "../../components/Carousel";
import IntroBanner from "../../components/IntroBanner";
import CoursesList from "../../components/CoursesList";
import Services from "../../components/Services";
import Students from "../../components/Students";
export default function Homepage() {
  return (
    <React.Fragment>
      <Carousel />
      <IntroBanner />
      <CoursesList />
      <Services />
      <Students />
    </React.Fragment>
  );
}
