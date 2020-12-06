import React from "react";
import Header from "../components/Header";
import Aside from "../components/Aside";
import Items from "../components/Items";
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
			<Header name="Hola, Alvaro" />
			<Container>
				<Aside />
				<Items />
			</Container>
		</div>
	);
};

export default Store;
