"use client"

import { useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"

export default function MainRoute() {
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    // Only redirect if we're on "/"
    if (pathname === "/") {
      router.replace("/home")
    }
  }, [pathname, router])

  return null
}
