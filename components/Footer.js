import React, { useState } from "react";
import styled from "styled-components";

const Div = styled.div`
	display: flex;
	width: 96%;
	justify-content: space-between;

	@media (max-width: 769px) {
		display: grid;
		text-align: center;
		justify-content: center;
		grid-gap: 10px;
		width: 100%;
	}
`;

const Div2 = styled.div`
	display: flex;

	@media (max-width: 769px) {
		display: grid;
		grid-gap: 10px;
	}
`;

const P = styled.p`
	margin-right: 20px;
	margin-left: 20px;
`;

const Footer = () => {
	const [visible, setVisible] = useState(true);

	// if (window.innerWidth < 767) {
	// 	setVisible(false);
	// }

	return (
		<>
			{visible ? (
				<Div>
					<Div2>
						<P>
							<strong>Comercios afiliados</strong>
						</P>
						<p>Palí - Auto Mercado - Maxi Palí - La Unión</p>
					</Div2>
					<div>
						<p>SuperNica 2020</p>
					</div>
				</Div>
			) : null}
		</>
	);
};

export default Footer;
