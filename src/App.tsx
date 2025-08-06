import { Suspense } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import LoadingPage from "./components/UI/LoadingPage";
import Header from "./components/Header";
import Layout from "./pages/Layout";
import Routing from "./routes";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Thời gian animation (ms)
      once: false, // Chạy một lần hay mỗi lần scroll
      easing: "ease-in-out", // Kiểu hiệu ứng easing
    });
  }, []);
  return (
    <>
      <Header />
      <Layout>
        <Suspense fallback={<LoadingPage />}>
          <Routing />
        </Suspense>
      </Layout>
      <Footer />
    </>
  );
};

export default App;
