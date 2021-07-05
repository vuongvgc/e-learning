function ServiceItem(props) {
  return (
    <div class="row">
      <div class="service__icon col-2">
        <img src={props.logo} alt={props.name} />
      </div>
      <div class="service__text col-10">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
export default ServiceItem;
