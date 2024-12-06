import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Navigation from '../components/Navigation/Navigation';

export default function Home() {
    return (
        <>
            <Header />
            <Navigation />
            <Suspense fallback={null}>
                <Outlet />
            </Suspense>
        </>
        
    )
} 