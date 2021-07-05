import CourseItem from "./CourseItem";
function Student() {
  return (
    <section class="students">
      <div class="container-md">
        <h3 class="students__header">Students are viewing</h3>
      </div>
      <div class="container-md">
        <div class="student__carousel row justify-content-around">
          <div className="col-3">
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
          <div className="col-3">
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
          <div className="col-3">
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
          <div className="col-3">
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
      </div>
    </section>
  );
}
export default Student;
