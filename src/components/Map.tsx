import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";

interface ViewProps {
  coords: any;
}

export function ChangeView(props: ViewProps) {
  const { coords } = props;
  const map = useMap();
  map.setView(coords, 12);
  return null;
}

export default function Map() {
  const [geoData, setGeoData]: any = useState({
    lat: 64.536634,
    lng: 16.779852,
  });

  const center = [geoData.lat, geoData.lng];

  return (
    <MapContainer zoom={12} style={{ height: "100vh" }}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geoData.lat && geoData.lng && (
        <Marker position={[geoData.lat, geoData.lng]} />
      )}
      <ChangeView coords={center} />
    </MapContainer>
  );
}
