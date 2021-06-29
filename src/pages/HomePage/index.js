import React from "react";
import Carousel from "../../components/Carousel";
import IntroBanner from "../../components/IntroBanner";
import CoursesList from "../../components/CoursesList";
export default function Homepage() {
  return (
    <React.Fragment>
      <Carousel />
      <IntroBanner />
      <CoursesList />
    </React.Fragment>
  );
}
