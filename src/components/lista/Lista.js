import React, { Component } from 'react';
import styled from 'styled-components';

const MenuCentral = styled.div`
  background-color: gray;
  padding: 10px 10px 10px 20px;
`

export class Lista extends Component {
  render() {
    return (
      <MenuCentral>
        LISTA CENTRAL
      </MenuCentral>
    )
  }
}