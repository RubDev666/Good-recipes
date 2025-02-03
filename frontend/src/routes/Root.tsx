import { Outlet } from "react-router";
import Header from "../components/layout/header/header";
import { Footer } from "../components/layout/footer/Footer";

export default function Root() {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
}
