function CompaniesText(props) {
  return (
    <div class="companies__text col-8">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button class="mb-5 mt-md-3 btn udemy-btn-orange">{props.action}</button>
    </div>
  );
}
export default CompaniesText;
