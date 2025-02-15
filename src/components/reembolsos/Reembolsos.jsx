import Home from "../../assets/Dashboard/Home.png";
import Seta from "../../assets/Dashboard/Vector.png";
import BotaoReembolso from "../../assets/Dashboard/Solicitar-Reembolso.png"
import BotaoAnalises from "../../assets/Dashboard/Analises.png"
import BotaoHistorico from "../../assets/Dashboard/Solicitar-Histórico.png"
import ImagemAnalises from "../../assets/Dashboard/botaoAnalises.png"
import ImagemAprovados from "../../assets/Dashboard/botaoAprovados.png"
import ImagemRejeitados from "../../assets/Dashboard/botaoRejeitados.png"
import ImagemSolicitados from "../../assets/Dashboard/botaoSolicitados.png"
import styles from "./Reembolsos.module.scss"

function Reembolsos () {
    return(
        <div>
            <header>
                <img src={Home} alt="símbolo de casinha" />
                <img src={Seta} alt="seta de redirecionamento" />
                <p>Reembolsos</p>
            </header>
            <main className={styles.mainReembolsos}>
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

                <section>
                    <div>
                        <img className={styles.BackgroundSolicitados} src={ImagemSolicitados} alt="botão guia de solicitações" />
                        <h4>184</h4>
                        <p>Solicitados</p>
                    </div>
                    <div>
                        <img className={styles.BackgroundAnalises} src={ImagemAnalises} alt="botão guia para solicitações em análise" />
                        <h4>74</h4>
                        <p>Em análise</p>
                    </div>
                    <div>
                        <img className={styles.BackgroundAprovadas} src={ImagemAprovados} alt="botão guia para solicitações aprovadas" />
                        <h4>195</h4>
                        <p>Aprovadas</p>
                    </div>
                    <div>
                        <img className={styles.BackgroundRejeitados} src={ImagemRejeitados} alt="botão guia para solicitações rejeitadas" />
                        <h4>41</h4>
                        <p>Rejeitados</p>
                    </div>
                </section>
            
            </main>
        </div>
    )
}

export default Reembolsos;