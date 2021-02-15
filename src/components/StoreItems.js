import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StoreProductsCard from "./StoreProductsCard";

const products = [
    "Camisa de olor azulado oscuro",
    "Pantalon largo corto chingo saludos",
    "Blusa roja amarilla blanca negra",
    "Zapato de marca chamiopta chmapion",
];

const StoreItems = () => {
    const classes = useStyles();
    return (
        <div style={{ width: "100%" }}>
            <div className={classes.toolbar} />
            <Grid container className={classes.content} spacing={5}>
                {products.map((product, index) => {
                    return (
                        <Grid item lg={3} md={4} sm={6} xs={12} key={index}>
                            <StoreProductsCard title={product} />
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    );
};

export default StoreItems;

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
