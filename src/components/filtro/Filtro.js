import React, { Component } from 'react';
import styled from 'styled-components';

const MenuEsquerda = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: yellow;
`

const Titulos = styled.p`
  margin: 0 0 5px 0;
`

const Entrada = styled.input`
  border: 1px solid blue;
  height: 25px;
  margin: 0 0 20px 0;
`

export class Filtro extends Component {
  render() {
    return (
      <MenuEsquerda>
        <h3>Filtragem</h3>
        <div>
          <Titulos>Valor mínimo:</Titulos>
          <Entrada type="Number"/>

          <Titulos>Valor máximo:</Titulos>
          <Entrada type="Number"/>

          <Titulos>Busca por nome:</Titulos>
          <Entrada type="text"/>
        </div>
      </MenuEsquerda>
    )
  }
}