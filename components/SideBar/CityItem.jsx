import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";

import PropTypes from "prop-types";
import { useCities } from "../../contexts/CitiesContext";

function CityItem({ city }) {
  const { cityName, emoji, date, id, position } = city;
  const { currentCity } = useCities();

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          currentCity.id === id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{date}</time>
        <button className={styles.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}

export default CityItem;
CityItem.propTypes = {
  city: PropTypes.object,
};
