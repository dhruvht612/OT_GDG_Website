import Navigation from './Navigation'
import Footer from './Footer'
import FloatingElements from './FloatingElements'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className="relative">
      <FloatingElements />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout

