import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import Spinner from "./components/Layout/Spinner";
import { getUserByTokenAction } from "./store/actions/getUserByTokenAction";

const PrivateRoute = (props) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const { component: Component, ...rest } = props;

    const loggedIn = async () => {
        await dispatch(getUserByTokenAction());
    };

    useEffect(() => {
        loggedIn();
        if (!loggedIn) {
            setLoading(false);
            setIsAuthenticated(false);
        } else {
            setLoading(true);
            setIsAuthenticated(true);
        }
    }, []);

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : loading ? (
                    <Spinner />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;
