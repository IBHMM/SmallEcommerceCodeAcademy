import { useEffect, useState } from "react";
import { Card } from "./Card";




export function ProductsMain() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then((response) => response.json())
            .then((data) => setData(data));
    }, []);

    return (
        <div className="flex flex-wrap p-10 items-start justify-center h-screen gap-[10px] mt-10">
            {
                data.map((product, index) => {
                    return(
                        <Card product={product} key={index} />
                    )
                })
            }
        </div>
    )
}