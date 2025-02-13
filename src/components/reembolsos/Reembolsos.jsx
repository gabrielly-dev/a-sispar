import Home from "../../assets/Dashboard/Home.png";
import Seta from "../../assets/Dashboard/Vector.png";
import BotaoReembolso from "../../assets/Dashboard/Solicitar-Reembolso.png"
import BotaoAnalises from "../../assets/Dashboard/Analises.png"
import BotaoHistorico from "../../assets/Dashboard/Solicitar-Histórico.png"
import styles from "./Reembolsos.module.scss"

function Reembolsos () {
    return(
        <div>
            <header>
                <img src={Home} alt="símbolo de casinha" />
                <img src={Seta} alt="seta de redirecionamento" />
                <p>Reembolsos</p>
            </header>
            <main>
                <h1>Sistema de Reembolsos</h1>
                <p>Solicite novos pedidos de reembolso, visualize solicitações em análise e todo o histórico</p>
                <article>
                    <figure>
                        <img src={BotaoReembolso} alt="imagem de um reembolso"/>
                        <figcaption>Solicitar Reembolso</figcaption>
                    </figure>

                    <figure>
                        <img src={BotaoAnalises} alt="imagem de tópicos"/>
                        <figcaption>Verificar Análises</figcaption>
                    </figure>

                    <figure>
                        <img src={BotaoHistorico} alt="imagem de um relógio"/>
                        <figcaption>Histórico</figcaption>
                    </figure>
                </article>
            
            </main>
        </div>
    )
}

export default Reembolsos;