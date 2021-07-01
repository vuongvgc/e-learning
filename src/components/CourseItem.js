function CourseItem(props) {
  const { img, name, summary, star, rating, numMember, price, priceDiscount } =
    props;
  return (
    <div class="courses__item">
      <div class="courses__box">
        <img src={img} class="img-fluid" alt={name} />
        <div class="courses__detail">
          <h4>{name}</h4>
          <p>{summary}</p>
          <div class="icon__star">
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star-half"></i>
            <span class="courses__rate">{rating}</span>
            <span class="courses__member">({numMember})</span>
          </div>
        </div>
        <div class="courses__price">
          <del>${price} </del>
          <b>${priceDiscount}</b>
        </div>
      </div>
    </div>
  );
}
export default CourseItem;
