import IntroBannerItem from "./IntroBannerItem";
function IntroBanner() {
  return (
    <section className="intro">
      <div className="intro__content row justify-content-around">
        <IntroBannerItem
          icon="fab fa-codepen"
          title="100,000 online courses"
          content="Explore a variety of fresh topics"
        />
        <IntroBannerItem
          icon="fa fa-asterisk"
          title="Expert instruction"
          content="Find the right instructor for you"
        />
        <IntroBannerItem
          icon="fa fa-clock"
          title="Lifetime access"
          content="Learn on your schedule"
        />
      </div>
    </section>
  );
}
export default IntroBanner;
