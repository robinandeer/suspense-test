export default function LoadingIndicator({ visible }) {
  return (
    <div style={{ position: 'fixed', top: 24, right: 24, display: visible ? 'block' : 'none' }}>Loading...</div>
  )
}