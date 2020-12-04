import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Footer = () => {
  return (
    <Div>
      <p>
        <strong>Comercios afiliados</strong>
      </p>
      <p>Palí - Auto Mercado - Maxi Palí - La Unión</p>
      <p>SuperNica 2020</p>
    </Div>
  );
};

export default Footer;
