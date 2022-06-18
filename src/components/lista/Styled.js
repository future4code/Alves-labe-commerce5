import styled from 'styled-components';

export const MenuCentral = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 10px;
  column-gap: 10px;
  margin: 0 5px 0 5px;
  background-color: white;
`

export const Imagem = styled.img`
  width: 150px;
`

export const Botao = styled.button`
  width: 150px;
  border: none;
  background-color: black;
  color: white;
  
  font-size: 20px;
  height: 25px;
  cursor: pointer;
  margin: 0;
  :hover{
    box-shadow: 1px 1px 5px #006cff;
  }
  :active{
    color: black;
  background-color: white;

  }
  `


export const Card2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 5px black;
  text-align: center;
  padding: 5px;
`

export const Titulo = styled.h3`
  margin: 0;
`

export const Preco = styled.p`
  margin: 0;
`