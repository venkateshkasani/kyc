import type { ReactNode } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

export default function LayoutWrapper({ children }:{children: ReactNode}) {
    return (
        <div className="flex flex-col">
            <Navbar />
            <main>
                {children}
            </main>
        <Footer />
        </div>
    )
}