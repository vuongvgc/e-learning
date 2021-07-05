import CompaniesItem from "./CompaniesItem";
import CompaniesText from "./CompaniesText";
function Companies() {
  return (
    <section class="companies container-fluid">
      <p class="companies__slogan">Trusted by companies of all sizes</p>
      <div class="row companies__partners">
        <div class="companies__box mb-5 mb-sm-4 col-6 col-sm-4 col-md-2">
          <CompaniesItem img="./img/booking.svg" name="booking" />
        </div>
        <div class="companies__box mb-5 mb-sm-4 col-6 col-sm-4 col-md-2">
          <CompaniesItem img="./img/volkswagen.svg" name="volkswagen" />
        </div>
        <div class="companies__box mb-5 mb-sm-4 col-6 col-sm-4 col-md-2">
          <CompaniesItem img="./img/mercedes.svg" name="Mercedes" />
        </div>
        <div class="companies__box mb-5 mb-sm-4 col-6 col-sm-4 col-md-2">
          <CompaniesItem img="./img/pinterest.svg" name="printes" />
        </div>
        <div class="companies__box mb-5 mb-sm-4 col-6 col-sm-4 col-md-2">
          <CompaniesItem img="./img/adidas.svg" name="adidas" />
        </div>
        <div class="companies__box mb-5 mb-sm-4 col-6 col-sm-4 col-md-2">
          <CompaniesItem img="./img/eventbrite-logo.svg" name="eventuate" />
        </div>
      </div>
      <div class="row companies__teacher">
        <div class="companies__teacher-box col-12 col-md-6">
          <CompaniesText
            title="Become an instructor"
            content="Top instructors from around the world teach millions of students
              on Udemy. We provide the tools and skills to teach what you love."
            action="Start Teaching Today"
          />
        </div>
        <div class="companies__teacher-box col-12 col-md-6">
          <CompaniesText
            title="Udemy for Business"
            content="Get unlimited access to 4,000+ of Udemy’s top courses for your
              team."
            action="Get Udemy For Business"
          />
        </div>
      </div>
    </section>
  );
}
export default Companies;
