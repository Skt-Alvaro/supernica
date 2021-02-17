import React, { useEffect, useState } from "react";
import { getProducts } from "../helpers/getProduct";
import Spinner from "./Spinner";

const ProductPage = () => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const host = "http://localhost/api/public";

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            setProduct(await getProducts());
            setLoading(false);
        };
        getData();
    }, []);

    return (
        <div>
            <h1>hwuhw</h1>
            {loading ? (
                <Spinner />
            ) : (
                <div>
                    <h1>{product?.name}</h1>
                    <img src={`${host}${product?.file}`} alt="" />
                </div>
            )}
        </div>
    );
};

export default ProductPage;
