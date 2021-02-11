import React from "react";
import Header from "./Header";
import Aside from "./Aside";
import Items from "./Items";
import styled from "styled-components";

const Container = styled.div`
    display: grid;
    grid-template-columns: 17% 83%;
    @media (max-width: 426px) {
        grid-template-columns: 100%;
    }
    @media (min-height: 1365px) {
        grid-template-columns: 100%;
    }
`;

const Store = () => {
    return (
        <div>
            <Header />
            <Container>
                <Aside />
                <Items />
            </Container>
        </div>
    );
};

export default Store;
