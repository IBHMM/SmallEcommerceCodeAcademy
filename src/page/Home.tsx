import { HomeMain } from "../components/HomeMain";
import Navbar from "../components/Layout/Navbar";
import { useContext, useEffect } from "react";
import { NavbarContext } from "../context/navbar";

export function Home() {

    const navbar = useContext(NavbarContext);

    useEffect(() => {
        navbar.setActiveDirectory("home");
    }, []);

    return (
       <>
        <Navbar />
        <HomeMain />
       </>
    )
}