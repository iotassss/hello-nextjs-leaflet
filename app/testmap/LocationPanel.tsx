import React from 'react';

interface LocationPanelProps {
  lat: number;
  lng: number;
  onClose: () => void;
}

export default function LocationPanel({ lat, lng, onClose }: LocationPanelProps) {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100vh',
      width: '260px',
      background: 'white',
      boxShadow: '2px 0 8px rgba(0,0,0,0.15)',
      zIndex: 1200,
      display: 'flex',
      flexDirection: 'column',
      padding: '24px 16px 16px 16px',
      borderRight: '1px solid #eee',
    }}>
      <button
        onClick={onClose}
        style={{
          alignSelf: 'flex-end',
          background: 'none',
          border: 'none',
          fontSize: '1.5rem',
          cursor: 'pointer',
          marginBottom: '16px',
        }}
        aria-label="閉じる"
      >
        ×
      </button>
      <div>
        <h3>クリック位置</h3>
        <div style={{ fontSize: '1.1rem', marginTop: '8px' }}>
          {lat.toFixed(5)}, {lng.toFixed(5)}
        </div>
      </div>
    </div>
  );
}
