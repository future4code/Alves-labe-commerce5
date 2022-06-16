import React, { Component } from 'react';
import styled from 'styled-components';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Filtro } from './components/filtro/Filtro';
import { Carrinho } from './components/carrinho/Carrinho';
import { Lista } from './components/lista/Lista';

const Principal = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: 60px 1fr 60px;
  grid-template-columns: 225px 1fr 225px;
  box-sizing: border-box;
`

export default class App extends Component {
  render () {
    return (
      <Principal>
        <Header />
        <Filtro />
        <Lista />
        <Carrinho />
        <Footer />
      </Principal>
    );

  }
}