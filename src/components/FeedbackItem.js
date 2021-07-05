function FeedbackItem(props) {
  return (
    <div class="item feedback_item">
      <div class="row feedback__infor">
        <img class="col-4" src={props.img} alt={props.namePerson} />
        <p class="col-8">{props.namePerson}</p>
      </div>
      <p class="feedback__text">{props.feedback}</p>
    </div>
  );
}
export default FeedbackItem;
