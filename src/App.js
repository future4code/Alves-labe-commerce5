import React, { Component } from 'react';
import styled from 'styled-components';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Filtro } from './components/filtro/Filtro';
import { Carrinho } from './components/carrinho/Carrinho';

import camisas1 from './components/img/Camisa1.png'
import camisas2 from './components/img/Camisa2.png'
import camisas3 from './components/img/Camisa3.png'
import camisas4 from './components/img/Camisa4.png'
import camisas5 from './components/img/Camisa5.png'
import { MenuCentral, Imagem, Botao, Card2, Titulo, Preco } from './components/lista/Styled'

import lixeira from "./components/img/lixeira.png";

const Principal = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: 60px 1fr 60px;
  grid-template-columns: 225px 1fr 225px;
  box-sizing: border-box;
`

export default class App extends Component {
  state = {
    camisas: [
      {
        id: 1,
        name: "Camisa 1",
        value: 10,
        imageUrl: camisas1,
      },
      {
        id: 2,
        name: "Camisa 2",
        value: 20,
        imageUrl: camisas2,
      },
      {
        id: 3,
        name: "Camisa 3",
        value: 30,
        imageUrl: camisas3,
      },
      {
        id: 4,
        name: "Camisa 4",
        value: 40,
        imageUrl: camisas4,
      },
      {
        id: 5,
        name: "Camisa 5",
        value: 50,
        imageUrl: camisas5,
      },
    ],
    carrinho: [],
    minPrice: "",
    maxPrice: "",
    pesquisa: "",
    order: 1
  }

  atualizaMinPreco = (event) => {
    this.setState({ minPrice: event.target.value })
  }

  atualizaMaxPreco = (event) => {
    this.setState({ maxPrice: event.target.value })
  }

  atualizaPesquisa = (event) => {
    this.setState({ pesquisa: event.target.value })
  }

  updateOrder = (event) => {
    this.setState({ order: event.target.value })
  }

  removerItem = (event) => {
    // preventDefault()
    console.log('Foi clicado no botão remover')
  }

  atualizaCarrinho = (event) => {
    const novoObjeto = {
      id: event.target.id,
      name: event.target.name,
      value: event.target.value,
      repeticao: 1
    }
    const novoCarrinho = [...this.state.carrinho, novoObjeto];
    this.setState({ carrinho: novoCarrinho });
  }

  render() {
    return (
      <Principal>
        <Header />
        <Filtro
          atualizaMinPreco={this.atualizaMinPreco}
          minPrice={this.state.minPrice}
          atualizaMaxPreco={this.atualizaMaxPreco}
          maxPrice={this.state.maxPrice}
          atualizaPesquisa={this.atualizaPesquisa}
          pesquisa={this.state.pesquisa}
          updateOrder={this.updateOrder}
          order={this.state.order}
        />

        <MenuCentral>
          {this.state.camisas.filter(camisa => {
            // Filtragem valor mínimo
            return this.state.minPrice === "" || camisa.value >= this.state.minPrice
          }).filter(camisa => {
            // Filtragem valor máximo
            return this.state.maxPrice === "" || camisa.value <= this.state.maxPrice
          }).filter(camisa => {
            // Filtragem pelo nome
            return camisa.name.toLowerCase().includes(this.state.pesquisa.toLowerCase())
          }).sort((currentJob, nextJob) => {
            return this.state.order * (currentJob.value - nextJob.value)
          }).map(camisa => {
            return (
              <Card2>
                <Imagem src={camisa.imageUrl} />
                <Titulo>{camisa.name}</Titulo>
                <Preco><strong>{`R$ ${camisa.value}`}</strong></Preco>
                <Botao id={camisa.id} name={camisa.name} value={camisa.value} onClick={this.atualizaCarrinho}>Comprar</Botao>
              </Card2>
            )
          })
          }
        </MenuCentral>

        <Carrinho
          carrinho={this.state.carrinho}
          removerItem={this.removerItem}
        />

        
        {/* <h3>Carrinho</h3>
        {this.state.carrinho.map(camisa => {
          return (
            <>
              {camisa.name}
              <button id={camisa.id} onClick={this.removerItem}>{<img src={lixeira} />}</button>
            </>
          )
        })} */}

        <Footer />
      </Principal>
    );
  }
}