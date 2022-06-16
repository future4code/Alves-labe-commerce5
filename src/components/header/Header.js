import React, { Component } from 'react';
import styled from 'styled-components';

const Cabecalho = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  grid-column: 1/-1;
`

const Box1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
  flex-basis: 225px;
  height: 100%;
  border: 1px solid black;
`

const Box2 = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
  flex-grow: 1;
  height: 100%;
`

const Box3 = styled.div`
  display: flex;
  justify-content: center;
  background-color: orange;
  flex-basis: 225px;
  height: 100%;
`

const MenuUl = styled.nav`
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
`

const MenuUlLogar = styled.nav`
  display: flex;
  align-items: center;
`

const MenuLi = styled.nav`
  list-style: none;
  margin: 10px
`

const Menua = styled.a`
  text-decoration: none;
  color: black;
  padding: 15px;
  font-size: 24px;
`

const MenuaLogar = styled.a`
  text-decoration: none;
  color: black;
  font-size: 22px;
`

const MenuaLogarRegistrar = styled.a`
  text-decoration: none;
  color: black;
  font-size: 22px;
  background-color: red;
  border-radius: 20px;
  padding: 7px;
`

export class Header extends Component {
  render() {
    return (
      <Cabecalho>

        <Box1>
          ADICIONAR LOGO
        </Box1>

        <Box2>
          <MenuUl>
            <MenuLi>
              <Menua href="./index.html">Início</Menua>
            </MenuLi>
            <MenuLi>
              <Menua href="./fazer-pedido.html">Fazer pedido</Menua>
            </MenuLi>
            <MenuLi>
              <Menua href="./quem-somos.html">Quem somos</Menua>
            </MenuLi>
            <MenuLi>
              <Menua href="./faq.html">FAQ</Menua>
            </MenuLi>
          </MenuUl>
        </Box2>

        <Box3>
          <MenuUlLogar>
            <MenuLi>
              <MenuaLogar href="./login.html" class="login" target="_blank">Entrar</MenuaLogar>
            </MenuLi>
            <MenuLi>
              <MenuaLogarRegistrar href="./registrar.html" class="destaque" target="_blank">Registrar</MenuaLogarRegistrar>
            </MenuLi>
          </MenuUlLogar>
        </Box3>

      </Cabecalho>
    )
  }
}