import React, { Component } from 'react';
import styled from 'styled-components';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Filtro } from './components/filtro/Filtro';
import { Carrinho } from './components/carrinho/Carrinho';

import hamburguer from "./components/img/hamburguer.png";
import {MenuCentral, Imagem, Botao, Card2, Titulo, Preco} from './components/lista/Styled'

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
        imageUrl: hamburguer,
      },
      {
        id: 2,
        name: "Camisa 2",
        value: 20,
        imageUrl: hamburguer,
      },
      {
        id: 3,
        name: "Camisa 3",
        value: 30,
        imageUrl: hamburguer,
      },
      {
        id: 4,
        name: "Camisa 4",
        value: 40,
        imageUrl: hamburguer,
      },
      {
        id: 5,
        name: "Camisa 5",
        value: 50,
        imageUrl: hamburguer,
      },
    ],
    minPrice: "",
    maxPrice: "",
    pesquisa: "",
    order: 1
  }

  atualizaMinPreco = (event) => {
    this.setState({minPrice: event.target.value})
  }

  atualizaMaxPreco = (event) => {
    this.setState({maxPrice: event.target.value})
  }

  atualizaPesquisa = (event) => {
    this.setState({pesquisa: event.target.value})
  }

  updateOrder = (event) => {
    this.setState({order: event.target.value})
  }

  render () {
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
          {this.state.camisas.filter( camisa => {
            // Filtragem valor mínimo
            return this.state.minPrice === "" || camisa.value >= this.state.minPrice
          }).filter( camisa => {
            // Filtragem valor máximo
            return this.state.maxPrice === "" || camisa.value <= this.state.maxPrice
          }).filter( camisa => {
            // Filtragem pelo nome
            return camisa.name.toLowerCase().includes(this.state.pesquisa.toLowerCase())
          }).sort( (currentJob, nextJob) => {
            return this.state.order * (currentJob.value - nextJob.value)
          }).map(camisa => {
            return (
              <Card2>
                <Imagem src={camisa.imageUrl}/>
                <Titulo>{camisa.name}</Titulo>
                <Preco>{camisa.value}</Preco>
                <Botao>Comprar</Botao>
              </Card2>
            )
          })
          }
        </MenuCentral>

        <Carrinho />
        <Footer />
      </Principal>
    );

  }
}