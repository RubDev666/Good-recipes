import { Outlet } from "react-router";

export default function Root() {
    return(
        <>
            <p>Header</p>

            <Outlet />

            <p>Footer</p>
        </>
    )
}
