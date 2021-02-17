import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

export default function StoreProductsCard(props) {
    const [titleResponsive, setTitleResponsive] = useState(false);
    const productName = useRef();
    const classes = useStyles();
    const price = 2000000;
    let si = price.toLocaleString("en");

    useEffect(() => {
        const title = props.title?.slice(0, 24);
        setTitleResponsive(title + "...");
    }, [props.title]);

    return (
        <Card className={classes.root}>
            <CardActionArea component={Link} to={`/product/${1}`}>
                <CardMedia
                    className={classes.media}
                    image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DXRpbP61pNGrqVhwBZgmkQHaEK%26pid%3DApi&f=1"
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography
                        gutterBottom
                        variant="body1"
                        ref={productName}
                        component="p"
                    >
                        {titleResponsive}
                    </Typography>
                    <Typography gutterBottom variant="h6">
                        {`$ ${si}`}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        [theme.breakpoints.down("sm")]: {
            maxWidth: 280,
            margin: "0 auto",
            marginBottom: "20px",
        },
        [theme.breakpoints.down("xs")]: {
            maxWidth: 540,
            margin: "0 auto",
            marginBottom: "20px",
        },
    },
    media: {
        height: 140,
    },
}));
