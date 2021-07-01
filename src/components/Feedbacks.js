function FeedBacks() {
  return (
    <section class="feedback">
      <div class="container-xl">
        <h2>What our students have to say</h2>
        <div class="feedback__carousel owl-carousel owl-theme row justify-content-around">
          <div class="item feedback_item col-4">
            <div class="row feedback__infor">
              <img class="col-4" src="./img/fb2.jpg" alt="fb2" />
              <p class="col-8">Victor</p>
            </div>
            <p class="feedback__text">
              I work in project management and joined Udemy because I get great
              courses for less. The instructors are fantastic, interesting, and
              helpful. I plan to use Udemy for a long time!
            </p>
          </div>
          <div class="item feedback_item col-4">
            <div class="row feedback__infor">
              <img class="col-4" src="./img/fb4.jpg" alt="fb2" />
              <p class="col-8">Anna</p>
            </div>
            <p class="feedback__text">
              Optimism is the faith that leads to achievement. Nothing can be
              done without hope and confidence
            </p>
          </div>
          <div class="item feedback_item col-4">
            <div class="row feedback__infor">
              <img class="col-4" src="./img/fb1.jpg" alt="fb2" />
              <p class="col-8">Joanne Craig</p>
            </div>
            <p class="feedback__text">
              Thank you Udemy! You've renewed my passion for learning and my
              dream of becoming a web developer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeedBacks;
