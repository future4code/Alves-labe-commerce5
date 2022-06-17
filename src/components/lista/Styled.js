import styled from 'styled-components';

export const MenuCentral = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 20px;
  column-gap: 20px;
  background-color: gray;
`

export const Imagem = styled.img`
  width: 150px;
`

export const Botao = styled.button`
  width: 150px;
  border: none;
  background-color: orange;
  color: black;
  font-size: 20px;
  height: 25px;
  cursor: pointer;
  margin: 0;
`

export const Card2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* box-shadow: 2px 2px 5px darkgray; */
  border: solid 1px black;
  text-align: center;
  padding: 5px;
`

export const Titulo = styled.h3`
  margin: 0;
`

export const Preco = styled.p`
  margin: 0;
`