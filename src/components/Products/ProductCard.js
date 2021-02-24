import React from "react";
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    CardActionArea,
    makeStyles,
} from "@material-ui/core";
import "./style.css";

const ProductCard = (props) => {
    const classes = useStyle();
    const { product } = props;

    return (
        <Card className="custom-card">
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt=""
                    height="260"
                    className={`card-image ${classes.img}`}
                    image={`${process.env.REACT_APP_HOST_FOR_IMAGES}${product.file}`}
                />
                <CardContent className="content">
                    <Typography
                        className="title"
                        gutterBottom
                        variant="h5"
                        component="h2"
                    >
                        {product.name}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className="actions-content">
                <Typography
                    className="price"
                    gutterBottom
                    variant="h6"
                    component="h2"
                >
                    ${product.price}
                </Typography>
            </CardActions>
        </Card>
    );
};

export default ProductCard;

const useStyle = makeStyles({
    img: {
        objectFit: "contain",
    },
});
