import { HomeMain } from "../components/HomeMain";
import Navbar from "../components/Layout/Navbar";
import { useContext, useEffect } from "react";
import { NavbarContext } from "../context/navbar";
import { useLoaderData, useNavigate } from "react-router-dom";

export function Home() {

    const navbar = useContext(NavbarContext);
    const data = useLoaderData();
    const nav = useNavigate();

    useEffect(() => {
        if (!data) {
            nav("/signin");
        }else {
            navbar.setActiveDirectory("home");
        }
    }, []);

    return (
       <>
        <Navbar />
        <HomeMain />
       </>
    )
}