import React, { Component } from 'react';
import styled from 'styled-components';
import instagram from "./../img/instagram.png";
import facebook from "./../img/facebook.png";
import twitter from "./../img/twitter.png";
import youtube from "./../img/youtube.png";

const Rodape = styled.div`
  display: flex;
  background-color: #005288;
  justify-content: space-between;
  align-items: center;
  grid-column: 1/-1;
`

const ImagemRedeSocial = styled.img`
  width: 25px;
  margin: 0 10px 0 5px;
`

const TextoLogoGeral = styled.h4`
  display: flex;
  align-items: center;
  @import url('https://fonts.googleapis.com/css2?family=Comfortaa&display=swap');
  font-family: 'Comfortaa', cursive;
  margin: 0 0 0 20px;
  height: 50px;
`

const TextoLogo1 = styled.h4`
  background-color: #a7a9ac;
  padding: 5px 0 5px 5px;
  border-radius: 10px;
`

const TextoLogo2 = styled.h4`
  margin: 0 0 0 5px;
  color: #a7a9ac;
  font-family: 'Courier New', Courier, monospace;
`

const TextoCentral = styled.p`
color: #a7a9ac;
`

const SigamNos = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px 3px 0;
`

const Redes = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
`

const TextoSigam = styled.p`
  text-left: center;
  margin: 0 0 3px 0;
  color: #a7a9ac;
`

export class Footer extends Component {
	render() {
		return (
      <Rodape>

        <TextoLogoGeral>
          <TextoLogo1>
            shirtX:
          </TextoLogo1>
          <TextoLogo2>
            camisas leves que te fazem voar
          </TextoLogo2>
        </TextoLogoGeral>

        <TextoCentral>
          Pais Leme, 215, Pinheiros. CEP: 05424-150
        </TextoCentral>

        <SigamNos>
          <TextoSigam>Sigam-nos nas redes sociais:</TextoSigam>
          <Redes>
            <ImagemRedeSocial src={instagram} />
            <ImagemRedeSocial src={youtube} />
            <ImagemRedeSocial src={twitter} />
            <ImagemRedeSocial src={facebook} />
          </Redes>
        </SigamNos>

      </Rodape>
    )
	}
}

