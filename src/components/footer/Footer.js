import React, { Component } from 'react';
import styled from 'styled-components';

const Rodape = styled.div`
  display: flex;
  background-color: orange;
  justify-content: center;
  align-items: center;
  height: 60px;
  grid-column: 1/-1;
`

export class Footer extends Component {
	render() {
		return (
      <Rodape>
        RODAPÉ
      </Rodape>
    )
	}
}

