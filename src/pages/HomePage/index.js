import React from "react";
import Carousel from "../../components/Carousel";
import IntroBanner from "../../components/IntroBanner";
import CoursesList from "../../components/CoursesList";
import Services from "../../components/Services";
import Students from "../../components/Students";
import Banner from "../../components/Banner";
import Categories from "../../components/Categories";
import FeedBacks from "../../components/Feedbacks";
import Companies from "../../components/Companies";
export default function Homepage() {
  return (
    <React.Fragment>
      <Carousel />
      <IntroBanner />
      <CoursesList />
      <Services />
      <Students />
      <Banner />
      <Categories />
      <FeedBacks />
      <Companies />
    </React.Fragment>
  );
}
