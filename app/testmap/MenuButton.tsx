'use client';

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export default function MenuButton({ isOpen, onClick }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: 1001,
        padding: '12px 16px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: 'bold',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
        transition: 'background-color 0.3s ease'
      }}
      onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#0056b3'}
      onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#007bff'}
    >
      {isOpen ? '✕' : '☰'} メニュー
    </button>
  );
}
