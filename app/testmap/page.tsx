'use client';

import Link from 'next/dist/client/link';
import dynamic from 'next/dynamic';
import MenuButton from './MenuButton';
import SideMenu from './SideMenu';

import { useMemo, useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <h1>Next.js Leaflet Map</h1>
      <Link href="/">Back to Home</Link>

      <MenuButton isOpen={isMenuOpen} onClick={toggleMenu} />
      <SideMenu isOpen={isMenuOpen} onClose={toggleMenu} />

      <SimpleMap />
    </div>
  )
}
