import React from "react";
import styled from "styled-components";

const Div = styled.div`
	background-color: #0c56cc;
	padding: 28px 25px 28px 25px;
	display: flex;
	justify-content: space-between;
`;

const H3 = styled.h3`
	color: #fff;
`;

const Header = ({ name }) => {
	console.log(name);
	return (
		<Div>
			<H3>SuperNICA</H3>
			<H3>{name}</H3>
		</Div>
	);
};

export default Header;
