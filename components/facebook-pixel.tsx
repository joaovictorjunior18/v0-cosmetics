"use client"

import { useEffect } from "react"
import { initFacebookPixel, FB_PIXEL_ID } from "@/lib/facebook-pixel"

export function FacebookPixel() {
  useEffect(() => {
    initFacebookPixel()
  }, [])

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: "none" }}
        src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
        alt=""
      />
    </noscript>
  )
}
