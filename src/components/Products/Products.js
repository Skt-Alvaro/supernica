import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ProductCard from "./ProductCard";
import { getProducts } from "../../helpers/Products/getProducts";
import Spinner from "../Layout/Spinner";

// const products = [
//     "Camisa de olor azulado oscuro",
//     "Pantalon largo corto chingo saludos",
//     "Blusa roja amarilla blanca negra",
//     "Zapato de marca chamiopta chmapion",
// ];

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    const callGetProducts = async () => {
        setLoading(true);
        let si = await getProducts();
        console.log(si);
        setProducts(si);
        setLoading(false);
    };

    useEffect(() => {
        callGetProducts();
    }, []);

    const classes = useStyles();
    return (
        <div id="products">
            <div className={classes.toolbar} />
            <Grid container className={classes.content} spacing={5}>
                {loading ? (
                    <Spinner />
                ) : (
                    products.map((product, index) => {
                        return (
                            <Grid item lg={3} md={4} sm={6} xs={12} key={index}>
                                <ProductCard product={product} />
                            </Grid>
                        );
                    })
                )}
            </Grid>
        </div>
    );
};

export default Products;

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        width: "100%",
        margin: "0 auto",
        [theme.breakpoints.down("sm")]: {
            padding: "10px",
        },
    },
}));
