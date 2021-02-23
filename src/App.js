import React from "react";
import { Provider } from "react-redux";
import generateStore from "./store/store";
import { BrowserRouter, Route } from "react-router-dom";
import StorePage from "./views/StorePage";
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import { ThemeProvider } from "@material-ui/core";
import theme from "./helpers/themeConfig";
import PrivateRoute from "./PrivateRoute";
import "./main.css";
import Layout from "./components/Layout/Layout";

let routeList = [
    {
        path: "/login",
        component: LoginPage,
        private: false,
    },
    {
        path: "/register",
        component: RegisterPage,
        private: false,
    },
    {
        path: "/",
        component: StorePage,
        private: true,
    },
    // {
    //     path: "/product/:id",
    //     component: ProductPage,
    //     private: true,
    // },
];

function App() {
    const store = generateStore();
    return (
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Layout>
                        {routeList.map((route, i) => {
                            if (route.private) {
                                return (
                                    <PrivateRoute
                                        key={i}
                                        exact
                                        path={route.path}
                                        component={route.component}
                                    />
                                );
                            } else {
                                return (
                                    <Route
                                        key={i}
                                        exact
                                        path={route.path}
                                        component={route.component}
                                    />
                                );
                            }
                        })}
                    </Layout>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    );
}

export default App;
