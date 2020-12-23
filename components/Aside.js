import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Div = styled.div`
	background: #f4f4f4;
	height: 100vh;

	@media (max-width: 426px) {
		height: 32vh;
	}

	@media (min-height: 1365px) {
		height: 100vh;
	}
`;

const Li = styled.li`
	list-style: none;
	margin-top: 13px;
	cursor: pointer;
`;

const H3 = styled.h3`
	margin-bottom: 35px;
	padding-top: 25px;
	cursor: pointer;
`;

const Div2 = styled.div`
	margin-left: 20px;
`;

const logOut = () => {
	localStorage.removeItem("log_name");
	localStorage.removeItem("log_token");
	localStorage.removeItem("token");
	localStorage.removeItem("log_id");
};

const handleLog = () => {
	try {
		if (localStorage.getItem("log_token")) {
			return (
				<Link href="/">
					<Li onClick={logOut}>Cerrar sesión</Li>
				</Link>
			);
		} else {
			return (
				<Link href="/">
					<Li>Iniciar sesión</Li>
				</Link>
			);
		}
	} catch (error) {
		console.log(error);
	}
};

const Aside = () => {
	return (
		<div>
			<Div>
				<Div2>
					<H3>MI CUENTA</H3>
					<ul>
						<Li>
							<strong>MIS PRODUCTOS FAVORITOS</strong>
						</Li>
						<Li>Mis compras</Li>
						<Li>Mi cuenta</Li>
						<Link href="/Store">
							<Li>Store</Li>
						</Link>
						{handleLog()}
						<Link href="/Add">
							<Li>Añadir productos</Li>
						</Link>
						<Link href="/Get">
							<Li>Get productos</Li>
						</Link>
					</ul>
				</Div2>
			</Div>
		</div>
	);
};

export default Aside;
