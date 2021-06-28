import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="container-fluid">
      <div className="footer__nav row">
        <div className="footer__nav-item col-3">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active__nav">
              <Link className="nav-link" to="/">
                Udemy for Business
              </Link>
            </li>
            <li className="nav-item active__nav">
              <Link className="nav-link" to="/">
                Teach on Udemy
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Udemy app
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                About us
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__nav-item col-3">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Contact us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Careers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Help and Support
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__nav-item col-3">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Affiliate
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Sitemap
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Featured courses
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer__nav-item col-3 footer__language">
          <div className="btn-group dropup">
            <button
              type="button"
              className="btn dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fa fa-globe-africa"></i>
              English
            </button>
            <div className="dropdown-menu">
              <button type="button" className="btn">
                Vietnam
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__copyright row">
        <div className="footer__img  col-6 col-md-4">
          <img src="./img/logo-coral.svg" alt="Udemy" />
          <span className="copyright">Copyright &copy; 2020 Udemy, Inc.</span>
        </div>
        <div className="col-6 col-md-4 footer__policy">
          <ul className="row">
            <li className="nav-item active__nav">
              <Link className="nav-link" to="/">
                Terms
              </Link>
            </li>
            <li className="nav-item active__nav">
              <Link className="nav-link" to="/">
                Privacy
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Policy and Cookie Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
