import { useEffect, useState } from "react"
import { Outlet } from "react-router"
import { Header } from "@/components/custom/Header"
import { SplashScreen } from "@/components/custom/SplashScreen"

export const Layout = () => {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {showSplash && <SplashScreen onEnter={() => setShowSplash(false)} />}
      <Header />
      <main className="pt-16 lg:pt-20">
        <Outlet />
      </main>
    </div>
  )
}
