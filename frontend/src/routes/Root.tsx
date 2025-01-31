import { Outlet } from "react-router";
import { Footer } from "../components/layout/footer/Footer";
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
