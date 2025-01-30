import { Outlet } from "react-router";
import { Footer } from "../components/Footer";

export default function Root() {
    return(
        <>
            <p>Header</p>

            <Outlet />

            <Footer />
        </>
    )
}
