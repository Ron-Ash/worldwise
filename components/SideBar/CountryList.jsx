import SidebarList from "../SidebarList";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";

import PropTypes from "prop-types";

export default function CountryList({ countries, isLoading }) {
  return (
    <SidebarList
      items={countries}
      isLoading={isLoading}
      message={"Add your first country"}
      classname={styles.countryList}
    >
      {(acc, country) => [
        ...acc,
        <CountryItem country={country} key={acc.length} />,
      ]}
    </SidebarList>
  );
}
CountryList.propTypes = {
  countries: PropTypes.array,
  isLoading: PropTypes.bool,
};
