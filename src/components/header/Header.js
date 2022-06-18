import React, { Component } from 'react';
import styled from 'styled-components';
// import LogoShirtx from './../img/shirtx.png';
import LogoShirtx from './../img/shirtx-branco.png';
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
  background-color: black;
  flex-basis: 225px;
  height: 100%;
  `
const ImagemLogo = styled.img`
  width: 100%;
  margin: 0 10px 0 5px;
  @media screen and (min-device-width : 220px) and (max-device-width : 580px) {
    display: flex;
    flex-direction: column;
    padding: 16px;
    margin: 0;
    width: 100px;
  }
  `

const Box2 = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  flex-grow: 1;
  height: 100%;
  `

const Box3 = styled.div`
  display: flex;
  justify-content: center;
  background-color: black;
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
  color: white;
  padding: 15px;
  font-size: 24px;
  @media screen and (min-device-width : 220px) and (max-device-width : 580px) {
  font-size: 16px;
  text-align: center;
  }
  `
  
  const MenuaLogar = styled.a`
  text-decoration: none;
  color: white;
  font-size: 22px;
`

const MenuaLogarRegistrar = styled.a`
  text-decoration: none;
  color: black;
  font-size: 22px;
  background-color: white;
  border-radius: 20px;
  padding: 7px;
`

export class Header extends Component {
  render() {
    return (
      <Cabecalho>

        <Box1>
          <ImagemLogo src={LogoShirtx} />
        </Box1>

        <Box2>
          <MenuUl>
            <MenuLi>
              <Menua>Fazer pedido</Menua>
            </MenuLi>
            <MenuLi>
              <Menua>Quem somos</Menua>
            </MenuLi>
            <MenuLi>
              <Menua>FAQ</Menua>
            </MenuLi>
          </MenuUl>
        </Box2>

        <Box3>
          <MenuUlLogar>
            <MenuLi>
              <MenuaLogar>Entrar</MenuaLogar>
            </MenuLi>
            <MenuLi>
              <MenuaLogarRegistrar>Registrar</MenuaLogarRegistrar>
            </MenuLi>
          </MenuUlLogar>
        </Box3>

      </Cabecalho>
    )
  }
}