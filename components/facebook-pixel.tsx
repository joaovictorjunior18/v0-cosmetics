'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { initFacebookPixel, FB_PIXEL_ID } from '@/lib/facebook-pixel'

export function FacebookPixel() {
  const pathname = usePathname()

  // Initialize pixel on first mount
  useEffect(() => {
    initFacebookPixel()
  }, [])

  // Fire PageView on every SPA route change
  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'PageView')
    }
  }, [pathname])

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  )
}
