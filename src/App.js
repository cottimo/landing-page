import React, { useState, useEffect } from 'react';

function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Update localStorage and body styles when theme changes
    localStorage.setItem('darkMode', JSON.stringify(isDark));
    document.body.style.backgroundColor = isDark ? '#121212' : '#ffffff';
    document.body.style.color = isDark ? '#ffffff' : '#000000';
    // Add JetBrains Mono font
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, [isDark]);

  return (
    <div className="App" style={{ 
      fontFamily: '"JetBrains Mono", monospace',
      WebkitFontSmoothing: 'antialiased',
      MozOsxFontSmoothing: 'grayscale'
    }}>
      <button
        onClick={() => setIsDark(!isDark)}
        style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          padding: '0.5rem',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '1.2rem',
          color: 'inherit'
        }}
      >
        {isDark ? '☀️' : '🌙'}
      </button>

      <main style={{ 
        padding: '2rem', 
        maxWidth: '800px', 
        margin: '0 auto',
        color: isDark ? '#ffffff' : '#000000',
        transition: 'color 0.3s ease',
        textAlign: 'center',
        letterSpacing: '-0.02em'  // Tighter letter spacing for modern look
      }}>
        <h1 style={{ 
          fontSize: '3.5rem', 
          marginBottom: '1.5rem',
          marginTop: '4rem',
          fontWeight: 500,  // Semi-bold weight
          letterSpacing: '-0.03em'  // Even tighter spacing for headings
        }}>
          Chas3
        </h1>
        
        <p style={{ 
          marginBottom: '2rem',
          fontSize: '1rem',
          maxWidth: '600px',
          margin: '0 auto 3rem',
          lineHeight: 1.6
        }}>
          tldr; aspiring mediocre indie hacker. always learning. usually from my mistakes.
        </p>
        
        <div style={{
          maxWidth: '600px',
          margin: '0 auto 3rem',
          padding: '2rem',
          border: `1px solid ${isDark ? '#8B5CF6' : '#A78BFA'}`,  // Purple border
          borderRadius: '12px',
          background: `${isDark ? 'rgba(139, 92, 246, 0.05)' : 'rgba(167, 139, 250, 0.05)'}`,  // Subtle purple background
        }}>
          <h2 style={{ 
            fontSize: '1.5rem',  // Increased font size
            fontWeight: 700,     // Made it bold
            marginBottom: '1rem',
            color: `${isDark ? '#8B5CF6' : '#7C3AED'}`  // Purple text
          }}>
            join chas3's list
          </h2>
          
          <p style={{
            fontSize: '1rem',
            margin: '0 auto 2rem',
            lineHeight: 1.6
          }}>
            occasional emails where i talk about what i'm working on (usually ai coding, programmatic seo and saas)
          </p>
          
          <div style={{
            padding: '1.5rem',
            border: `1px solid ${isDark ? '#8B5CF6' : '#A78BFA'}`,  // Purple border
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            background: `${isDark ? 'rgba(139, 92, 246, 0.02)' : 'rgba(167, 139, 250, 0.02)'}`,  // Very subtle purple background
          }}>
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke={isDark ? '#8B5CF6' : '#7C3AED'}  // Purple icon
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            
            <form style={{
              display: 'flex',
              gap: '0.5rem',
              flex: 1
            }}>
              <input 
                type="email" 
                placeholder="your@email.com" 
                style={{
                  flex: 1,
                  padding: '0.5rem',
                  border: 'none',
                  background: 'none',
                  borderBottom: `1px solid ${isDark ? '#8B5CF6' : '#A78BFA'}`,  // Purple border
                  color: 'inherit',
                  fontFamily: 'inherit',
                  fontSize: '1rem',
                  outline: 'none'
                }}
              />
              <button 
                type="submit"
                style={{
                  padding: '0.5rem 1rem',
                  border: `1px solid ${isDark ? '#8B5CF6' : '#7C3AED'}`,  // Purple border
                  borderRadius: '4px',
                  background: 'none',
                  color: isDark ? '#8B5CF6' : '#7C3AED',  // Purple text
                  fontFamily: 'inherit',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  ':hover': {
                    background: isDark ? 'rgba(139, 92, 246, 0.1)' : 'rgba(167, 139, 250, 0.1)'  // Purple hover state
                  }
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          margin: '2rem auto',
          maxWidth: '800px'
        }}>
          <div style={{
            flex: 1,
            height: '1px',
            background: isDark ? '#ffffff33' : '#00000033'
          }} />
          <p style={{
            fontSize: '1rem',
            lineHeight: 1.6,
            opacity: 0.9,
            whiteSpace: 'nowrap'
          }}>
            socials
          </p>
          <div style={{
            flex: 1,
            height: '1px',
            background: isDark ? '#ffffff33' : '#00000033'
          }} />
        </div>

        <nav style={{ 
          width: '100%',
          maxWidth: '600px',
          margin: '2rem auto'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem'
          }}>
            <a 
              href="https://x.com/cut2thechaseo"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                padding: '1.25rem 2rem',
                border: `1px solid ${isDark ? '#ffffff33' : '#00000033'}`,
                borderRadius: '12px',
                color: 'inherit',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                width: '100%',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = isDark ? '#ffffff66' : '#00000066';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = isDark ? '#ffffff33' : '#00000033';
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill={isDark ? '#ffffff' : '#000000'}>
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
              <span style={{
                fontWeight: 400,
                fontSize: '1.2rem'
              }}>
                follow @cut2thechaseo
              </span>
            </a>

            <a 
              href="https://github.com/cottimo"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                padding: '1.25rem 2rem',
                border: `1px solid ${isDark ? '#ffffff33' : '#00000033'}`,
                borderRadius: '12px',
                color: 'inherit',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                width: '100%',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = isDark ? '#ffffff66' : '#00000066';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = isDark ? '#ffffff33' : '#00000033';
              }}
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill={isDark ? '#ffffff' : '#000000'}>
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
              <span style={{
                fontWeight: 400,
                fontSize: '1.2rem'
              }}>
                follow @cottimo
              </span>
            </a>
          </div>
        </nav>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          margin: '3rem auto 2rem',
          maxWidth: '800px'
        }}>
          <div style={{
            flex: 1,
            height: '1px',
            background: isDark ? '#ffffff33' : '#00000033'
          }} />
          <p style={{
            fontSize: '1rem',
            lineHeight: 1.6,
            opacity: 0.9,
            whiteSpace: 'nowrap'
          }}>
            projects
          </p>
          <div style={{
            flex: 1,
            height: '1px',
            background: isDark ? '#ffffff33' : '#00000033'
          }} />
        </div>

        <nav style={{ 
          width: '100%',
          maxWidth: '600px',
          margin: '0 auto 2rem'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem'
          }}>
            <a 
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                padding: '1.5rem 2.5rem',
                border: `1px solid ${isDark ? '#ffffff33' : '#00000033'}`,
                borderRadius: '12px',
                color: 'inherit',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                width: '100%',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = isDark ? '#ffffff66' : '#00000066';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = isDark ? '#ffffff33' : '#00000033';
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
              }}>
                <svg 
                  width="28" 
                  height="28" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke={isDark ? '#ffffff' : '#000000'}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 12V8H6a2 2 0 01-2-2c0-1.1.9-2 2-2h12v4" />
                  <path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
                  <path d="M12 12h8" />
                </svg>
                <span style={{
                  fontWeight: 400,
                  fontSize: '1.2rem'
                }}>
                  easyCode
                </span>
              </div>
              <p style={{
                margin: '0 0 0 calc(28px + 1.25rem)',
                fontSize: '0.95rem',
                opacity: 0.7,
                lineHeight: 1.5,
                textAlign: 'left',
                width: '100%'
              }}>
                how to build and ship products with 0 coding knowledge
              </p>
            </a>

            <a 
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                padding: '1.5rem 2.5rem',
                border: `1px solid ${isDark ? '#ffffff33' : '#00000033'}`,
                borderRadius: '12px',
                color: 'inherit',
                textDecoration: 'none',
                transition: 'all 0.2s ease',
                width: '100%',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.borderColor = isDark ? '#ffffff66' : '#00000066';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = isDark ? '#ffffff33' : '#00000033';
              }}
            >
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
              }}>
                <svg 
                  width="28" 
                  height="28" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke={isDark ? '#ffffff' : '#000000'}
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                <span style={{
                  fontWeight: 400,
                  fontSize: '1.2rem'
                }}>
                  Apprentice AI
                </span>
              </div>
              <p style={{
                margin: '0 0 0 calc(28px + 1.25rem)',
                fontSize: '0.95rem',
                opacity: 0.7,
                lineHeight: 1.5,
                textAlign: 'left',
                width: '100%'
              }}>
                your personal AI assistant to land your dream job
              </p>
            </a>
          </div>
        </nav>
      </main>
    </div>
  );
}

export default App;
