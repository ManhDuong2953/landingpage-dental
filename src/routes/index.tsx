import React from "react";
import { useRoutes } from "react-router-dom";

const HomePage = React.lazy(() => import("../pages/HomePage"));
const AboutPage = React.lazy(() => import("../pages/AboutPage"));
const ServicesPage = React.lazy(() => import("../pages/ServicesPage"));
const BlogPage = React.lazy(() => import("../pages/BlogPage"));
const BlogPost = React.lazy(() => import("../pages/BlogPost"));
const ContactPage = React.lazy(() => import("../pages/ContactPage"));
const PageNotFound = React.lazy(() => import("../pages/PageNotFound"));

const Routing = () => {
  const routes = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/landingpage-dental", element: <HomePage /> },

    { path: "/about", element: <AboutPage /> },
    { path: "/landingpage-dental/about", element: <AboutPage /> },

    { path: "/services", element: <ServicesPage /> },
    { path: "/landingpage-dental/services", element: <ServicesPage /> },

    { path: "/blog", element: <BlogPage /> },
    { path: "/landingpage-dental/blog", element: <BlogPage /> },

    { path: "/blog/:id", element: <BlogPost /> },
    { path: "/landingpage-dental/blog/:id", element: <BlogPost /> },

    { path: "/contact", element: <ContactPage /> },
    { path: "/landingpage-dental/contact", element: <ContactPage /> },

    { path: "/*", element: <PageNotFound /> },
  ]);

  return routes;
};

export default Routing;
