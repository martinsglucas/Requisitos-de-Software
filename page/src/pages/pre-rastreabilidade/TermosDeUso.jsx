import React from 'react';
import styled from 'styled-components';
import SideBar from '../../components/sidebar/SideBar';
import { ThemeContext } from '../../context/themeContext';

import { Container, Texto, Titulo, H1, H2, TR, TD, Table, UL, LI, P, A, Legenda, Section} from '../../assets/styles/General';


const TermoDeUso = () => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <Container theme={theme}>
      <SideBar/>
      <Texto>
        <Titulo theme={theme}>Termos de Uso do Firefox</Titulo>
            <Section>
                <H1 theme={theme}>Sobre os seus direitos</H1>
                <P theme={theme} style={{marginBottom: '20px'}}>O Mozilla Firefox é um software livre e de código aberto, criado por uma comunidade de milhares de pessoas ao redor do mundo. Há algumas coisas que você deve saber:</P>
                <UL>
                    <LI theme={theme}>O Firefox é disponibilizado de acordo com os termos da <A href='https://www.mozilla.org/en-US/MPL/'>Mozilla Public License</A>. Isso significa que pode usar, copiar e distribuir o Firefox para outras pessoas. Também é bem-vindo para modificar o código-fonte do Firefox para atender suas necessidades. A Mozilla Public License também lhe dá o direito de distribuir as suas versões modificadas</LI>
                    <LI theme={theme}>Não lhe são concedidos quaisquer direitos sobre marcas registradas ou licenças sobre as marcas registradas da Mozilla Foundation ou de terceiros, incluindo, entre outras, ao nome ou logotipo do Firefox. Informações adicionais sobre as marcas comerciais podem ser encontradas <A href='https://www.mozilla.org/en-US/foundation/trademarks/policy/'>aqui</A>.</LI>
                    <LI theme={theme}>Alguns dos recursos do Firefox, como o Crash Reporter, lhe dão a opção de fornecer informações à Mozilla. Ao efetuar o envio destas informações, você dá à Mozilla a permissão de usá-las para aperfeiçoar seus produtos, para publicá-las em seus sites e para distribuí-las.</LI>
                    <LI theme={theme}>A forma como nós usamos seus dados pessoais e informações enviadas à Mozilla pelo Firefox está descrita na <A href='https://www.mozilla.org/pt-BR/privacy/firefox/'>Política de Privacidade do Firefox</A>.</LI>
                    <LI theme={theme}>Alguns recursos do Firefox usam serviços de informação baseados na Web. No entanto, não podemos garantir que sejam 100% precisos ou livres de erro. Mais informações, incluindo sobre como desativar os recursos que usam estes serviços, podem ser encontradas nos termos de serviço (abaixo).</LI>
                </UL>                
            </Section>
            <Section>
                <H1 theme={theme}>Serviços de informação do Mozilla Firefox baseados na web</H1>
                <P theme={theme} style={{marginBottom: '20px'}}>O Mozilla Firefox usa serviços de informações de sites (“Serviços”) para possibilitar alguns dos recursos disponibilizados para o seu uso com esta versão binária do Firefox de acordo com os termos descritos abaixo.</P>
                <UL>
                  <LI theme={theme}>A Mozilla e seus colaboradores, licenciadores e parceiros trabalham para fornecer os Serviços mais precisos e atualizados. Entretanto, nós não podemos garantir a abrangência e a ausência de erros destas informações. Por exemplo: o Serviço Safe Browsing pode não identificar alguns sites perigosos e sites seguros podem ser identificados erroneamente; no Serviço de Navegação sensível à localização todas as localizações fornecidas pelos nossos provedores do serviço são somente estimativas e nem nós nem nossos provedores do serviço garantem a precisão das localizações fornecidas.</LI>
                  <LI theme={theme}>A Mozilla pode descontinuar ou alterar os Serviços a critério dela.</LI>
                  <LI theme={theme}>Você é bem-vindo para utilizar estes Serviços com a versão associada do Firefox e a Mozilla concede a você os direitos para fazê-lo. A Mozilla e seus licenciadores reservam todos os outros direitos sobre os Serviços. Estes termos não são intencionados a limitar nenhum dos direitos concedidos com as licenças de código aberto aplicáveis ao Firefox e as correspondentes versões do código-fonte do Firefox.</LI>
                  <LI theme={theme}>Os Serviços são fornecidos “tais como estão”. A Mozilla, seus colaboradores, licenciadores e distribuidores se isentam de todas as garantias, sejam expressas ou implícitas, incluindo, entre outras, garantias de que os Serviços sejam comercializáveis e apropriados para os seus fins particulares. Você tolera todo o risco quanto a seleção dos Serviços para os seus fins e quanto à qualidade e desempenho dos Serviços. Algumas jurisdições não permitem a exclusão ou limitação de garantias implícitas, de forma que esta isenção pode não se aplicar a você.</LI>
                  <LI theme={theme}>Exceto quando exigido pela lei, a Mozilla, seus colaboradores, licenciadores e distribuidores não serão responsabilizados por quaisquer danos indiretos, especiais, acidentais, consequentes, punitivos ou exemplares decorrentes ou de alguma forma relacionados ao uso do Firefox e dos Serviços. A responsabilidade coletiva sob estes termos não excederá $500 (quinhentos dólares). Algumas jurisdições não permitem a exclusão ou limitação de certos danos, de forma que esta limitação e exclusão pode não se aplicar a você.</LI>
                  <LI theme={theme}>A Mozilla pode atualizar estes termos ocasionalmente, na medida do necessário. Estes termos não podem ser alterados ou cancelados sem o acordo escrito da Mozilla.</LI>
                  <LI theme={theme}>Estes termos são regidos pelas leis do estado da Califórnia, E.U.A., excluindo seu conflito de cláusulas legais. Se qualquer parte destes termos for identificado como inválido ou não aplicável, as partes restantes permanecerão em pleno vigor e efeito. Na eventualidade de um conflito entre uma versão traduzida destes termos e versão do idioma inglês, a versão em inglês prevalecerá.</LI>
                </UL>
                <P theme={theme} style={{marginTop: '20px'}}>Se você não quiser usar um ou mais Serviços ou não aceitar os termos a seguir, você pode desativar o(s) recurso(s) ou o(s) Serviço(s). Instruções sobre como desativar um recurso ou Serviço em particular podem ser encontradas abaixo. Outros recursos e Serviços podem ser desativados nas preferências do aplicativo.</P>
            </Section>
            <Section>
                <Legenda theme={theme}>Disponível em: <A href='https://www.mozilla.org/pt-BR/about/legal/terms/firefox/'>https://www.mozilla.org/pt-BR/about/legal/terms/firefox/</A>. Acessado: 01/04/2024 às 14:31</Legenda>
            </Section>

            <Table>
              <H1 theme={theme}>Histórico de Versões</H1>
              <TR theme={theme}>
                <TD theme={theme}>Versão</TD>
                <TD theme={theme}>Data</TD>
                <TD theme={theme}>Descrição</TD>
                <TD theme={theme}>Autor(es)</TD>
                <TD theme={theme}>Revisor(es)</TD>
              </TR>
              <TR theme={theme}>
                <TD theme={theme}>1.0</TD>
                <TD theme={theme}>01/03/2024</TD>
                <TD theme={theme}>Criação do documento de Termos de Uso</TD>
                <TD theme={theme}><A href='https://github.com/kauaneiras'>Kauan de Torres Eiras</A></TD>
                <TD theme={theme}>-</TD>
              </TR>
            </Table>
      </Texto>
    </Container>
  );
};

export default TermoDeUso;

const Imagem = styled.img`
  width: 20vw;
  padding: 40px;
`;

const defaultOptions = {
	reverse:        false,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}
