const NoPage = () => {
  return (
    <div style={{
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px',
      fontFamily: "Georgia, 'Times New Roman', serif",
    }}>
      <h1 style={{ fontSize: '80px', color: '#1e3a5f', margin: '0 0 8px', lineHeight: 1 }}>404</h1>
      <h2 style={{ fontSize: '24px', color: '#1e3a5f', marginBottom: '16px' }}>Page Not Found</h2>
      <p style={{ color: '#475569', marginBottom: '28px' }}>Hmm, this is awkward. The page you're looking for doesn't exist.</p>
      <a href="/" style={{
        background: '#c9a84c',
        color: '#152d49',
        padding: '12px 28px',
        borderRadius: '8px',
        fontWeight: '600',
        fontSize: '14px',
        textDecoration: 'none',
      }}>
        Back to Home
      </a>
    </div>
  );
};

export default NoPage;