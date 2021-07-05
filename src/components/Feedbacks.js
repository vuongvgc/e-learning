import FeedbackItem from "./FeedbackItem";
function Feedbacks() {
  return (
    <section class="feedback">
      <div class="container-xl">
        <h2>What our students have to say</h2>
        <div class="feedback__carousel owl-carousel owl-theme row justify-content-around">
          <div className="col-4">
            <FeedbackItem
              img="./img/fb2.jpg"
              namePerson="Victor"
              feedback="I work in project management and joined Udemy because I get
                great courses for less. The instructors are fantastic,
                interesting, and helpful. I plan to use Udemy for a long time!"
            />
          </div>
          <div className="col-4">
            <FeedbackItem
              img="./img/fb4.jpg"
              namePerson="Anna"
              feedback=" Optimism is the faith that leads to achievement. Nothing can be
              done without hope and confidence"
            />
          </div>
          <div className="col-4">
            <FeedbackItem
              img="./img/fb1.jpg"
              namePerson="Joanne Craig"
              feedback="Thank you Udemy! You've renewed my passion for learning and my
              dream of becoming a web developer."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feedbacks;
