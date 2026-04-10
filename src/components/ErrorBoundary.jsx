import { Component } from 'react'
import './ErrorBoundary.css'

// Class component — React error boundaries can only be class components today.
// We keep this minimal on purpose: if a lazy chunk fails to load or a child
// throws during render, we show a soft, non-alarming fallback instead of the
// default white screen. Per the project UX rules: no red alerts, warm tone.
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error, info) {
    // In production this is where we'd send to an observability service.
    // For now just log so the dev console surfaces the issue.
    console.error('ErrorBoundary caught:', error, info)
    // Let callers react to failures (e.g. auto-dismiss an onboarding blocker).
    this.props.onError?.(error, info)
  }

  handleRetry = () => {
    this.setState({ hasError: false })
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback takes precedence — lets overlays render nothing
      // (null) so they quietly disappear on error rather than showing a card.
      if (this.props.fallback !== undefined) {
        return typeof this.props.fallback === 'function'
          ? this.props.fallback(this.handleRetry)
          : this.props.fallback
      }

      return (
        <div className="error-boundary">
          <div className="error-boundary__card">
            <p className="error-boundary__title">Something got tangled.</p>
            <p className="error-boundary__body">Give it a breath and try again.</p>
            <button className="error-boundary__retry" onClick={this.handleRetry}>
              Try again
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
