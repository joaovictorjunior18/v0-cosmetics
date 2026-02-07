export const FB_PIXEL_ID = '1490462969264801'

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void
    _fbq: (...args: unknown[]) => void
  }
}

export function initFacebookPixel(): void {
  if (typeof window === 'undefined') return
  if (window.fbq) return // already initialized

  /* eslint-disable */
  const f: any = window
  const b = document
  const e = 'script'

  const n: any = function (...args: unknown[]) {
    // @ts-expect-error -- FB Pixel queue pattern
    n.callMethod ? n.callMethod.apply(n, args) : n.queue.push(args)
  }

  if (!f._fbq) f._fbq = n
  n.push = n
  n.loaded = true
  n.version = '2.0'
  n.queue = []

  f.fbq = n

  const t = b.createElement(e) as HTMLScriptElement
  t.async = true
  t.src = 'https://connect.facebook.net/en_US/fbevents.js'

  const s = b.getElementsByTagName(e)[0]
  s?.parentNode?.insertBefore(t, s)
  /* eslint-enable */

  window.fbq('init', FB_PIXEL_ID)
  window.fbq('track', 'PageView')
}

/**
 * Dispara um evento personalizado do Facebook Pixel.
 * Uso: trackPixelEvent('Lead') ou trackPixelEvent('InitiateCheckout')
 */
export function trackPixelEvent(eventName: string): void {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName)
  }
}
