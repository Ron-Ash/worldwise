import { useCities } from "../../contexts/CitiesContext";
import SidebarList from "../SidebarList";
import CityItem from "./CityItem";
import styles from "./CityList.module.css";
function CityList() {
  const { cities, isLoading } = useCities();
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
