'use client';

import Link from 'next/dist/client/link';
import dynamic from 'next/dynamic';
import MenuButton from './MenuButton';
import SideMenu from './SideMenu';
import LocationPanel from './LocationPanel';

import { useMemo, useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [clickedLocation, setClickedLocation] = useState<{lat: number, lng: number} | null>(null);
  const [showLocationPanel, setShowLocationPanel] = useState(false);

  const SimpleMap = useMemo(
    () =>
      dynamic(() => import('./simpleMap'), {
        loading: () => <p>map loading...</p>,
        ssr: false,
      }),
    []
  );

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMapClick = (lat: number, lng: number) => {
    setClickedLocation({ lat, lng });
    setShowLocationPanel(true);
    console.log(`Map clicked at: ${lat}, ${lng}`);
  };

  const handleCloseLocationPanel = () => {
    setShowLocationPanel(false);
    setClickedLocation(null);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <h1>Next.js Leaflet Map</h1>
      <Link href="/">Back to Home</Link>

      {/* クリック位置パネル */}
      {clickedLocation && showLocationPanel && (
        <LocationPanel
          lat={clickedLocation.lat}
          lng={clickedLocation.lng}
          onClose={handleCloseLocationPanel}
        />
      )}

      <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
      <SideMenu isOpen={isMenuOpen} onClose={toggleMenu} />

      <SimpleMap onMapClick={handleMapClick} />
    </div>
  )
}
