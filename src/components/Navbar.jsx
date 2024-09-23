import logo from '../assets/Images/logo.png'

function Navbar(){
    return (
      <>
        <header className="p-3 text-bg-dark">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a
                href="/"
                className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
              >
                <img src={logo} className="img-fluid" alt="..." height="45px" width="45px" />
              </a>

              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 ms-md-5 justify-content-center mb-md-0">
                <li>
                  <a href="#" className="nav-link px-2 text-secondary">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-2 text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-2 text-white">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-2 text-white">
                    Reviews
                  </a>
                </li>
              </ul>

              <form
                className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
                role="search"
              >
                <input
                  type="search"
                  className="form-control form-control-dark text-bg-light"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </form>

              <div className="text-end">
                <button type="button" className="btn btn-outline-light me-2">
                  Login
                </button>
                <button type="button" className="btn btn-warning">
                  Sign-up
                </button>
              </div>
            </div>
          </div>
        </header>
      </>
    );

}

export default Navbar