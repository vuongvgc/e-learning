import IconItem from "./IconItem";
function Banner() {
  return (
    <section class="banner">
      <div>
        <div class="row banner__top">
          <div class="icon__item col">
            <IconItem icon="fab fa-youtube-square" />
          </div>
          <div class="icon__item col">
            <IconItem icon="fab fa-youtube-square" />
          </div>
          <div class="icon__item col">
            <IconItem icon="fab fa-youtube-square" />
          </div>
          <div class="icon__item col">
            <IconItem icon="fab fa-youtube-square" />
          </div>
          <div class="icon__item col">
            <IconItem icon="fab fa-youtube-square" />
          </div>
        </div>
        <div class="row banner__middle">
          <div class="icon__item col-2 text-center">
            <IconItem icon="fab fa-react" />
          </div>
          <div class="banner__text  text-center  col-5">
            <h3>Get personalized recommendations</h3>
            <p>Answer a few questions for your top picks</p>
            <button class="btn udemy-btn-orange">Get Started</button>
          </div>
          <div class="icon__item col-2 text-center">
            <IconItem icon="fab fa-react" />
          </div>
        </div>
        <div class="row banner__bottom">
          <div class="icon__item col">
            <IconItem icon="fab fa-airbnb" />
          </div>
          <div class="icon__item col">
            <IconItem icon="fab fa-airbnb" />
          </div>
          <div class="icon__item col">
            <IconItem icon="fab fa-airbnb" />
          </div>
          <div class="icon__item col">
            <IconItem icon="fab fa-airbnb" />
          </div>
          <div class="icon__item col">
            <IconItem icon="fab fa-airbnb" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Banner;
