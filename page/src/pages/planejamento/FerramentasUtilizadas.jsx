import React from "react";
import { Container , Texto, Titulo, H1, H2, TR, TD, Table, UL, LI, P, A, Section, } from "../../assets/styles/General";
import SideBar from "../../components/sidebar/SideBar";
import { ThemeContext } from "../../context/themeContext";

export default function FerramentasUtilizadas() {
    const { theme } = React.useContext(ThemeContext);

    return (
        <Container theme={theme}>
            <SideBar />
            <Texto>
                <Titulo theme={theme}>Ferramentas Utilizadas</Titulo>
                <Section>
                    <H1 theme={theme}>Introdução</H1>
                    <P theme={theme}>
                        Este documento lista as ferramentas que usaremos durante o desenvolvimento deste projeto. As ferramentas estão enumeradas na <strong>Tabela 1</strong>.
                    </P>
                </Section>
                <Section>
                    <Table>
                        <H1 theme={theme}>Tabela 1: Ferramentas</H1>
                        <TR theme={theme}>
                        <TD theme={theme}>
                            <img src="https://cdn1.iconfinder.com/data/icons/ionicons-fill-vol-2/512/logo-github-128.png" style={{ width: '5vw', height: 'auto' }} alt="GitHub Logo" />
                        </TD>
                        <TD theme={theme}>
                            GitHub: Utilizado para trabalhar com o projeto da disciplina
                        </TD>
                    </TR>
                    <TR theme={theme}>
                        <TD theme={theme}>
                            <img src="https://logodownload.org/wp-content/uploads/2021/08/microsoft-teams-logo-1.png" style={{ width: '5vw', height: 'auto' }} alt="Microsoft Teams Logo" />
                        </TD>
                        <TD theme={theme}>
                            Microsoft Teams: Utilizado para realizar as reuniões do grupo
                        </TD>
                    </TR>
                    <TR theme={theme}>
                        <TD theme={theme}>
                            <img src="https://logotyp.us/file/vs-code.svg" style={{ width: '5vw', height: 'auto' }} alt="Visual Studio Code Logo" />
                        </TD>
                        <TD theme={theme}>
                            Visual Studio Code: Ferramenta de programação e edição de arquivos do projeto
                        </TD>
                    </TR>
                    <TR theme={theme}>
                        <TD theme={theme}>
                            <img src="https://pluspng.com/img-png/youtube-png-youtube-transparent-background-2000.png" style={{ width: '5vw', height: 'auto' }} alt="Youtube Logo" />
                        </TD>
                        <TD theme={theme}>
                            Youtube: Usado para compartilhar as gravações das reuniões e apresentações da equipe
                        </TD>
                    </TR>
                    <TR theme={theme}>
                        <TD theme={theme}>
                            <img src="https://seeklogo.com/images/M/miro-logo-4F00416377-seeklogo.com.png" style={{ width: '5vw', height: 'auto' }} alt="Miro Logo" />
                        </TD>
                        <TD theme={theme}>
                            Miro: Usado para organização e cronograma da equipe
                        </TD>
                    </TR>
                    <TR theme={theme}>
                        <TD theme={theme}>
                            <img src="https://user-images.githubusercontent.com/16578570/61556938-3c337400-aa63-11e9-9ec1-a3ba5643a1a6.png" style={{ width: '5vw', height: 'auto' }} alt="MkDocs Logo" />
                        </TD>
                        <TD theme={theme}>
                            MkDocs: Usado para criação do GitPages do projeto
                        </TD>
                    </TR>
                    <TR theme={theme}>
                        <TD theme={theme}>
                            <img src="https://logodownload.org/wp-content/uploads/2015/04/whatsapp-logo-png.png" style={{ width: '5vw', height: 'auto' }} alt="Whatsapp Logo" />
                        </TD>
                        <TD theme={theme}>
                            Whatsapp: Principal ferramenta de comunicação da equipe
                        </TD>
                    </TR>
                    </Table>
                </Section>
                <Section>
                    <H2 theme={theme}>Referências Bibliográficas</H2>
                    <UL>
                        <LI theme={theme}>
                            GitHub. Disponível em: <A href="https://docs.github.com/pt">https://docs.github.com/pt</A>. Acesso em: 28 de mar. de 2024.
                        </LI>
                        <LI theme={theme}>
                            Microsoft Teams. Disponível em: <A href="https://learn.microsoft.com/en-us/microsoftteams/">https://learn.microsoft.com/en-us/microsoftteams/</A>. Acesso em: 28 de mar. de 2024.
                        </LI>
                        <LI theme={theme}>
                            Youtube. Disponível em: <A href="https://www.youtube.com/">https://www.youtube.com/</A>. Acesso em: 28 de mar. de 2024.
                        </LI>
                        <LI theme={theme}>
                            Miro. Disponível em: <A href="https://miro.com/pt/">https://miro.com/pt/</A>. Acesso em: 28 de mar. de 2024.
                        </LI>
                        <LI theme={theme}>
                            Visual Studio Code. Disponível em: <A href="https://code.visualstudio.com/docs">https://code.visualstudio.com/docs</A>. Acesso em: 28 de mar. de 2024.
                        </LI>
                        <LI theme={theme}>
                            MkDocs. Disponível em: <A href="https://www.mkdocs.org/">https://www.mkdocs.org/</A>. Acesso em: 28 de mar. de 2024.
                        </LI>
                        <LI theme={theme}>
                            Whatsapp. Disponível em: <A href="https://developers.facebook.com/docs/whatsapp/?locale=pt_BR">https://developers.facebook.com/docs/whatsapp/?locale=pt_BR</A>. Acesso em: 31 de mar. de 2024.
                        </LI>
                    </UL>
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
                        <TD theme={theme}>28/03/2024</TD>
                        <TD theme={theme}>Criação da página de ferramentas</TD>
                        <TD theme={theme}><A href="https://github.com/west7">Guilherme Westphall</A></TD>
                        <TD theme={theme}>Lucas Martins</TD>
                    </TR>
                </Table>
            </Texto>
        </Container>
    );
}
