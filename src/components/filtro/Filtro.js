import React, { Component } from 'react';
import styled from 'styled-components';

const MenuEsquerda = styled.div`
  background-color: red;
  padding: 10px 10px 10px 20px;
`

export class Filtro extends Component {
  render() {
    return (
      <MenuEsquerda>
        <h2>FILTRO</h2>
        <div>
          <p>Valor mínimo:</p>
          <input type="Number"/>

          <p>Valor máximo:</p>
          <input type="Number"/>

          <p>Busca por nome:</p>
          <input type="text"/>
        </div>
      </MenuEsquerda>
    )
  }
}