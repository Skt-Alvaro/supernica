import React, { useState } from "react";

export const useOpenDrawer = (props) => {
    const { window } = props;
    console.log(props);
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const container =
        window !== undefined ? () => window().document.body : undefined;
};
