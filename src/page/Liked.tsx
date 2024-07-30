import Navbar from "../components/Layout/Navbar";
import { LikedMain } from "../components/LikedMain";
import { useContext, useEffect } from "react";
import { NavbarContext } from "../context/navbar";

export function Linked() {

    const navbar = useContext(NavbarContext);

    useEffect(() => {
        navbar.setActiveDirectory("liked");
    }, []);

    return (
        <>
           <Navbar />
           <LikedMain />
        </>
    )
}