import CourseItem from "./CourseItem";
import PropTypes from "prop-types";
function SlideCourses(props) {
  return (
    <div class={props.nameSlide}>
      <div>
        <CourseItem
          img="./img/kh1.jpg"
          name="The Complete Foundation Stock Trading Course"
          summary="Lorem, ipsum dolor"
          star={4.5}
          rating="4.9"
          numMember="17,931"
          price="134.99"
          priceDiscount="15.99"
        />
      </div>
      <div>
        <CourseItem
          img="./img/kh2.jpg"
          name="The Complete Foundation Stock Trading Course"
          summary="Lorem, ipsum dolor"
          star={3}
          rating="4.5"
          numMember="7,931"
          price="199.99"
          priceDiscount="19.99"
        />
      </div>
      <div>
        <CourseItem
          img="./img/kh3.jpg"
          name="The Complete Foundation Stock Trading Course"
          summary="Lorem, ipsum dolor"
          star={3}
          rating="4.0"
          numMember="57,931"
          price="200.00"
          priceDiscount="9.99"
        />
      </div>
      <div>
        <CourseItem
          img="./img/kh4.jpg"
          name="The Complete Foundation Stock Trading Course"
          summary="Lorem, ipsum dolor"
          star={3}
          rating="4.0"
          numMember="57,931"
          price="200.00"
          priceDiscount="9.99"
        />
      </div>
      <div>
        <CourseItem
          img="./img/kh5.jpg"
          name="The Complete Foundation Stock Trading Course"
          summary="Lorem, ipsum dolor"
          star={3}
          rating="4.0"
          numMember="57,931"
          price="200.00"
          priceDiscount="9.99"
        />
      </div>
      <div>
        <CourseItem
          img="./img/kh6.jpg"
          name="The Complete Foundation Stock Trading Course"
          summary="Lorem, ipsum dolor"
          star={3}
          rating="4.0"
          numMember="57,931"
          price="200.00"
          priceDiscount="9.99"
        />
      </div>
    </div>
  );
}
export default SlideCourses;

SlideCourses.propTypes = {
  nameSlide: PropTypes.string,
};
