import React, { useEffect, useState, useSelector } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { getProducts } from "../helpers/getProduct";
import Spinner from "./Spinner";
import Header from "./Header";
import useOpenDrawer from "../helpers/useOpenDrawer";
import IconButtonC from "./IconButtonC";
import Hello from "./Hello";
import Aside from "./Aside";

const ProductPage = (props) => {
    const { window } = props;
    const { mobileOpen, handleDrawerToggle, container } = useOpenDrawer(window);
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false);
    const host = "http://localhost/api/public";
    const classes = useStyles();
    const theme = useTheme();

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
            <Header
                className={classes.appBar}
                icon={<IconButtonC open={handleDrawerToggle} />}
                hello={<Hello />}
            />
            <Aside
                drawerContainer={container}
                drawerVariant="temporary"
                drawerAnchor={theme.direction === "rtl" ? "right" : "left"}
                drawerOpen={mobileOpen}
                drawerOnClose={handleDrawerToggle}
            />
            <div className={classes.toolbar}></div>
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

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
}));
