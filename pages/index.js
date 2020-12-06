import React from "react";
import styled from "styled-components";
import people from "../images/people.jpg";
import Login from "../components/Login";
import Footer from "../components/Footer";
import Header from "../components/Header";

const P = styled.p`
	font-size: 37px;
	text-transform: uppercase;
`;

const P2 = styled.p`
	font-size: 20px;
	width: 82%;
`;

const Div = styled.div`
	margin-top: 10%;
	margin-left: 25px;

	@media (max-width: 376px) {
		margin-left: 10px;
	}
`;

const Container = styled.div`
	display: grid;
	grid-template-columns: 50% 50%;

	@media (max-width: 768px) {
		grid-template-columns: 100%;
	}

	@media (min-height: 1367px) {
		grid-template-columns: 100%;
	}
`;

const Img = styled.img`
	width: 91%;
`;

const ShopInfo = () => {
	return (
		<div>
			<Header />
			<Container>
				<Div>
					<P>
						Comprar nunca fue tan <strong>fácil</strong>
					</P>
					<br />
					<P2>
						Ahora puedes comprar tus productos sin salir de casa. Tienes un
						control de tus gastos mensuales y muchas otras cosas más.
					</P2>
					<Img src={people} alt="" />
				</Div>
				<div>
					<Login />
				</div>
			</Container>
			<Footer />
		</div>
	);
};

export default ShopInfo;
