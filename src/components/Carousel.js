import SearchForm from "./SearchForm";
export default function Carousel() {
  return (
    <section className="udemy-carousel container-fluid">
      <div className="udemy-carousel__content col-12 col-md-5">
        <h2>Learn on your schedule</h2>
        <p>
          Study any topic, anytime. Choose from thousands of expert-led courses
          now.
        </p>
        <form className="udemy-carousel__form ">
          <SearchForm placeholder="What do you want to learn" />
        </form>
      </div>
    </section>
  );
}
