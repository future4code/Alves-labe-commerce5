import React, { Component } from 'react';
import styled from 'styled-components';

const MenuDireita = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: pink;

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