import React from 'react';
import { Person } from "./Login/Login";
import Login from "./Login/Login";
import {Div} from './styles'

export const Auth = ()  => {
  return (
    <Div>
      <Person />
      <Login />
    </Div>
    );
  };