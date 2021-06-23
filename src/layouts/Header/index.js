import {Link } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-md bg-light p-3">
        <div className="col-2 d-md-none">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <i className="fa fa-bars"></i>
            </span>
          </button>
        </div>
        <div className="col-8 col-md-8 col-xl-7 col-lg-9  justify-items-around">
          <div className="header__left">
            <Link className="navbar-brand" to="/">
            <img src="./img/logo-coral.svg" alt="Logo Udemy" />
            </Link>
            <span className="header__categories">
              <i className="fa fa-th"></i>Categories
            </span>
            <form className="header__form">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search for anything"
                />
                <div className="input-group-append">
                  <span className="input-group-text" id="basic-addon2">
                    <i className="fa fa-search"></i>
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-1 col-md-4 col-lg-3 col-xl-5 ">
          <div className="header__right">
            <ul className="navbar-nav justify-content-md-end mr-auto">
              <li className="nav-item nav__business">
                <Link className="nav-link" to="/">
                  Udemy for business
                </Link>
              </li>
              <li className="nav-item nav__tech">
                <Link className="nav-link" to="/">
                  Tech on Udemy
                </Link>
              </li>
              <li className="nav-item nav__cart">
                <Link className="nav-link" to="/cart">
                  <i className="fa fa-cart-arrow-down"></i>
                </Link>
              </li>
              <li className="nav-item udemy-btn-group">
                <Link to="/login">
                  <button className="udemy-btn-white btn my-2 mr-2 my-sm-0">
                    Login
                  </button>
                </Link>
              </li>
              <li className="nav-item udemy-btn-group">
               <Link to="/signin">
                <button className="udemy-btn-orange btn my-2 my-sm-0">
                    Sign up
                  </button>
               </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
