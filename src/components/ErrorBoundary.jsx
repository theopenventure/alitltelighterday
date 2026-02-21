import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info)
  }

  handleRetry = () => {
    this.setState({ hasError: false })
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          padding: 40,
          textAlign: 'center',
          fontFamily: 'var(--font-sans)',
        }}>
          <p style={{ fontSize: 15, fontWeight: 600, color: '#888', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 16 }}>
            hmm
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.6, color: '#595959', maxWidth: 280, marginBottom: 24 }}>
            Something unexpected happened. Let's try that again.
          </p>
          <button
            onClick={this.handleRetry}
            style={{
              background: 'rgba(0,0,0,0.06)',
              border: 'none',
              borderRadius: 100,
              padding: '11px 24px',
              fontSize: 15,
              fontWeight: 500,
              fontFamily: 'var(--font-sans)',
              color: '#1A1A1A',
              cursor: 'pointer',
            }}
          >
            Try again
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
