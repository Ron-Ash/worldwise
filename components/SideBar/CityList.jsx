import SidebarList from "../SidebarList";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";

import PropTypes from "prop-types";

function CityList({ cities, isLoading }) {
  return (
    <SidebarList
      items={cities}
      isLoading={isLoading}
      message={"Add your first city"}
      classname={styles.cityList}
    >
      {(acc, city) => [...acc, <CityItem city={city} key={city.id} />]}
    </SidebarList>
  );
}

export default CityList;
CityList.propTypes = {
  cities: PropTypes.array,
  isLoading: PropTypes.bool,
};
