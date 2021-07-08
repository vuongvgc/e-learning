import PropTypes from "prop-types";
import FeedbackItem from "./FeedbackItem";
function SlideFeedbacks(props) {
  return (
    <div class={props.nameSlide}>
      <div>
        <FeedbackItem
          img="./img/fb2.jpg"
          namePerson="Victor"
          feedback="I work in project management and joined Udemy because I get
                great courses for less. The instructors are fantastic,
                interesting, and helpful. I plan to use Udemy for a long time!"
        />
      </div>
      <div>
        <FeedbackItem
          img="./img/fb4.jpg"
          namePerson="Anna"
          feedback=" Optimism is the faith that leads to achievement. Nothing can be
              done without hope and confidence"
        />
      </div>
      <div>
        <FeedbackItem
          img="./img/fb1.jpg"
          namePerson="Joanne Craig"
          feedback="Thank you Udemy! You've renewed my passion for learning and my
              dream of becoming a web developer."
        />
      </div>
      <div>
        <FeedbackItem
          img="./img/fb3.jpg"
          namePerson="Joanne Craig"
          feedback="Thank you Udemy! You've renewed my passion for learning and my
              dream of becoming a web developer."
        />
      </div>
      <div>
        <FeedbackItem
          img="./img/fb5.jpg"
          namePerson="April Austin"
          feedback="Thank you Udemy! You've renewed my passion for learning and my
              dream of becoming a web developer."
        />
      </div>
      <div>
        <FeedbackItem
          img="./img/fb6.jpg"
          namePerson="My My"
          feedback="Thank you Udemy! You've renewed my passion for learning and my
              dream of becoming a web developer."
        />
      </div>
    </div>
  );
}
export default SlideFeedbacks;

SlideFeedbacks.propTypes = {
  nameSlide: PropTypes.string,
};
