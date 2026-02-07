export const FB_PIXEL_ID = "1490462969264801"

declare global {
  interface Window {
    fbq: (...args: unknown[]) => void
    _fbq: (...args: unknown[]) => void
  }
}

export function trackPixelEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    if (params) {
      window.fbq("track", eventName, params)
    } else {
      window.fbq("track", eventName)
    }
  }
}

export function initFacebookPixel() {
  if (typeof window === "undefined") return

  // Prevent double initialization
  if (typeof window.fbq === "function") return

  /* eslint-disable */
  const f = window
  const b = document
  const n: any = (f.fbq = function () {
    // @ts-ignore
    n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments)
  })
  if (!f._fbq) f._fbq = n
  n.push = n
  n.loaded = true
  n.version = "2.0"
  n.queue = []
  /* eslint-enable */

  // Inject the fbevents.js script asynchronously
  const s = b.createElement("script")
  s.async = true
  s.src = "https://connect.facebook.net/en_US/fbevents.js"
  const firstScript = b.getElementsByTagName("script")[0]
  if (firstScript?.parentNode) {
    firstScript.parentNode.insertBefore(s, firstScript)
  } else {
    b.head.appendChild(s)
  }

  // Initialize pixel and fire PageView
  window.fbq("init", FB_PIXEL_ID)
  window.fbq("track", "PageView")
}
