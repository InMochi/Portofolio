import Navbar from "./Navbar"

function MainLayout({children}) {
    return (
        <>
            <Navbar/>
            <main className="bg-blue-950 ">
                {children}
            </main>
        </>
    )
}

export default MainLayout