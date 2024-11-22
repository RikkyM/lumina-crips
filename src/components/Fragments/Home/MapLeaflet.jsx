import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const MapLeaflet = () => {
  const position = [-2.2196789, 113.9155459];

  return (
    <div className="w-full h-max pt-10 pb-20">
      <div className="w-[90%] mx-auto">
        <h4 className="text-center text-2xl font-magic mb-7">Lokasi Kami</h4>
      </div>
      <MapContainer
        center={position}
        zoom={13}
        className="h-[300px] max-w-screen-md w-[90%] mx-auto border border-black -z-20"
        zoomControl={false}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        boxZoom={false}
        keyboard={false}
        attributionControl={false}
        dragging={false}
        touchZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            <a href="https://maps.app.goo.gl/nCumawWp19X5pMiA9" target="_blank">Our Location</a>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapLeaflet;
