import PropTypes from "prop-types";

export default function Button({ children, onClick, styles, type }) {
  return (
    <button onClick={onClick} className={`${styles.btn} ${styles[type]}`}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  styles: PropTypes.object,
  onClick: PropTypes.func,
  type: PropTypes.string,
};
