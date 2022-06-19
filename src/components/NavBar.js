import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <div className="navigation-container">
        <nav className="navigation-bar">
          <a href="/" className="navigation-brand">
            Kupaaya
          </a>
          <div className="textbox-icon-container">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search" className="textbox" />
          </div>
          <ul className="navigation-action">
            <li className="navigation-login">
              <a className="btn btn-primary" href="/">
                Login
              </a>
            </li>
            <li className="navigation-wishlist">
              <div className="container-badge">
                <a className="btn-icon" href="/">
                  <i className="fa-solid fa-heart"></i>
                </a>
                <div className="badge-notification">22</div>
              </div>
            </li>
            <li className="navigation-cart">
              <div className="container-badge">
                <a className="btn-icon" href="/">
                  <i className="fa-solid fa-cart-shopping"></i>
                </a>
                <div className="badge-notification">11</div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export { NavBar };
