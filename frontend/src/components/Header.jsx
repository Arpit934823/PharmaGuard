export default function Header() {
    return (
        <>
            <header className="app-header">
                <div className="header-inner">
                    <div className="header-brand">
                        <div className="header-logo">🧬</div>
                        <div>
                            <div className="header-title">PharmaGuard</div>
                            <div className="header-subtitle">Pharmacogenomic Risk Prediction</div>
                        </div>
                    </div>
                    <div className="header-badge">
                        <span className="dot"></span>
                        AI-Powered Analysis
                    </div>
                </div>
            </header>
            <div style={{
                background: 'rgba(251, 191, 36, 0.1)',
                borderBottom: '1px solid rgba(251, 191, 36, 0.25)',
                textAlign: 'center',
                padding: '0.4rem 1rem',
                fontSize: '0.75rem',
                color: 'rgba(251, 191, 36, 0.9)',
                letterSpacing: '0.02em',
            }}>
                ⚠️ For educational and research use only. Not medical advice.
            </div>
        </>
    );
}
