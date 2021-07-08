import SlideCourses from "./SlideCourses";
function Student() {
  return (
    <section class="students">
      <div class="container-md">
        <h3 class="students__header">Students are viewing</h3>
      </div>
      <div class="container-md">
        <div class="student__carousel">
          <SlideCourses nameSlide="multiple-students" />
        </div>
      </div>
    </section>
  );
}
export default Student;
