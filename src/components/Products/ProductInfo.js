import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import { headerAction } from "../../store/actions/headerAction";
import Spinner from "../Layout/Spinner";

const ProductInfo = () => {
    const { productById, loading } = useSelector((state) => state.products);
    const classes = useStyles();
    const dispatch = useDispatch();

    console.log(productById);

    useEffect(() => {
        const propertys = {
            position: "relative",
            backgroundChange: false,
            show_right_items: true,
        };
        dispatch(headerAction(propertys));
    }, []);

    return (
        <div>
            {loading ? (
                <Spinner />
            ) : (
                <Grid container>
                    <Grid item xs={7} className={classes.center}>
                        <img
                            className={classes.img}
                            alt=""
                            src={`${process.env.REACT_APP_HOST_FOR_IMAGES}${productById.file}`}
                        />
                    </Grid>
                    <Grid item xs={5}>
                        <Typography
                            variant="h5"
                            color="textSecondary"
                            className={classes.rightText}
                        >
                            {productById.name}
                        </Typography>
                    </Grid>
                </Grid>
            )}
        </div>
    );
};

export default ProductInfo;

const useStyles = makeStyles({
    root: {
        background: "#15161A",
    },
    center: {
        textAlign: "center",
    },
    rightText: {
        width: "90%",
        marginTop: "30px",
    },
    img: {
        maxWidth: "80%",
    },
});
