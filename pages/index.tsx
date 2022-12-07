import dynamic from "next/dynamic";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import DashboardLayout from "../src/components/DashboardLayout";
const Maps = dynamic(() => import("./../src/components/Map"), {
  ssr: false,
});
export default function Home() {
  return (
    <DashboardLayout pageTitle="Home" fullMode={true}>
      <Maps />
    </DashboardLayout>
  );
}
