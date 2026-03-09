import { ImageResponse } from 'next/og';

export const size = {
  width: 1200,
  height: 630
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px',
          color: '#f8f3e9',
          background:
            'radial-gradient(circle at 20% 20%, rgba(107,231,255,0.24), transparent 42%), radial-gradient(circle at 80% 75%, rgba(255,97,56,0.28), transparent 48%), linear-gradient(160deg, #06101a 0%, #091827 52%, #0d2231 100%)'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div
            style={{
              fontSize: 26,
              letterSpacing: 7,
              textTransform: 'uppercase',
              opacity: 0.9
            }}
          >
            Driftwoods Sports Grill
          </div>
          <div
            style={{
              fontSize: 92,
              lineHeight: 1,
              fontWeight: 800,
              maxWidth: '950px'
            }}
          >
            Sunnyslope
            <br />
            After Dark
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 34,
            width: '100%'
          }}
        >
          <span style={{ opacity: 0.95 }}>Food • Drinks • Sports • Events</span>
          <span style={{ fontSize: 30, color: '#6be7ff' }}>thedriftwoodsaz.com</span>
        </div>
      </div>
    ),
    {
      ...size
    }
  );
}
