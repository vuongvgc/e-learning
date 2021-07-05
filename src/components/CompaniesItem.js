function CompaniesItem(props) {
  return (
    <div class="companies__item">
      <img src={props.img} alt={props.name} />
    </div>
  );
}
export default CompaniesItem;
