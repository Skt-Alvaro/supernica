import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import styled from "styled-components";
import Aside from "../components/Aside";
import Spinner from "../components/Spinner";
import Link from "next/link";

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

const Divloading = styled.div`
	margin: auto auto;
	width: 100%;
	text-align: center;
	grid-column: 1 / 4;
`;

const Div = styled.div`
	padding: 0px 15px 0px 15px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 10px;
	margin-top: 15px;
`;

const Card = styled.div`
	background: #f4f4f4;
	text-align: center;
	height: 54vh;
`;

const H2title = styled.h2`
	margin-top: 20px;
`;

const H2price = styled.h2`
	margin-top: 3px;
	margin-bottom: 10px;
`;

const Pdescription = styled.p`
	margin-top: 20px;
	text-align: left;
`;

const Img = styled.img`
	width: 85%;
	height: 30vh;
`;

const handleHeader = () => {
	try {
		if (localStorage.getItem("log_name")) {
			return "Hola, " + localStorage.getItem("log_name");
		}
	} catch (error) {
		return "Inicia sesión";
	}
};

const Get = () => {
	const [response, setResponse] = useState(null);
	const [loading, setLoading] = useState(false);

	const handleLength = () => {
		try {
			if (localStorage.getItem("log_token")) {
				return response.data.length !== 0 ? (
					response.data.map((items, i) => {
						let price = items.price.toLocaleString("en");
						return (
							<Card key={i}>
								<H2title>{items.name}</H2title>
								<H2price>$ {price}</H2price>
								<Img src={items.picture} alt="" />
								<Pdescription>{items.description}</Pdescription>
							</Card>
						);
					})
				) : (
					<Divloading>
						<h1>Aún no has añadido ningún producto</h1>
						<Link href="/Add">
							<a>Añadir ahora</a>
						</Link>
					</Divloading>
				);
			} else {
				return (
					<Divloading>
						<h1>Para ver tus productos primero debes iniciar sesión</h1>
						<Link href="/">
							<a>Iniciar sesión ahora</a>
						</Link>
					</Divloading>
				);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const request = async () => {
		const url = `http://165.22.1.82:3000/api/products/byUser/${localStorage.getItem(
			"log_id"
		)}`;

		let call = await fetch(url, {
			method: "GET",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
				"access-token": localStorage.getItem("log_token"),
			},
		});
		const res = await call.json();
		setResponse(res);
		setLoading(true);
	};

	useEffect(() => {
		request();
	}, []);

	return (
		<div>
			<Header name={handleHeader()} />
			<Container>
				<Aside />
				<Div>
					{loading ? (
						response !== null ? (
							handleLength()
						) : (
							<h1>saluds</h1>
						)
					) : (
						<Divloading>
							<Spinner />
						</Divloading>
					)}
				</Div>
			</Container>
		</div>
	);
};

export default Get;
