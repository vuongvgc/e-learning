import CategoriesItem from "./CategoriesItem";
function Categories() {
  return (
    <section class="categories container-md">
      <h2>Top categories</h2>
      <div class="categories__content row">
        <div class="categories__box col-sm-12 col-md-6 col-xl-3">
          <CategoriesItem icon="fab fa-node-js" name="Development" />
        </div>
        <div class="categories__box col-sm-12 col-md-6 col-xl-3">
          <CategoriesItem icon="fab fa-amazon-pay" name="Business" />
        </div>
        <div class="categories__box col-sm-12 col-md-6 col-xl-3">
          <CategoriesItem icon="fab fa-linux" name="It & software" />
        </div>
        <div class="categories__box col-sm-12 col-md-6 col-xl-3">
          <CategoriesItem icon="fa fa-edit" name="Design" />
        </div>
        <div class="categories__box col-sm-12 col-md-6 col-xl-3">
          <CategoriesItem icon="fab fa-app-store" name="Marketing" />
        </div>
        <div class="categories__box col-sm-12 col-md-6 col-xl-3">
          <CategoriesItem icon="fab fa-instagram" name="Personal Developer" />
        </div>
        <div class="categories__box col-sm-12 col-md-6 col-xl-3">
          <CategoriesItem icon="fa fa-images" name="Photography" />
        </div>
        <div class="categories__box col-sm-12 col-md-6 col-xl-3">
          <CategoriesItem icon="fab fa-itunes-note" name="Music" />
        </div>
      </div>
    </section>
  );
}
export default Categories;
