import CourseItem from "./CourseItem";
export default function CoursesList() {
  return (
    <section class="courses container-md">
      <div class="row">
        <div class="courses__intro col-0 col-sm-0 col-md-3 col-lg-3  col-xl-5">
          <div class="courses__text col-10">
            <h3>The world’s largest selection of courses</h3>
            <p>
              Choose from over 100,000 online video courses with new additions
              published every month
            </p>
          </div>
        </div>
        <div class="p-sm-5 col-12 col-sm-12 col-md-9 col-lg-9 col-xl-7">
          <ul
            class="nav nav-pills mb-3 courses__link "
            id="pills-tab"
            role="tablist"
          >
            <li class="nav-item" role="presentation">
              <a
                class="nav-link active"
                id="pills-business-tab"
                data-toggle="pill"
                href="#pills-business"
                role="tab"
              >
                Business
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                id="pills-design-tab"
                data-toggle="pill"
                href="#pills-design"
                role="tab"
              >
                Design
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                id="pills-photography-tab"
                data-toggle="pill"
                href="#pills-photography"
                role="tab"
              >
                Photography
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                id="pills-developer-tab"
                data-toggle="pill"
                href="#pills-developer"
                role="tab"
              >
                Developer
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                id="pills-marketing-tab"
                data-toggle="pill"
                href="#pills-marketing"
                role="tab"
              >
                Marketing
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                id="pills-it-tab"
                data-toggle="pill"
                href="#pills-it"
                role="tab"
              >
                IT &<br></br> Software
              </a>
            </li>
            <li class="nav-item" role="presentation">
              <a
                class="nav-link"
                id="pills-personal-tab"
                data-toggle="pill"
                href="#pills-personal"
                role="tab"
              >
                Personal &<br></br>Development
              </a>
            </li>
          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="pills-business"
              role="tabpanel"
            >
              <div class="row">
                <div class="col-4">
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
                <div class="col-4">
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
                <div class="col-4">
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
              </div>
            </div>
            <div class="tab-pane fade" id="pills-design" role="tabpanel">
              <div class="row">
                <div class="col-4">
                  <CourseItem
                    img="./img/kh4.jpg"
                    name="The Complete Foundation Stock Trading Course"
                    summary="Lorem, ipsum dolor"
                    star={4.5}
                    rating="4.9"
                    numMember="17,931"
                    price="134.99"
                    priceDiscount="15.99"
                  />
                </div>
                <div class="col-4">
                  <CourseItem
                    img="./img/kh5.jpg"
                    name="The Complete Foundation Stock Trading Course"
                    summary="Lorem, ipsum dolor"
                    star={3}
                    rating="4.5"
                    numMember="7,931"
                    price="199.99"
                    priceDiscount="19.99"
                  />
                </div>
                <div class="col-4">
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
            <div class="tab-pane fade" id="pills-photography" role="tabpanel">
              <div class="row">
                <div class="col-4">
                  <CourseItem
                    img="./img/kh7.jpg"
                    name="The Complete Foundation Stock Trading Course"
                    summary="Lorem, ipsum dolor"
                    star={4.5}
                    rating="4.9"
                    numMember="17,931"
                    price="134.99"
                    priceDiscount="15.99"
                  />
                </div>
                <div class="col-4">
                  <CourseItem
                    img="./img/kh8.jpg"
                    name="The Complete Foundation Stock Trading Course"
                    summary="Lorem, ipsum dolor"
                    star={3}
                    rating="4.5"
                    numMember="7,931"
                    price="199.99"
                    priceDiscount="19.99"
                  />
                </div>
                <div class="col-4">
                  <CourseItem
                    img="./img/kh9.jpg"
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
            <div class="tab-pane fade" id="pills-developer" role="tabpanel">
              <div class="row">
                <div class="col-4">
                  <CourseItem
                    img="./img/kh10.jpg"
                    name="The Complete Foundation Stock Trading Course"
                    summary="Lorem, ipsum dolor"
                    star={4.5}
                    rating="4.9"
                    numMember="17,931"
                    price="134.99"
                    priceDiscount="15.99"
                  />
                </div>
                <div class="col-4">
                  <CourseItem
                    img="./img/kh11.jpg"
                    name="The Complete Foundation Stock Trading Course"
                    summary="Lorem, ipsum dolor"
                    star={3}
                    rating="4.5"
                    numMember="7,931"
                    price="199.99"
                    priceDiscount="19.99"
                  />
                </div>
                <div class="col-4">
                  <CourseItem
                    img="./img/kh12.jpg"
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
            <div class="tab-pane fade" id="pills-marketing" role="tabpanel">
              <div class="row">
                <div class="col-4">
                  <CourseItem
                    img="./img/kh13.jpg"
                    name="The Complete Foundation Stock Trading Course"
                    summary="Lorem, ipsum dolor"
                    star={4.5}
                    rating="4.9"
                    numMember="17,931"
                    price="134.99"
                    priceDiscount="15.99"
                  />
                </div>
                <div class="col-4">
                  <CourseItem
                    img="./img/kh14.jpg"
                    name="The Complete Foundation Stock Trading Course"
                    summary="Lorem, ipsum dolor"
                    star={3}
                    rating="4.5"
                    numMember="7,931"
                    price="199.99"
                    priceDiscount="19.99"
                  />
                </div>
                <div class="col-4">
                  <CourseItem
                    img="./img/kh1.jpg"
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
            <div class="tab-pane fade show" id="pills-it" role="tabpanel">
              <div class="row">
                <div class="col-4">
                  <CourseItem
                    img="./img/kh3.jpg"
                    name="The Complete Foundation Stock Trading Course"
                    summary="Lorem, ipsum dolor"
                    star={4.5}
                    rating="4.9"
                    numMember="17,931"
                    price="134.99"
                    priceDiscount="15.99"
                  />
                </div>
                <div class="col-4">
                  <CourseItem
                    img="./img/kh5.jpg"
                    name="The Complete Foundation Stock Trading Course"
                    summary="Lorem, ipsum dolor"
                    star={3}
                    rating="4.5"
                    numMember="7,931"
                    price="199.99"
                    priceDiscount="19.99"
                  />
                </div>
                <div class="col-4">
                  <CourseItem
                    img="./img/kh7.jpg"
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
            <div class="tab-pane fade show" id="pills-personal" role="tabpanel">
              <div class="row">
                <div class="col-4">
                  <CourseItem
                    img="./img/kh9.jpg"
                    name="The Complete Foundation Stock Trading Course"
                    summary="Lorem, ipsum dolor"
                    star={4.5}
                    rating="4.9"
                    numMember="17,931"
                    price="134.99"
                    priceDiscount="15.99"
                  />
                </div>
                <div class="col-4">
                  <CourseItem
                    img="./img/kh11.jpg"
                    name="The Complete Foundation Stock Trading Course"
                    summary="Lorem, ipsum dolor"
                    star={3}
                    rating="4.5"
                    numMember="7,931"
                    price="199.99"
                    priceDiscount="19.99"
                  />
                </div>
                <div class="col-4">
                  <CourseItem
                    img="./img/kh13.jpg"
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
          </div>
        </div>
      </div>
    </section>
  );
}
