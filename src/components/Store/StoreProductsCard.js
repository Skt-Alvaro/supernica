import React from "react";
import {
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Typography,
    CardActionArea,
} from "@material-ui/core";
import "./style.css";
import gente from "../../images/gente.jpg";

const CustomCard = (props) => {
    const price = 200000;
    let si = price.toLocaleString("en");

    return (
        <Card className="custom-card">
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt=""
                    height="260"
                    className="card-image"
                    image={gente}
                />
                <CardContent className="content">
                    <Typography
                        className="title"
                        gutterBottom
                        variant="h5"
                        component="h2"
                    >
                        {props.title}
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
                    ${si}
                </Typography>
            </CardActions>
        </Card>
    );
};

export default CustomCard;
