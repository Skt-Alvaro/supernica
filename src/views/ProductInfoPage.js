import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core";
import ProductInfo from "../components/Products/ProductInfo";
import { useDispatch } from "react-redux";
import { getProductByIdAction } from "../store/actions/getProductByIdAction";

const ProductInfoPage = (props) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const { id } = props.match.params;

    useEffect(() => {
        dispatch(getProductByIdAction(id));
    }, []);

    return (
        <div className={classes.root}>
            <ProductInfo />
        </div>
    );
};

export default ProductInfoPage;

const useStyles = makeStyles({
    root: {
        background: "#15161A",
    },
});
