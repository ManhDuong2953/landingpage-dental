import { Suspense } from "react";


import LoadingPage from "./components/UI/LoadingPage";
import Header from "./components/Header";
import Layout from "./pages/Layout";
import Routing from "./routes";
import Footer from "./components/Footer";

const App = () => {
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
