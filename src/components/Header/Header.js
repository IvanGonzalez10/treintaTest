import React from "react";
import { Img, Div } from "./styles";
import { Link } from "@reach/router";

export const Header = () => {
  return (
    <Div>
      <Link to="/">
        <Img
          src="https://www.treinta.co/wp-content/uploads/2020/08/treinta-logo-yellow-gmail-1.png"
          alt="Logo"
        />
      </Link>
    </Div>
  );
};
