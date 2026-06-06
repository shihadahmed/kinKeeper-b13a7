
import Footer from '../pages/Footer'
import Navbar from '../components/navbar/Navbar'

export default function MainLayout() {
  return (
    <div>
        <Navbar/>
        <Footer/>
    </div>

    // <div className="min-h-screen flex flex-col justify-between bg-white">
    //   <div>
    //     {/* Top Navigation Bar */}
    //     <Navbar />
        
    //     {/* Main content area */}
    //     <main>
    //       <Outlet /> 
    //     </main>
    //   </div>

    //   {/* Footer component */}
    //   <Footer />
    // </div>
  )
}
