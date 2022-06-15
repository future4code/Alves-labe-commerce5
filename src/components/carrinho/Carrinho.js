import React, { Component } from 'react';
import styled from 'styled-components';

const MenuDireita = styled.div`
  background-color: pink;
  padding: 10px 10px 10px 20px;
`

export class Carrinho extends Component {
  render() {
    return (
      <MenuDireita>
        CARRINHO
      </MenuDireita>
    )
  }
}