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
              <div class="courses__carousel owl-carousel owl-theme">
                <div class="item courses__item">
                  <div class="courses__box">
                    <img src="./img/kh1.jpg" class="img-fluid" alt="course 1" />
                    <div class="courses__detail">
                      <h4>The Complete Foundation Stock Trading Course</h4>
                      <p>Lorem, ipsum dolor.</p>
                      <div class="icon__star">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-half"></i>
                        <span class="courses__rate">4.5</span>
                        <span class="courses__member">(17,931)</span>
                      </div>
                    </div>
                    <div class="courses__price">
                      <del>$134.99</del>
                      <b> $15.99</b>
                    </div>
                  </div>
                </div>
                <div class="item courses__item">
                  <div class="courses__box">
                    <img src="./img/kh2.jpg" class="img-fluid" alt="course 1" />
                    <div class="courses__detail">
                      <h4>The Complete Foundation Stock Trading Course</h4>
                      <p>Lorem, ipsum dolor.</p>
                      <div class="icon__star">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-half"></i>
                        <span class="courses__rate">4.5</span>
                        <span class="courses__member">(17,931)</span>
                      </div>
                    </div>
                    <div class="courses__price">
                      <del>$134.99</del>
                      <b> $15.99</b>
                    </div>
                  </div>
                </div>
                <div class="item courses__item">
                  <div class="courses__box">
                    <img src="./img/kh3.jpg" class="img-fluid" alt="course 1" />
                    <div class="courses__detail">
                      <h4>The Complete Foundation Stock Trading Course</h4>
                      <p>Lorem, ipsum dolor.</p>
                      <div class="icon__star">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-half"></i>
                        <span class="courses__rate">4.5</span>
                        <span class="courses__member">(17,931)</span>
                      </div>
                    </div>
                    <div class="courses__price">
                      <del>$134.99</del>
                      <b> $15.99</b>
                    </div>
                  </div>
                </div>
                <div class="item courses__item">
                  <div class="courses__box">
                    <img src="./img/kh1.jpg" class="img-fluid" alt="course 1" />
                    <div class="courses__detail">
                      <h4>The Complete Foundation Stock Trading Course</h4>
                      <p>Lorem, ipsum dolor.</p>
                      <div class="icon__star">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-half"></i>
                        <span class="courses__rate">4.5</span>
                        <span class="courses__member">(17,931)</span>
                      </div>
                    </div>
                    <div class="courses__price">
                      <del>$134.99</del>
                      <b> $15.99</b>
                    </div>
                  </div>
                </div>
                <div class="item courses__item">
                  <div class="courses__box">
                    <img src="./img/kh1.jpg" class="img-fluid" alt="course 1" />
                    <div class="courses__detail">
                      <h4>The Complete Foundation Stock Trading Course</h4>
                      <p>Lorem, ipsum dolor.</p>
                      <div class="icon__star">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star-half"></i>
                        <span class="courses__rate">4.5</span>
                        <span class="courses__member">(17,931)</span>
                      </div>
                    </div>
                    <div class="courses__price">
                      <del>$134.99</del>
                      <b> $15.99</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="pills-design" role="tabpanel">
              <div class="row">
                <div class="col-4">
                  <div class="courses__item">
                    <div class="courses__box">
                      <img
                        src="./img/kh1.jpg"
                        class="img-fluid"
                        alt="course 1"
                      />
                      <div class="courses__detail">
                        <h4>The Complete Foundation Stock Trading Course</h4>
                        <p>Lorem, ipsum dolor.</p>
                        <div class="icon__star">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star-half"></i>
                          <span class="courses__rate">4.5</span>
                          <span class="courses__member">(17,931)</span>
                        </div>
                      </div>
                      <div class="courses__price">
                        <del>$134.99</del>
                        <b> $15.99</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="courses__item">
                    <div class="courses__box">
                      <img
                        src="./img/kh5.jpg"
                        class="img-fluid"
                        alt="course 1"
                      />
                      <div class="courses__detail">
                        <h4>The Complete Foundation Stock Trading Course</h4>
                        <p>Lorem, ipsum dolor.</p>
                        <div class="icon__star">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star-half"></i>
                          <span class="courses__rate">4.5</span>
                          <span class="courses__member">(17,931)</span>
                        </div>
                      </div>
                      <div class="courses__price">
                        <del>$134.99</del>
                        <b> $15.99</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="courses__item">
                    <div class="courses__box">
                      <img
                        src="./img/kh6.jpg"
                        class="img-fluid"
                        alt="course 1"
                      />
                      <div class="courses__detail">
                        <h4>The Complete Foundation Stock Trading Course</h4>
                        <p>Lorem, ipsum dolor.</p>
                        <div class="icon__star">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star-half"></i>
                          <span class="courses__rate">4.5</span>
                          <span class="courses__member">(17,931)</span>
                        </div>
                      </div>
                      <div class="courses__price">
                        <del>$134.99</del>
                        <b> $15.99</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="pills-photography" role="tabpanel">
              <div class="row">
                <div class="col-4">
                  <div class="courses__item">
                    <div class="courses__box">
                      <img
                        src="./img/kh10.jpg"
                        class="img-fluid"
                        alt="course 1"
                      />
                      <div class="courses__detail">
                        <h4>The Complete Foundation Stock Trading Course</h4>
                        <p>Lorem, ipsum dolor.</p>
                        <div class="icon__star">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star-half"></i>
                          <span class="courses__rate">4.5</span>
                          <span class="courses__member">(17,931)</span>
                        </div>
                      </div>
                      <div class="courses__price">
                        <del>$134.99</del>
                        <b> $15.99</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="courses__item">
                    <div class="courses__box">
                      <img
                        src="./img/kh8.jpg"
                        class="img-fluid"
                        alt="course 1"
                      />
                      <div class="courses__detail">
                        <h4>The Complete Foundation Stock Trading Course</h4>
                        <p>Lorem, ipsum dolor.</p>
                        <div class="icon__star">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star-half"></i>
                          <span class="courses__rate">4.5</span>
                          <span class="courses__member">(17,931)</span>
                        </div>
                      </div>
                      <div class="courses__price">
                        <del>$134.99</del>
                        <b> $15.99</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="courses__item">
                    <div class="courses__box">
                      <img
                        src="./img/kh9.jpg"
                        class="img-fluid"
                        alt="course 1"
                      />
                      <div class="courses__detail">
                        <h4>The Complete Foundation Stock Trading Course</h4>
                        <p>Lorem, ipsum dolor.</p>
                        <div class="icon__star">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star-half"></i>
                          <span class="courses__rate">4.5</span>
                          <span class="courses__member">(17,931)</span>
                        </div>
                      </div>
                      <div class="courses__price">
                        <del>$134.99</del>
                        <b> $15.99</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="pills-developer" role="tabpanel">
              <div class="row">
                <div class="col-4">
                  <div class="courses__item">
                    <div class="courses__box">
                      <img
                        src="./img/kh10.jpg"
                        class="img-fluid"
                        alt="course 1"
                      />
                      <div class="courses__detail">
                        <h4>The Complete Foundation Stock Trading Course</h4>
                        <p>Lorem, ipsum dolor.</p>
                        <div class="icon__star">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star-half"></i>
                          <span class="courses__rate">4.5</span>
                          <span class="courses__member">(17,931)</span>
                        </div>
                      </div>
                      <div class="courses__price">
                        <del>$134.99</del>
                        <b> $15.99</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="courses__item">
                    <div class="courses__box">
                      <img
                        src="./img/kh8.jpg"
                        class="img-fluid"
                        alt="course 1"
                      />
                      <div class="courses__detail">
                        <h4>The Complete Foundation Stock Trading Course</h4>
                        <p>Lorem, ipsum dolor.</p>
                        <div class="icon__star">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star-half"></i>
                          <span class="courses__rate">4.5</span>
                          <span class="courses__member">(17,931)</span>
                        </div>
                      </div>
                      <div class="courses__price">
                        <del>$134.99</del>
                        <b> $15.99</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="courses__item">
                    <div class="courses__box">
                      <img
                        src="./img/kh9.jpg"
                        class="img-fluid"
                        alt="course 1"
                      />
                      <div class="courses__detail">
                        <h4>The Complete Foundation Stock Trading Course</h4>
                        <p>Lorem, ipsum dolor.</p>
                        <div class="icon__star">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star-half"></i>
                          <span class="courses__rate">4.5</span>
                          <span class="courses__member">(17,931)</span>
                        </div>
                      </div>
                      <div class="courses__price">
                        <del>$134.99</del>
                        <b> $15.99</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade" id="pills-marketing" role="tabpanel">
              <div class="row">
                <div class="col-4">
                  <div class="courses__item">
                    <div class="courses__box">
                      <img
                        src="./img/kh1.jpg"
                        class="img-fluid"
                        alt="course 1"
                      />
                      <div class="courses__detail">
                        <h4>The Complete Foundation Stock Trading Course</h4>
                        <p>Lorem, ipsum dolor.</p>
                        <div class="icon__star">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star-half"></i>
                          <span class="courses__rate">4.5</span>
                          <span class="courses__member">(17,931)</span>
                        </div>
                      </div>
                      <div class="courses__price">
                        <del>$134.99</del>
                        <b> $15.99</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="courses__item">
                    <div class="courses__box">
                      <img
                        src="./img/kh5.jpg"
                        class="img-fluid"
                        alt="course 1"
                      />
                      <div class="courses__detail">
                        <h4>The Complete Foundation Stock Trading Course</h4>
                        <p>Lorem, ipsum dolor.</p>
                        <div class="icon__star">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star-half"></i>
                          <span class="courses__rate">4.5</span>
                          <span class="courses__member">(17,931)</span>
                        </div>
                      </div>
                      <div class="courses__price">
                        <del>$134.99</del>
                        <b> $15.99</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="courses__item">
                    <div class="courses__box">
                      <img
                        src="./img/kh6.jpg"
                        class="img-fluid"
                        alt="course 1"
                      />
                      <div class="courses__detail">
                        <h4>The Complete Foundation Stock Trading Course</h4>
                        <p>Lorem, ipsum dolor.</p>
                        <div class="icon__star">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star-half"></i>
                          <span class="courses__rate">4.5</span>
                          <span class="courses__member">(17,931)</span>
                        </div>
                      </div>
                      <div class="courses__price">
                        <del>$134.99</del>
                        <b> $15.99</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade show" id="pills-it" role="tabpanel">
              <div class="row">
                <div class="col-4">
                  <div class="courses__item">
                    <div class="courses__box">
                      <img
                        src="./img/kh1.jpg"
                        class="img-fluid"
                        alt="course 1"
                      />
                      <div class="courses__detail">
                        <h4>The Complete Foundation Stock Trading Course</h4>
                        <p>Lorem, ipsum dolor.</p>
                        <div class="icon__star">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star-half"></i>
                          <span class="courses__rate">4.5</span>
                          <span class="courses__member">(17,931)</span>
                        </div>
                      </div>
                      <div class="courses__price">
                        <del>$134.99</del>
                        <b> $15.99</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="courses__item">
                    <div class="courses__box">
                      <img
                        src="./img/kh2.jpg"
                        class="img-fluid"
                        alt="course 1"
                      />
                      <div class="courses__detail">
                        <h4>The Complete Foundation Stock Trading Course</h4>
                        <p>Lorem, ipsum dolor.</p>
                        <div class="icon__star">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star-half"></i>
                          <span class="courses__rate">4.5</span>
                          <span class="courses__member">(17,931)</span>
                        </div>
                      </div>
                      <div class="courses__price">
                        <del>$134.99</del>
                        <b> $15.99</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="courses__item">
                    <div class="courses__box">
                      <img
                        src="./img/kh3.jpg"
                        class="img-fluid"
                        alt="course 1"
                      />
                      <div class="courses__detail">
                        <h4>The Complete Foundation Stock Trading Course</h4>
                        <p>Lorem, ipsum dolor.</p>
                        <div class="icon__star">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star-half"></i>
                          <span class="courses__rate">4.5</span>
                          <span class="courses__member">(17,931)</span>
                        </div>
                      </div>
                      <div class="courses__price">
                        <del>$134.99</del>
                        <b> $15.99</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-pane fade show" id="pills-personal" role="tabpanel">
              <div class="row">
                <div class="col-4">
                  <div class="courses__item">
                    <div class="courses__box">
                      <img
                        src="./img/kh14.jpg"
                        class="img-fluid"
                        alt="course 1"
                      />
                      <div class="courses__detail">
                        <h4>The Complete Foundation Stock Trading Course</h4>
                        <p>Lorem, ipsum dolor.</p>
                        <div class="icon__star">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star-half"></i>
                          <span class="courses__rate">4.5</span>
                          <span class="courses__member">(17,931)</span>
                        </div>
                      </div>
                      <div class="courses__price">
                        <del>$134.99</del>
                        <b> $15.99</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="courses__item">
                    <div class="courses__box">
                      <img
                        src="./img/kh13.jpg"
                        class="img-fluid"
                        alt="course 1"
                      />
                      <div class="courses__detail">
                        <h4>The Complete Foundation Stock Trading Course</h4>
                        <p>Lorem, ipsum dolor.</p>
                        <div class="icon__star">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star-half"></i>
                          <span class="courses__rate">4.5</span>
                          <span class="courses__member">(17,931)</span>
                        </div>
                      </div>
                      <div class="courses__price">
                        <del>$134.99</del>
                        <b> $15.99</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-4">
                  <div class="courses__item">
                    <div class="courses__box">
                      <img
                        src="./img/kh12.jpg"
                        class="img-fluid"
                        alt="course 1"
                      />
                      <div class="courses__detail">
                        <h4>The Complete Foundation Stock Trading Course</h4>
                        <p>Lorem, ipsum dolor.</p>
                        <div class="icon__star">
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star"></i>
                          <i class="fa fa-star-half"></i>
                          <span class="courses__rate">4.5</span>
                          <span class="courses__member">(17,931)</span>
                        </div>
                      </div>
                      <div class="courses__price">
                        <del>$134.99</del>
                        <b> $15.99</b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
