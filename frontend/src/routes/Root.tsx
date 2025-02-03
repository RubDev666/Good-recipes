import { Outlet } from "react-router";
import Header from "../components/layout/header/header";
import { Footer } from "../components/layout/footer/Footer";

export default function Root() {
  return (
    <>
      <h1>Header</h1>

      <Outlet />

      <Footer />
    </>
  );
}
