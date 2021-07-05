import ServiceItem from "./ServiceItem";
function Services() {
  return (
    <section class="services">
      <div class="container-md">
        <div class="row services__box justify-content-around">
          <div class="service__item col-4">
            <ServiceItem
              logo="./img/go_own_pace.svg"
              name="Go at your own pace"
              description="Enjoy lifetime access to courses on Udemy’s website and app"
            />
          </div>
          <div class="service__item col-4">
            <ServiceItem
              logo="./img/learn_from_experts.svg"
              name="Learn from industry experts"
              description="Select from top instructors around the world"
            />
          </div>
          <div class="service__item col-4">
            <ServiceItem
              logo="./img/video_courses.svg"
              name="Find video courses on almost any topic"
              description="Build your library for your career and personal growth"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;
