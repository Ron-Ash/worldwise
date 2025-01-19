import { useNavigate, useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";
import ButtonStyles from "./Button.module.css";

import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  useMapEvents,
} from "react-leaflet";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { useCities } from "../contexts/CitiesContext";
import { useGeoLocation } from "../hooks/useGeoLocation";
import Button from "./Button";

function Map() {
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    isLoading: isLoadingP,
    getPosition,
    // position: geoPosition,
  } = useGeoLocation();
  const lat = searchParams.get("lat") ?? -68.85262000918985;
  const lng = searchParams.get("lng") ?? -90.60150146484376;
  const [mapPosition, setMapPosition] = useState([lat, lng]);
  const { cities, isLoading } = useCities();

  useEffect(
    function () {
      if (lat && lng) setMapPosition([lat, lng]);
    },
    [lat, lng]
  );

  if (isLoading) return <Spinner />;
  return (
    <div className={styles.mapContainer}>
      <Button styles={ButtonStyles} type="position" onClick={getPosition}>
        {isLoadingP ? "Loading..." : "use your position"}
      </Button>
      <MapContainer
        center={mapPosition}
        zoom={10}
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
        <DetectClick />
      </MapContainer>
      <button onClick={() => setSearchParams(searchParams)}>DoesNothing</button>
    </div>
  );
}

function DetectClick() {
  const navigate = useNavigate();
  useMapEvents({
    click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
}

export default Map;
