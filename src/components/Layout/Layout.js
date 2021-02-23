import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import Hello from "./Hello";

const Layout = (props) => {
    const { user } = useSelector((state) => state.user);
    return (
        <div>
            <Header hello={<Hello name={user?.firstname} />} />
            {props.children}
        </div>
    );
};

export default Layout;
