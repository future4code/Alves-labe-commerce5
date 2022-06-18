import React, { Component } from 'react';
import styled from 'styled-components';
import lixeira from "./../img/lixeira.png";

const MenuDireita = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: whitesmoke;
`

const ItensCarrinho = styled.div`
  display: flex;
  justify-content: space-between;
  /* border: solid 1px red; */
  width: 90%;
  margin: 5px;
`

const Lixeira = styled.img`
  width: 16px;
`

const BotaoRemover = styled.button`
`

export class Carrinho extends Component {
  render() {
    return (
      <MenuDireita>
        <h3>Carrinhooo</h3>
          {this.props.carrinho.map( (camisa,index) => {
            return (
              
              <ItensCarrinho >
                {console.log(index)}
                {camisa.name}
                <BotaoRemover id={index} onClick={this.props.removerItem}>{<Lixeira src={lixeira}/> }</BotaoRemover>
              </ItensCarrinho>
            )
          })}
      </MenuDireita>
    )
  }
}