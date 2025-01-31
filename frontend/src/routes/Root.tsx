import { Outlet } from "react-router";
import { Footer } from "../components/Footer";
import Header from "../components/layout/header";

export default function Root() {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
}
