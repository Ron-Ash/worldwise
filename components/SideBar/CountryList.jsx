import { useCities } from "../../contexts/CitiesContext";
import SidebarList from "../SidebarList";
import CountryItem from "./CountryItem";
import styles from "./CountryList.module.css";

export default function CountryList() {
  const { countries, isLoading } = useCities();
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
