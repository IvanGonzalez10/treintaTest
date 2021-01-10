import React from "react";
import { Div, H1, H2, H3, Button } from './styles';
import { Link } from "@reach/router";

export const Error = () => {
  return (
    <Div>
      <H1>Treinta</H1>
      <H2>404 Error</H2>
      <H3>La URL solicitada no existe, Por favor vuelve a la vista principal</H3>      
      <Link to="/">
          <Button>Inicio</Button>
      </Link>
    </Div>
  );
};