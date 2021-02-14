import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StoreProductsCard from "./StoreProductsCard";

const StoreItems = () => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.toolbar} />
            <Grid container className={classes.content} spacing={5}>
                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <StoreProductsCard />
                </Grid>

                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <StoreProductsCard />
                </Grid>

                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <StoreProductsCard />
                </Grid>

                <Grid item lg={3} md={4} sm={6} xs={12}>
                    <StoreProductsCard />
                </Grid>
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
