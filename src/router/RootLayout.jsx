import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

function RootLayout(props) {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <footer>Footer</footer>
        </div>
    );
}

export default RootLayout;