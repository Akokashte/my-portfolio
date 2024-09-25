import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Project from "./pages/Project";
import Footer from "./components/Footer";
import ProjectInfo from "./pages/ProjectInfo";
import Contact from "./pages/Contact";
import About from "./pages/About";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ErrorPage from "./pages/ErrorPage";
import Loader from "./components/Loader";
import { useSelector } from "react-redux";

function App() {
  const loading = useSelector((state) => state.contact.loading)

  return (
    <>
      <ScrollToTop />
      {
        loading ? <Loader /> : null
      }
      <ToastContainer position="top-right" />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/projects/:url" element={<ProjectInfo />} />
        {/* <Route path="/projectinfo" element={<ProjectInfo />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
