import { Outlet } from 'react-router-dom';
import { AdminPanel } from '../components/AdminPanel.jsx';
import { Footer } from '../components/footer/Footer.jsx';
import { NavBar } from '../components/NavBar.jsx';

const adminAccess = false;

export const SharedLayout = () => {
  return (
    <>
      <div className="flex w-full">
        <section className="flex-1">
          <NavBar />
          <Outlet />
        </section>
        {adminAccess && <AdminPanel />}
      </div>
      <Footer />
    </>
  );
};
