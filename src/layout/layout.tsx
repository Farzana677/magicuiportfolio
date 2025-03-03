import Nav from "@/nav";

import {} from "@/pages/skills";
import TechStack from "@/pages/techstack";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <>
        <Nav />
        <TechStack />

        {/* <Intro />
      <TechStack /> */}
      </>
      <main
        style={{
          padding: "0px",
          overflowY: "hidden",
          height: "calc(100vh - 80px)",
        }}
      >
        <Outlet />
      </main>
    </>
  );
}
