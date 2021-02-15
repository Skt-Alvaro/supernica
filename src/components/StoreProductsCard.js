import React, { useEffect, useRef, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
    flex: {
        display: "flex",
        justifyContent: "space-between",
    },
}));

export default function StoreProductsCard(props) {
    const [titleResponsive, setTitleResponsive] = useState(false);
    const productName = useRef();
    const classes = useStyles();
    const price = 2000000;
    let si = price.toLocaleString("en");

    useEffect(() => {
        const title = props.title?.slice(0, 24);
        setTitleResponsive(title + "...");
        console.log("object");
    }, [props.title]);

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.DXRpbP61pNGrqVhwBZgmkQHaEK%26pid%3DApi&f=1"
                    title="Contemplative Reptile"
                />
                <CardContent className={classes.flex}>
                    <Typography
                        gutterBottom
                        variant="body1"
                        ref={productName}
                        component="p"
                    >
                        {titleResponsive}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Share
                </Button>
                <Button size="small" color="primary">
                    Learn More
                </Button>
            </CardActions>
        </Card>
    );
}

// 25 caracteres
