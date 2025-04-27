import React from "react";
import NavigationHeader from "./NavigationHeader";
import { Outlet } from "react-router-dom";
import PageFooter from "./PageFooter";

function EwcLayout() {
  const NAVIGATION = [
    {
      label: "About",
      link: "/about",
    },
    {
      label: "Projects",
      link: "/projects",
    },
    {
      label: "Get in touch",
      link: "/contact",
    },
  ];

  return (
    <div className="ew-main-layout">
      <NavigationHeader menu={NAVIGATION} />
      <main>
        <Outlet />
      </main>
      <PageFooter menu={NAVIGATION} />
    </div>
  );
}

export default EwcLayout;
