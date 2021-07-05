function CategoriesItem(props) {
  return (
    <div class="categories__item row">
      <i class={props.icon}></i>
      <p>{props.name}</p>
    </div>
  );
}
export default CategoriesItem;
