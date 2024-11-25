import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

// The <Outlet> from react-router-dom displays any child routes, almost like
// passing through "children" in a component
function Layout() {
  return (
    <div>
      <Header />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
