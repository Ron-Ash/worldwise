import PropTypes from "prop-types";

import Spinner from "./Spinner";
import Message from "./Message";

function SidebarList({ items, isLoading, message, classname, children }) {
  if (isLoading) return <Spinner />;
  if (items.length <= 0) return <Message message={message} />;
  return <ul className={classname}>{items.reduce(children, [])}</ul>;
}

export default SidebarList;
SidebarList.propTypes = {
  items: PropTypes.array,
  isLoading: PropTypes.bool,
  message: PropTypes.string,
  classname: PropTypes.string,
  children: PropTypes.func,
};
