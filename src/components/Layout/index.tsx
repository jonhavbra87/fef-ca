import { Outlet } from "react-router-dom"
import Header from "../Header"
import Footer from "../Footer"

// The <Outlet> from react-router-dom displays any child routes, almost like
// passing through "children" in a component
function Layout() {
    return (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    )
  }

  export default Layout