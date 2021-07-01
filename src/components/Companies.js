function Companies() {
  return (
    <section class="companies container-fluid">
      <p class="companies__slogan">Trusted by companies of all sizes</p>
      <div class="row companies__partners">
        <div class="companies__box mb-5 mb-sm-4 col-6 col-sm-4 col-md-2">
          <div class="companies__item">
            <img src="./img/booking.svg" alt="booking" />
          </div>
        </div>
        <div class="companies__box mb-5 mb-sm-4 col-6 col-sm-4 col-md-2">
          <div class="companies__item">
            <img src="./img/volkswagen.svg" alt="volkswagen" />
          </div>
        </div>
        <div class="companies__box mb-5 mb-sm-4 col-6 col-sm-4 col-md-2">
          <div class="companies__item">
            <img src="./img/mercedes.svg" alt="Mercedes" />
          </div>
        </div>
        <div class="companies__box mb-5 mb-sm-4 col-6 col-sm-4 col-md-2">
          <div class="companies__item">
            <img src="./img/pinterest.svg" alt="printes" />
          </div>
        </div>
        <div class="companies__box mb-5 mb-sm-4 col-6 col-sm-4 col-md-2">
          <div class="companies__item">
            <img src="./img/adidas.svg" alt="adidass" />
          </div>
        </div>
        <div class="companies__box mb-5 mb-sm-4 col-6 col-sm-4 col-md-2">
          <div class="companies__item">
            <img src="./img/eventbrite-logo.svg" alt="eventbrite" />
          </div>
        </div>
      </div>
      <div class="row companies__teacher">
        <div class="companies__teacher-box col-12 col-md-6">
          <div class="companies__text col-8">
            <h2>Become an instructor</h2>
            <p>
              Top instructors from around the world teach millions of students
              on Udemy. We provide the tools and skills to teach what you love.
            </p>
            <button class="mb-5  mt-md-3 btn udemy-btn-orange">
              Start Teaching Today
            </button>
          </div>
        </div>
        <div class="companies__teacher-box col-12 col-md-6">
          <div class="companies__text col-8">
            <h2>Udemy for Business</h2>
            <p>
              Get unlimited access to 4,000+ of Udemy’s top courses for your
              team.
            </p>
            <button class="mb-5 mt-md-3 btn udemy-btn-orange">
              Get Udemy For Business
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Companies;
