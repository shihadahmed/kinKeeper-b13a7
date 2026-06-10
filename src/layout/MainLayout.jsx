
import Footer from '../pages/Footer'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router'

export default function MainLayout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>

  )
}
