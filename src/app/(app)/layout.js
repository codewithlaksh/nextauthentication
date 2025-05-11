import Navbar from "@/components/navbar.component";

export const metadata = {
    title: "Home | NextJS Authentication",
    description: "Authentication tutorial using nextjs.",
};

export default function RootLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
        </>
    );
}
