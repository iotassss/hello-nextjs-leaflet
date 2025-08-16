import { LatLng } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, Marker, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import './initLeaflet';
import './simpleMap.css';

interface SimpleMapProps {
  onMapClick?: (lat: number, lng: number) => void;
}

// マップクリックイベントを処理するコンポーネント
function MapClickHandler({ onMapClick }: { onMapClick?: (lat: number, lng: number) => void }) {
  useMapEvents({
    click: (e) => {
      if (onMapClick) {
        onMapClick(e.latlng.lat, e.latlng.lng);
      }
    },
  });
  return null;
}

const simpleMap = ({ onMapClick }: SimpleMapProps) => {
  // const position = new LatLng(33.59337, 130.35152); // 福岡タワー
  const position = new LatLng(35.79803, 139.77120); // 福岡タワー

  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
      <MapClickHandler onMapClick={onMapClick} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default simpleMap;
