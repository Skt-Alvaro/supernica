import React from "react";
import PropTypes from "prop-types";

function useOpenDrawer(props) {
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const container =
        props?.window !== undefined ? () => window().document.body : undefined;

    return { mobileOpen, handleDrawerToggle, container };
}

useOpenDrawer.propTypes = {
    window: PropTypes.func,
};

export default useOpenDrawer;
