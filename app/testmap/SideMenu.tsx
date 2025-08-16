'use client';

import { useState } from 'react';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuItems = [
  { icon: '📍', label: 'マーカー追加' },
  { icon: '🗺️', label: 'レイヤー変更' },
  { icon: '📊', label: '統計情報' },
  { icon: '⚙️', label: '設定' },
];

export default function SideMenu({ isOpen, onClose }: SideMenuProps) {
  return (
    <>
      {/* サイドメニュー */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: isOpen ? 0 : '-300px',
          width: '300px',
          height: '100vh',
          backgroundColor: '#ffffff',
          boxShadow: '-2px 0 10px rgba(0, 0, 0, 0.3)',
          transition: 'right 0.3s ease',
          zIndex: 1000,
          padding: '20px',
          overflowY: 'auto',
          borderLeft: '1px solid #e0e0e0'
        }}
      >
        <h3 style={{ marginTop: '60px', marginBottom: '20px', color: '#333' }}>
          メニュー
        </h3>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {menuItems.map((item, index) => (
            <li key={index} style={{ marginBottom: '15px' }}>
              <a
                href="#"
                style={{
                  display: 'block',
                  padding: '12px 16px',
                  color: '#333',
                  textDecoration: 'none',
                  backgroundColor: '#f8f9fa',
                  borderRadius: '6px',
                  transition: 'background-color 0.2s ease'
                }}
                onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#e9ecef'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#f8f9fa'}
              >
                {item.icon} {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* オーバーレイ（メニューが開いているときにクリックで閉じる） */}
      {isOpen && (
        <div
          onClick={onClose}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'transparent',
            zIndex: 999
          }}
        />
      )}
    </>
  );
}
