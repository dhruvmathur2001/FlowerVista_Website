import logo from '../assets/Images/logo.png'

function Navbar(){
    return (
      <>
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 px-5 bg-col">
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="/"
              className="d-inline-flex link-body-emphasis text-decoration-none"
            >
              <img
                src={logo}
                className="img-fluid"
                alt="..."
                height="45px"
                width="45px"
              />
              <span className=" ms-2 brandtext text-light">FlowerVista</span>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link nav-size px-2 text-light link-hover">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link nav-size px-2 text-light link-hover">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="nav-link nav-size px-2 text-light link-hover">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="nav-link nav-size px-2 text-light link-hover">
                Reviews
              </a>
            </li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-warning me-4 pe-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-person me-2"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
              Login
            </button>
          </div>
        </header>
      </>
    );

}

export default Navbar
