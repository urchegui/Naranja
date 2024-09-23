import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import '../styles/layout.scss'; // Asegúrate de crear este archivo de estilos si lo necesitas

const Layout = () => {
  return (
    <>
      <Header />
      <div className="content-wrapper">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
