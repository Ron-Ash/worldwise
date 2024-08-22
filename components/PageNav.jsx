import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";

import PropTypes from "prop-types";

function PageNav({ navs = [], classname = styles.nav }) {
  return (
    <nav className={classname}>
      <ul>
        {navs.map((nav, index) => (
          <li key={index}>
            <NavLink to={nav.to} className={nav.className}>
              {nav.child}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default PageNav;

PageNav.propTypes = {
  navs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      child: PropTypes.object,
      className: PropTypes.string,
    })
  ).isRequired,
  classname: PropTypes.string,
};
