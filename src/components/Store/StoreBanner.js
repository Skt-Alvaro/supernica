import React from "react";
import { makeStyles, Grid, Typography, Button } from "@material-ui/core";

const StoreBanner = () => {
    const classes = useStyle();

    return (
        <div className={classes.si}>
            <Grid container>
                <Grid item xs={6}>
                    <div className={classes.leftImg}></div>
                </Grid>
                <Typography
                    variant="h1"
                    color="initial"
                    className={classes.primary_text}
                >
                    Welcome to <br />
                    SuperNICA store
                </Typography>
                <Button
                    variant="contained"
                    className={classes.primary_button}
                    color="secondary"
                    href="#products"
                >
                    Start Shopping
                </Button>
                <Grid item xs={6}>
                    <div className={classes.rightImg}></div>
                </Grid>
            </Grid>
        </div>
    );
};

export default StoreBanner;

const useStyle = makeStyles((theme) => ({
    leftImg: {
        backgroundImage:
            "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhdqwalls.com%2Fdownload%2Fdoom-game-hd-2560x1440.jpg&f=1&nofb=1')",
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        transform: "scaleX(-1)",
        backgroundRepeat: "no-repeat",
    },
    rightImg: {
        backgroundImage:
            "url('https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F1%2F1%2Fc%2F201902.jpg&f=1&nofb=1')",
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    },
    primary_text: {
        position: "absolute",
        top: "16%",
        left: "27%",
        color: "#fff",
        fontFamily: "Kaushan Script, cursive",
    },
    primary_button: {
        position: "absolute",
        top: "53%",
        left: "28%",
    },
    often: theme.mixins.toolbar,
}));
