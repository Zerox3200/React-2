import { Outlet } from 'react-router-dom'
import Nav from '../Components/Nav/Nav'
import './Layout.scss'
import Footer from '../Components/Footer/Footer'

export default function Layout() {
    return (
        <>
            <Nav />
            <Outlet></Outlet>
            <Footer />
        </>
    )
}
