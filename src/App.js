import React, { Component } from 'react';
import styled from 'styled-components';

const Principal = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: 60px 1fr 60px;
  grid-template-columns: 250px 1fr 250px;
  box-sizing: border-box;
`

const Header = styled.div`
  display: flex;
  background-color: black;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  grid-column: 1/-1;
`

const Footer = styled.div`
  display: flex;
  background-color: mediumvioletred;
  justify-content: center;
  align-items: center;
  height: 60px;
  grid-column: 1/-1;
`

const Nav = styled.div`
  background-color: #f2d0e0;
  padding: 10px 10px 10px 20px;
`

const Main = styled.div`
  background-color: gray;
  padding: 10px 10px 10px 20px;
`

const Carrinho = styled.div`
  background-color: blue;
  padding: 10px 10px 10px 20px;
`

export default class App extends Component {
  render () {
    return (
      <Principal>
        <Header />
        <Nav />
        <Main />
        <Carrinho />
        <Footer />
      </Principal>
    );

  }
}