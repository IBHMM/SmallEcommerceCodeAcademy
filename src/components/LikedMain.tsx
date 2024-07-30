import { useContext, useEffect, useState } from "react"
import { LikedContext } from "../context/liked"
import { Card } from "./Card"
import { Link } from "react-router-dom";


export function LikedMain() {

    const {products} = useContext(LikedContext);

    return (
        <div className="flex flex-wrap p-10 items-start justify-center h-screen gap-[10px] mt-10">
            {   
                products.length > 0 ?
                products.map((item, index) => {
                    return (
                        <Card product={item} key={index} />
                    )
                }) :
                <>
                    <h1 className="text-4xl font-bold mb-4">Empty WishList</h1>
                    <Link to={"/products"} className="w-[200px] h-[40px] rounded-[20%] bg-orange-300 text-black flex items-center justify-center font-bold">
                        Back to Products</Link>
                </>
            }
        </div>
    )
}