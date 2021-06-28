import React from "react";
import IntroBanner from "../../components/IntroBanner";
export default function Homepage() {
  return (
    <React.Fragment>
      <section class="udemy-carousel container-fluid">
        <div class="udemy-carousel__content col-12 col-md-5">
          <h2>Learn on your schedule</h2>
          <p>
            Study any topic, anytime. Choose from thousands of expert-led
            courses now.
          </p>
          <form class="udemy-carousel__form ">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="What do you want to learn"
              />
              <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2">
                  <i class="fa fa-search"></i>
                </span>
              </div>
            </div>
          </form>
        </div>
      </section>
      <IntroBanner />
    </React.Fragment>
  );
}
