import { Link } from "react-router-dom"
import MainLayout from "../components/layout/MainLayout"

export default function Contact() {
    return (
        <>
            <MainLayout>
                <h1 className="flex justify-center">Contact Page</h1>
                <Link to="/" className="flex justify-center">Home</Link>
            </MainLayout>
        </>
    )
}