import { FC } from "react";
import { Link } from "react-router-dom";

interface Props {}

const Navbar: FC<Props> = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-height">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to={"siginup"}>SiginUp</Link>
            </li>
            <li className="nav-item">
              <Link to={"siginup"}>SiginIn</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
