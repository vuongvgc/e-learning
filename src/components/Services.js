function Services() {
  return (
    <section class="services">
      <div class="container-md">
        <div class="row services__box justify-content-around">
          <div class="service__item col-4">
            <div class="row">
              <div class="service__icon col-2">
                <img src="./img/go_own_pace.svg" alt="Go-Own Pace" />
              </div>
              <div class="service__text col-10">
                <h3>Go at your own pace</h3>
                <p>
                  Enjoy lifetime access to courses on Udemy’s website and app
                </p>
              </div>
            </div>
          </div>
          <div class="service__item col-4">
            <div class="row">
              <div class="service__icon col-2">
                <img src="./img/learn_from_experts.svg" alt="Go-Own Pace" />
              </div>
              <div class="service__text col-10">
                <h3>Learn from industry experts</h3>
                <p>Select from top instructors around the world</p>
              </div>
            </div>
          </div>
          <div class="service__item col-4">
            <div class="row">
              <div class="service__icon col-2">
                <img src="./img/video_courses.svg" alt="Go-Own Pace" />
              </div>
              <div class="service__text col-10">
                <h3>Find video courses on almost any topic</h3>
                <p>Build your library for your career and personal growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;
