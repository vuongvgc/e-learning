import Header from "../Header";
import Footer from "../Footer";
export default function MainLayout(props) {
  return (
    <div>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
}
