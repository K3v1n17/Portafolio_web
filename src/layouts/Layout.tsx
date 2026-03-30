import { Outlet } from "react-router"
import { Header } from "@/components/custom/Header"

export const Layout = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16 lg:pt-20">
        <Outlet />
      </main>
    </div>
  )
}
