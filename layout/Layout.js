import Header from "../pages/Header";
import Footer from "../pages/Footer";
const Layout = ({ children }) => {
  return (
    <div id="main-wrapper">
      <Header />
      <div className="page-wrapper">
        <div className="container-fluid">{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
