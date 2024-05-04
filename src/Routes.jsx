import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import EntryPage from "pages/EntryPage";
import TitlePage from "pages/TitlePage";
import HomePage from "pages/HomePage";
import HomePageOne from "pages/HomePageOne";
import ModelPage from "pages/ModelPage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "entrypage",
      element: <EntryPage />,
    },
    {
      path: "titlepage",
      element: <TitlePage />,
    },
    {
      path: "homepage",
      element: <HomePage />,
    },
    {
      path: "homepageone",
      element: <HomePageOne />,
    },
    {
      path: "modelpage",
      element: <ModelPage />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
