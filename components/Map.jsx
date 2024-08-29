import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { useState } from "react";
import Spinner from "./Spinner";
import { useCities } from "../contexts/CitiesContext";

function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const lat = searchParams.get("lat") ?? 40;
  const lng = searchParams.get("lng") ?? 0;
  const [mapPosition, setMapPosition] = useState([lat, lng]);
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  console.log(lat, lng);
  return (
    <div className={styles.mapContainer} onClick={() => navigate("form")}>
      <MapContainer
        center={[lat, lng]}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            key={city.id}
            position={[city.position.lat, city.position.lng]}
          >
            <Popup>
              {city.cityName}, {city.country}: {city.notes}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <button onClick={() => setSearchParams(searchParams)}>DoesNothing</button>
      <button onClick={() => setMapPosition(mapPosition)}>DoesNothing</button>
    </div>
  );
}

export default Map;
