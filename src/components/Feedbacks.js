import SlideFeedbacks from "./SlideFeedbacks";
function Feedbacks() {
  return (
    <section class="feedback">
      <div class="container-xl">
        <h2>What our students have to say</h2>
        <div class="feedback__carousel">
          <SlideFeedbacks nameSlide="multiple-feedback" />
        </div>
      </div>
    </section>
  );
}

export default Feedbacks;
