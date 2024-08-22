import { Outlet } from "react-router-dom";
import stylesSideBar from "./Sidebar.module.css";
import stylesAppNav from "./AppNav.module.css";

import PageNav from "./PageNav";

function SideBar() {
  return (
    <div className={stylesSideBar.sidebar}>
      <PageNav
        navs={[
          { to: "cities", child: <p>cities</p> },
          { to: "countries", child: <p>Countries</p> },
        ]}
        classname={stylesAppNav.nav}
      ></PageNav>

      <Outlet />
      <footer className={stylesSideBar.footer}>
        <p className={stylesSideBar.copyright}>
          &copy; Copiright {new Date().getFullYear()} by WorldWise Inc.
        </p>
      </footer>
    </div>
  );
}

export default SideBar;
