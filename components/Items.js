import React from "react";
import styled from "styled-components";
import coca from "../images/coca.png";
import tomate from "../images/tomates.jpg";
import embutidos from "../images/chorizo.jpg";
import queso from "../images/queso_fresco.jpg";

const items = [
	{
		img: coca,
		item: "3 PACK COCA COLAS",
		category: "REFRESCOS",
		price: 100,
	},
	{
		img: tomate,
		item: "TOMATES FRESCOS",
		category: "REFRESCOS",
		price: `${80} / LIBRA`,
	},
	{
		img: embutidos,
		item: "EMBUTIDOS",
		category: "REFRESCOS",
		price: 100,
	},
	{
		img: queso,
		item: "QUESO SECO",
		category: "REFRESCOS",
		price: 100,
	},
];

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 25%);

	@media (max-width: 1024px) {
		grid-template-columns: repeat(2, 50%);
	}

	@media (min-height: 1365px) {
		grid-template-columns: repeat(2, 50%);
	}

	@media (max-width: 426px) {
		grid-template-columns: 100%;
		grid-gap: 2em;
	}
`;

const Img = styled.img`
	width: 92%;
	height: 26vh;

	margin: 0 auto;

	@media (max-width: 1024px) {
		width: 67%;
	}

	@media (min-height: 1023px) {
		width: 91%;
	}
`;

const Div = styled.div`
	display: inline-flex;
	justify-content: center;
	align-items: center;
	height: 48vh;
`;

const Card = styled.div`
	display: grid;
`;

const Li = styled.li`
	list-style: none;
	cursor: pointer;
`;

const Ul = styled.div`
	display: flex;
	justify-content: space-between;
	width: 80%;
	margin: 0 auto 20px auto;

	@media (max-width: 1024px) {
		width: 60%;
	}
`;

const P = styled.p`
	font-size: 25px;
	margin: 10px auto;
`;

const Button = styled.button`
	background: #0c56cc;
	color: #fff;
	padding: 10px;
	width: 61%;
	margin: 0px auto;
	border-radius: 20px;
	border: none;
	font-size: 20px;
	cursor: pointer;
`;

const Items = () => {
	return (
		<Container>
			{items.map((item, i) => {
				return (
					<Div key={i}>
						<Card>
							<Img src={item.img} alt="" />
							<P>
								<strong>{item.item}</strong>
							</P>
							<Ul>
								<Li>{item.category}</Li>
								<Li> C$ {item.price}</Li>
							</Ul>
							<Button>Agregar</Button>
						</Card>
					</Div>
				);
			})}
		</Container>
	);
};

export default Items;
