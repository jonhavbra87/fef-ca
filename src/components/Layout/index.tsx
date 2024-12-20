import { Outlet } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

// The <Outlet> from react-router-dom displays any child routes, almost like
// passing through "children" in a component
function Layout() {
  return (
    <div className="flex flex-col h-dvh">
      <Header />
      <main className="pt-20 w-11/12 lg:w-10/12 max-w-screen-xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
