import React, { Component } from 'react';
import styled from 'styled-components';

const Cabecalho = styled.div`
  display: flex;
  background-color: green;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  grid-column: 1/-1;
`

export class Header extends Component {
	render() {
		return (
      <Cabecalho>
        CABEÇALHO
      </Cabecalho>
    )
	}
}