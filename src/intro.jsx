import React from 'react';
import { useNavigate } from 'react-router-dom';

const IntroPage = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        background: 'linear-gradient(135deg, #121212, #2b2b2b)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#eee',
        fontFamily: 'Poppins, sans-serif',
        textAlign: 'center',
        padding: '0 20px',
      }}
    >
      <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#ffd369' }}>
        Something Mysterious Awaits...
      </h1>
      <p style={{ fontSize: '1.3rem', maxWidth: '600px', marginBottom: '30px', color: '#aaa' }}>
        Not everything is what it seems. Click below to explore the 3D hexagonal mystery gallery.
      </p>
      <button
        onClick={() => navigate('/gallery')}
        style={{
          fontSize: '1.2rem',
          padding: '12px 28px',
          backgroundColor: '#ff2e63',
          color: 'white',
          border: 'none',
          borderRadius: '30px',
          cursor: 'pointer',
          boxShadow: '0 0 15px #ff2e63aa',
          transition: 'all 0.3s ease-in-out',
        }}
        onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
      >
        I'm Curious 😏
      </button>
    </div>
  );
};

export default IntroPage;
